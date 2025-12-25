const API_URL = 'https://wp.thetimesclock.com/graphql';

async function fetchAPI(query, variables = {}) {
  const headers = { 'Content-Type': 'application/json' };
  const controller = new AbortController();
  const timeoutId = setTimeout(() => controller.abort(), 15000); // 15s timeout

  try {
    const res = await fetch(API_URL, {
      method: 'POST',
      headers,
      body: JSON.stringify({ query, variables }),
      signal: controller.signal
    });
    clearTimeout(timeoutId);
    const json = await res.json();
    return json.data;
  } catch (error) {
    clearTimeout(timeoutId);
    // console.error("API Fetch Error:", error);
    return null;
  }
}

// --- 2. GET POSTS (For Lists) ---
export async function getPostsByCategory(categoryName, limit = 10, after = null) {
  const query = `
    query GetPostsByCategory($categoryName: String!, $limit: Int!, $after: String) {
      posts(where: { categoryName: $categoryName, orderby: { field: DATE, order: DESC } }, first: $limit, after: $after) {
        pageInfo {
          hasNextPage
          endCursor
        }
        nodes {
          title slug date excerpt content
          featuredImage { node { sourceUrl altText } }
          author { node { name avatar { url } } }
          categories { nodes { name slug } }
        }
      }
    }
  `;

  const variables = { categoryName, limit };
  if (after) {
    variables.after = after;
  }

  const data = await fetchAPI(query, variables);

  // Use real data if available
  if (data?.posts?.nodes && data.posts.nodes.length > 0) {
    return {
      nodes: data.posts.nodes,
      pageInfo: data.posts.pageInfo
    };
  }

  // If no data, return empty state. NO MOCK DATA.
  if (after) {
    throw new Error("Failed to load more posts via API.");
  }

  return {
    nodes: [],
    pageInfo: { hasNextPage: false, endCursor: null }
  };
}

// --- 2b. GET ALL CATEGORIES ---
export async function getAllCategories() {
  const query = `
      {
        categories(first: 100) {
          nodes {
            name
            slug
            description
            count
          }
        }
      }
    `;
  const data = await fetchAPI(query);

  // Default categories if API fails or is empty (for dev/demo)
  const defaults = [
    { name: "Starter Story", slug: "starter-story", description: "Deep dives into how successful entrepreneurs built their businesses." },
    { name: "Brand Story", slug: "brand-story", description: "Detailed analysis of major brands and their growth strategies." },
    { name: "Finance", slug: "finance", description: "Insights into financial markets, investment trends, and money management." },
    { name: "Featured", slug: "featured", description: "Our top picks and most popular stories." }
  ];

  if (data?.categories?.nodes?.length > 0) {
    // Merge with defaults to ensure core categories exist
    const fetched = data.categories.nodes;
    // Simple distinct merge based on slug
    const map = new Map();
    defaults.forEach(c => map.set(c.slug, c));
    fetched.forEach(c => map.set(c.slug, c)); // API takes precedence or vice versa? API should match real data.
    // Actually, if API is working, trust API. But for this specific theme, we want "Starter Story" etc to definitely exist.
    return Array.from(map.values());
  }

  return defaults;
}

// --- 3. GET ALL SLUGS (CRITICAL FIX) ---
export async function getAllPostSlugs() {
  // 1. Fetch most recent 1000 posts
  const queryGeneral = `
    {
      posts(first: 1000) {
        nodes {
          slug
        }
      }
    }
  `;
  const dataGeneral = await fetchAPI(queryGeneral);
  let allSlugs = dataGeneral?.posts?.nodes || [];

  // 2. Explicitly fetch slugs for homepage categories to ensure they exist even if old
  const categories = ['Featured', 'Starter Story', 'Brand Story', 'Finance'];
  for (const cat of categories) {
    const queryCat = `
        query GetCatSlugs($cat: String!) {
          posts(where: { categoryName: $cat }, first: 100) {
            nodes {
              slug
            }
          }
        }
      `;
    const dataCat = await fetchAPI(queryCat, { cat });
    if (dataCat?.posts?.nodes) {
      allSlugs = [...allSlugs, ...dataCat.posts.nodes];
    }
  }

  // 3. Deduplicate
  const seen = new Set();
  const uniqueSlugs = allSlugs.filter(node => {
    if (seen.has(node.slug)) return false;
    seen.add(node.slug);
    return true;
  });

  // 4. Mock Slugs (REMOVED)
  // return [...uniqueSlugs, ...mocks];
  return uniqueSlugs;
}

// --- 4. GET SINGLE POST ---
export async function getPostBySlug(slug) {
  // A. Try Real API
  const query = `
    query GetPostBySlug($slug: ID!) {
      post(id: $slug, idType: SLUG) {
        title content date modified excerpt slug
        featuredImage { node { sourceUrl altText } }
        author { node { name avatar { url } } }
        categories { nodes { name slug } }
      }
    }
  `;
  let data = await fetchAPI(query, { slug });

  // A2. Fallback: Try by URI if SLUG failed (Fixes 404s for some posts)
  if (!data?.post) {
    const queryUri = `
        query GetPostByUri($slug: ID!) {
          post(id: $slug, idType: URI) {
            title content date modified excerpt slug
            featuredImage { node { sourceUrl altText } }
            author { node { name avatar { url } } }
            categories { nodes { name slug } }
          }
        }
      `;
    // Try with and without leading slash, API behavior varies
    let dataUri = await fetchAPI(queryUri, { slug });
    if (!dataUri?.post) {
      dataUri = await fetchAPI(queryUri, { slug: `/${slug}` }); // try with slash
    }

    if (dataUri?.post) {
      data = dataUri;
    }
  }

  if (data?.post) return data.post;

  // A3. Fallback: Search by Name/Slug (Fixes weird URIs)
  const querySearch = `
      query GetPostBySearch($slug: String!) {
        posts(where: { name: $slug }, first: 1) {
          nodes {
            title content date modified excerpt slug
            featuredImage { node { sourceUrl altText } }
            author { node { name avatar { url } } }
            categories { nodes { name slug } }
          }
        }
      }
    `;
  const dataSearch = await fetchAPI(querySearch, { slug });
  if (dataSearch?.posts?.nodes?.length > 0) {
    return dataSearch.posts.nodes[0];
  }

  // B. Handle Mock Pages (REMOVED)
  // if (slug.startsWith('mock-')) { ... }

  return null;
}