const API_URL = 'https://wp.thetimesclock.com/graphql';

async function fetchAPI(query, variables = {}) {
  const headers = { 'Content-Type': 'application/json' };
  const controller = new AbortController();
  const timeoutId = setTimeout(() => controller.abort(), 5000); // 5s timeout

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

// --- 1. FALLBACK DATA (For when API fails completely) ---
function getFallbackData(category, limit) {
  const images = [
    "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?w=800&q=80",
    "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=800&q=80",
    "https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=800&q=80"
  ];

  return Array(limit).fill(0).map((_, i) => ({
    title: `${category} Success Story #${i + 1}`,
    // Deterministic slug so links always match
    slug: `mock-${category.toLowerCase().replace(/\s+/g, '-')}-${i}`,
    date: new Date().toISOString(),
    excerpt: "Learn the exact strategies used by top founders to grow their revenue...",
    featuredImage: (i % 2 === 0) ? {
      node: { sourceUrl: images[i % images.length], altText: "Business" }
    } : null, // Test logo fallback
    author: { node: { name: "The Times Clock", avatar: { url: "https://i.pravatar.cc/150" } } },
    categories: { nodes: [{ name: category }] }
  }));
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

  // Otherwise return fallback (Mocking pagination for fallback is tricky, just return simple list)
  return {
    nodes: getFallbackData(categoryName, limit),
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

  // 4. Mock Slugs (converted to node format)
  // These mocks need to be in the returned array to generate paths
  let mocks = [];
  categories.forEach(cat => {
    for (let i = 0; i < 5; i++) {
      const s = `mock-${cat.toLowerCase().replace(/\s+/g, '-')}-${i}`;
      if (!seen.has(s)) {
        mocks.push({ slug: s });
        seen.add(s);
      }
    }
  });

  // Also include the hero fallback mock specifically
  const heroMock = "mock-gravity-payments";
  if (!seen.has(heroMock)) {
    mocks.push({ slug: heroMock });
  }

  return [...uniqueSlugs, ...mocks];
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

  // B. Handle Mock Pages
  if (slug.startsWith('mock-')) {
    return {
      title: "Sample Case Study Page",
      date: new Date().toISOString(),
      content: `<p>This is a generated page for the slug: <strong>${slug}</strong>.</p><p>It appears when the API cannot find the real article.</p>`,
      slug: slug,
      featuredImage: { node: { sourceUrl: "/logo.png", altText: "Logo" } },
      author: { node: { name: "The Times Clock", avatar: { url: "https://i.pravatar.cc/150" } } },
      categories: { nodes: [{ name: "Case Study" }] }
    };
  }

  return null;
}