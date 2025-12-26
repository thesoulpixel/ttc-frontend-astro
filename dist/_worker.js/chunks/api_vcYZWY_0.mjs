globalThis.process ??= {}; globalThis.process.env ??= {};
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
async function getPostsByCategory(categoryName, limit = 10, after = null) {
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

// --- 4. GET SINGLE POST ---
async function getPostBySlug(slug) {
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

export { getPostBySlug as a, getPostsByCategory as g };
