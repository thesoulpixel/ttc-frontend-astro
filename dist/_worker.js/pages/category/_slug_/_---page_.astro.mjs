globalThis.process ??= {}; globalThis.process.env ??= {};
/* empty css                                       */
import { c as createAstro, a as createComponent, m as maybeRenderHead, b as addAttribute, e as renderTemplate, r as renderComponent, F as Fragment } from '../../../chunks/astro/server_tYTg26cl.mjs';
import { $ as $$Layout } from '../../../chunks/Layout_Bmr1Xpry.mjs';
import { g as getPostsByCategory } from '../../../chunks/api_vcYZWY_0.mjs';
export { r as renderers } from '../../../chunks/_@astro-renderers_Ddps2kkj.mjs';

const $$Astro$1 = createAstro("https://thetimesclock.com");
const $$ArchivePostCard = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$ArchivePostCard;
  const { post, categoryName } = Astro2.props;
  const formattedDate = new Date(post.date).toLocaleDateString("en-US", { month: "short", year: "numeric" });
  post.featuredImage?.node?.sourceUrl || "/logo.png";
  const authorName = post.author?.node?.name || "Editor";
  const authorAvatar = post.author?.node?.avatar?.url;
  return renderTemplate`${maybeRenderHead()}<article class="bg-white rounded-2xl p-4 hover:shadow-xl transition-shadow duration-300 border border-gray-100 flex flex-col sm:flex-row gap-6 items-stretch h-full"> <!-- Image Section (40%) --> <a${addAttribute(`/post/${post.slug}`, "href")} class="w-full sm:w-2/5 shrink-0 block relative group overflow-hidden rounded-xl aspect-video sm:aspect-auto sm:h-auto bg-gray-100"> ${post.featuredImage?.node?.sourceUrl ? renderTemplate`<img${addAttribute(post.featuredImage?.node?.sourceUrl, "src")}${addAttribute(post.title, "alt")} loading="lazy" class="absolute inset-0 w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500">` : renderTemplate`<div class="absolute inset-0 w-full h-full flex items-center justify-center bg-gradient-to-br from-gray-100 to-gray-200 group-hover:scale-105 transition-transform duration-500"> <img src="/logo.png" alt="The Times Clock" class="w-16 h-16 object-contain opacity-50 grayscale"> </div>`} </a> <!-- Content Section (60%) --> <div class="flex-1 flex flex-col py-1"> <!-- Header: Label --> <div class="mb-3"> <span class="inline-block px-2 py-0.5 rounded text-[10px] sm:text-[11px] font-bold bg-[#a855f7]/10 text-[#a855f7] uppercase tracking-wider border border-[#a855f7]/20"> ${categoryName || "Case Study"} </span> </div> <!-- Title --> <a${addAttribute(`/post/${post.slug}`, "href")} class="group"> <h3 class="text-xl font-bold text-gray-900 leading-tight mb-3 group-hover:text-blue-600 transition-colors"> ${post.title} </h3> </a> <!-- Analyst Breakdown (Checklist) --> <div class="mb-6"> <p class="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-2">Analyst Breakdown</p> <ul class="space-y-1.5"> ${(() => {
    let points = [];
    if (post.content) {
      const listMatches = post.content.match(/<li>(.*?)<\/li>/g);
      if (listMatches) {
        points = listMatches.slice(0, 3).map((item) => item.replace(/<\/?li>/g, "").replace(/<[^>]*>/g, "").trim());
      }
      if (points.length === 0) {
        const sentences = post.content.replace(/<[^>]*>/g, "").split(/[.!?]/).filter((s) => s.trim().length > 10);
        points = sentences.slice(0, 3).map((s) => s.trim());
      }
    }
    if (points.length === 0) {
      points = [
        "Revenue model & margins",
        "Customer acquisition strategy",
        "Tech stack & scaling tools"
      ];
    }
    while (points.length < 3) {
      points.push("Business strategy & insights");
    }
    return points.slice(0, 3).map((point) => renderTemplate`<li class="flex items-center gap-2 text-xs font-medium text-gray-600"> <svg class="w-3.5 h-3.5 text-green-500 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="3"><path d="M5 13l4 4L19 7"></path></svg> <span class="line-clamp-1">${point}</span> </li>`);
  })()} </ul> </div> <!-- Footer: Author & Date --> <div class="mt-auto flex items-center gap-3 pt-4 border-t border-gray-100"> ${authorAvatar && renderTemplate`<img${addAttribute(authorAvatar, "src")}${addAttribute(authorName, "alt")} class="w-6 h-6 rounded-full">`} <span class="text-xs font-bold text-gray-900">${authorName}</span> <span class="text-[10px] font-bold text-gray-400 uppercase tracking-wider ml-auto">${formattedDate}</span> </div> </div> </article>`;
}, "C:/Users/richa/Downloads/APP INVENTOR/thetimes clock/TTC ASTRO THEME - Antigravity/src/components/ArchivePostCard.astro", void 0);

const $$Astro = createAstro("https://thetimesclock.com");
async function getStaticPaths({ paginate }) {
  let categories = [];
  try {
    const response = await fetch("https://wp.thetimesclock.com/graphql", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        query: `
            {
              categories(first: 100) {
                nodes {
                  name
                  slug
                  description
                }
              }
            }
          `
      })
    });
    const { data } = await response.json();
    categories = data?.categories?.nodes || [];
  } catch (e) {
    console.error("Error fetching categories for static paths", e);
  }
  const defaults = [
    { name: "Featured", slug: "featured", description: "Our most popular stories." },
    { name: "Starter Story", slug: "starter-story", description: "Deep dives into how successful entrepreneurs built their businesses." },
    { name: "Brand Story", slug: "brand-story", description: "Detailed analysis of major brands and their growth strategies." },
    { name: "Finance", slug: "finance", description: "Insights into financial markets, investment trends, and money management." },
    { name: "News", slug: "news", description: "Latest updates and news." }
  ];
  defaults.forEach((d) => {
    if (!categories.find((c) => c.slug === d.slug)) {
      categories.push(d);
    }
  });
  const allPaths = [];
  for (const category of categories) {
    try {
      const { nodes: posts } = await getPostsByCategory(category.name, 1e3);
      const safePosts = posts || [];
      const categoryPaths = paginate(safePosts, {
        params: { slug: category.slug },
        props: { category },
        pageSize: 6
        // Requested 6 posts per page
      });
      allPaths.push(...categoryPaths);
    } catch (err) {
      const categoryPaths = paginate([], {
        params: { slug: category.slug },
        props: { category },
        pageSize: 6
      });
      allPaths.push(...categoryPaths);
    }
  }
  return allPaths;
}
const $$ = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$;
  const { page, category } = Astro2.props;
  const { data: posts, currentPage, lastPage, url } = page;
  const title = `${category.name} - The Times Clock`;
  const description = `Deep dives into ${category.name} and related business strategies.`;
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": title, "description": description }, { "default": async ($$result2) => renderTemplate` ${maybeRenderHead()}<main class="max-w-full mx-auto px-6 sm:px-12 lg:px-[10%] py-8 font-['Inter']"> <!-- HEADER SECTION --> <header class="mb-20 text-left relative"> <!-- Decorative background elements --> <div class="absolute top-0 right-0 -translate-y-1/2 w-64 h-64 bg-gradient-to-br from-blue-50 to-purple-50 rounded-full blur-3xl opacity-60 -z-10 pointer-events-none"></div> <!-- Red "ARCHIVE" Label --> <div class="inline-flex items-center gap-2 mb-4"> <span class="w-8 h-[2px] bg-[#ff3b30]"></span> <span class="text-[#ff3b30] font-bold tracking-[0.25em] uppercase text-xs">Archive</span> </div> <!-- Big Bold Title with tighter leading (Matched to Contact Page) --> <h1 class="text-4xl sm:text-5xl md:text-6xl font-black text-[#111827] mb-[5px] tracking-tighter uppercase leading-[0.95]"> ${category.name} </h1> <!-- Description with better typography --> <div class="flex flex-col sm:flex-row items-start gap-6 border-l-4 border-gray-100 pl-6"> <p class="text-sm sm:text-lg text-gray-500 max-w-3xl leading-relaxed font-medium tracking-tight text-pretty"> ${description} </p> </div> </header> <!-- POSTS GRID --> ${posts.length > 0 ? renderTemplate`<div id="article-grid" class="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-16"> ${posts.map((post) => renderTemplate`<div class="article-card block h-full"> ${renderComponent($$result2, "ArchivePostCard", $$ArchivePostCard, { "post": post, "categoryName": category.name })} </div>`)} </div>` : renderTemplate`<div class="text-center py-32 bg-gray-50 rounded-3xl border border-gray-100 dashed"> <p class="text-2xl text-gray-400 font-bold mb-4">No stories found.</p> <p class="text-gray-400">Check back later for new content.</p> <a href="/" class="text-blue-600 font-bold mt-6 inline-block hover:underline">Return Home</a> </div>`} <!-- PAGINATION --> ${lastPage > 1 && renderTemplate`<div class="flex flex-col items-center mt-24"> <div class="flex items-center gap-2">  ${url.prev ? renderTemplate`<a${addAttribute(url.prev, "href")} class="w-12 h-12 flex items-center justify-center rounded-full border-2 border-gray-100 hover:border-black text-gray-400 hover:text-black transition-all duration-300"> <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="m15 18-6-6 6-6"></path></svg> </a>` : renderTemplate`<span class="w-12 h-12 flex items-center justify-center rounded-full border-2 border-gray-50 text-gray-200 cursor-not-allowed"> <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="m15 18-6-6 6-6"></path></svg> </span>`} <!-- Numbers --> <div class="flex items-center gap-2 px-4"> ${(() => {
    const pages = [];
    pages.push(1);
    if (currentPage > 1 && currentPage < lastPage) {
      pages.push(currentPage);
    }
    if (lastPage > 1) {
      pages.push(lastPage);
    }
    const uniquePages = [...new Set(pages)].sort((a, b) => a - b);
    return uniquePages.map((pageNum, index) => {
      const prevPage = uniquePages[index - 1];
      const isGap = prevPage && pageNum - prevPage > 1;
      return renderTemplate`${renderComponent($$result2, "Fragment", Fragment, {}, { "default": async ($$result3) => renderTemplate`${isGap && renderTemplate`<span class="text-gray-300 font-bold px-1">...</span>`}<a${addAttribute(pageNum === 1 ? `/category/${category.slug}` : `/category/${category.slug}/${pageNum}`, "href")}${addAttribute(`w-10 h-10 flex items-center justify-center rounded-full text-sm font-bold transition-all duration-300 ${pageNum === currentPage ? "bg-black text-white scale-110 shadow-lg" : "text-gray-400 hover:text-black hover:bg-gray-50"}`, "class")}> ${pageNum} </a> ` })}`;
    });
  })()} </div> <!-- Next --> ${url.next ? renderTemplate`<a${addAttribute(url.next, "href")} class="w-12 h-12 flex items-center justify-center rounded-full border-2 border-gray-100 hover:border-black text-gray-400 hover:text-black transition-all duration-300"> <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="m9 18 6-6-6-6"></path></svg> </a>` : renderTemplate`<span class="w-12 h-12 flex items-center justify-center rounded-full border-2 border-gray-50 text-gray-200 cursor-not-allowed"> <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="m9 18 6-6-6-6"></path></svg> </span>`} </div> <p class="text-xs font-bold text-gray-300 uppercase tracking-widest mt-6">
Page ${currentPage} of ${lastPage} </p> </div>`} </main> ` })}`;
}, "C:/Users/richa/Downloads/APP INVENTOR/thetimes clock/TTC ASTRO THEME - Antigravity/src/pages/category/[slug]/[...page].astro", void 0);

const $$file = "C:/Users/richa/Downloads/APP INVENTOR/thetimes clock/TTC ASTRO THEME - Antigravity/src/pages/category/[slug]/[...page].astro";
const $$url = "/category/[slug]/[...page]";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$,
  file: $$file,
  getStaticPaths,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
