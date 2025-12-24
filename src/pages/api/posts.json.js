
import { getPostsByCategory } from '../../lib/api';

export const prerender = false;

export async function GET({ request }) {
    const url = new URL(request.url);
    const category = url.searchParams.get('category');
    let after = url.searchParams.get('after');
    const limit = parseInt(url.searchParams.get('limit') || '10');

    // FIX: Handle "null"/"undefined" strings from client
    if (!after || after === 'null' || after === 'undefined') {
        after = null;
    }

    if (!category) {
        return new Response(JSON.stringify({ error: 'Category is required' }), {
            status: 400,
            headers: { 'Content-Type': 'application/json' }
        });
    }

    try {
        console.log(`[API] Fetching posts for category: ${category}, limit: ${limit}, after: ${after}`);
        const data = await getPostsByCategory(category, limit, after);
        return new Response(JSON.stringify(data), {
            status: 200,
            headers: { 'Content-Type': 'application/json' }
        });
    } catch (error) {
        console.error(`[API Error] Failed to fetch posts:`, error);
        return new Response(JSON.stringify({ error: 'Failed to fetch posts', details: error.message }), {
            status: 500,
            headers: { 'Content-Type': 'application/json' }
        });
    }
}
