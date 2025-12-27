globalThis.process ??= {}; globalThis.process.env ??= {};
/* empty css                                                   */
import { c as createAstro, a as createComponent, e as renderTemplate, b as addAttribute, m as maybeRenderHead, r as renderComponent, g as defineScriptVars, u as unescapeHTML } from '../../chunks/astro/server_tYTg26cl.mjs';
import { a as getPostBySlug, g as getPostsByCategory } from '../../chunks/api_vcYZWY_0.mjs';
import { $ as $$Layout } from '../../chunks/Layout_Bmr1Xpry.mjs';
/* empty css                                     */
import { C as ChevronRight } from '../../chunks/chevron-right_CflOToG6.mjs';
import { c as createLucideIcon } from '../../chunks/ClientRouter_DuDqnulP.mjs';
export { r as renderers } from '../../chunks/_@astro-renderers_Ddps2kkj.mjs';

/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */


const __iconNode$3 = [["path", { d: "m15 18-6-6 6-6", key: "1wnfg3" }]];
const ChevronLeft = createLucideIcon("chevron-left", __iconNode$3);

/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */


const __iconNode$2 = [
  ["rect", { width: "14", height: "14", x: "8", y: "8", rx: "2", ry: "2", key: "17jyea" }],
  ["path", { d: "M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2", key: "zix9uf" }]
];
const Copy = createLucideIcon("copy", __iconNode$2);

/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */


const __iconNode$1 = [
  [
    "path",
    { d: "M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z", key: "1jg4f8" }
  ]
];
const Facebook = createLucideIcon("facebook", __iconNode$1);

/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */


const __iconNode = [
  [
    "path",
    {
      d: "M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z",
      key: "c2jq9f"
    }
  ],
  ["rect", { width: "4", height: "12", x: "2", y: "9", key: "mk3on5" }],
  ["circle", { cx: "4", cy: "4", r: "2", key: "bt5ra8" }]
];
const Linkedin = createLucideIcon("linkedin", __iconNode);

var __freeze$1 = Object.freeze;
var __defProp$1 = Object.defineProperty;
var __template$1 = (cooked, raw) => __freeze$1(__defProp$1(cooked, "raw", { value: __freeze$1(cooked.slice()) }));
var _a$1;
const $$Astro$1 = createAstro("https://thetimesclock.com");
const $$AdBanner = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$AdBanner;
  const {
    slotId = "0000000000",
    // Placeholder default
    format = "auto",
    responsive = true,
    className = ""
  } = Astro2.props;
  const PUBLISHER_ID = "ca-pub-9250289969484573";
  const containerId = `ad-container-${Math.random().toString(36).substr(2, 9)}`;
  return renderTemplate(_a$1 || (_a$1 = __template$1(["", "<div", "", ` data-astro-cid-33f3bo6r> <span class="text-[10px] text-gray-300 absolute top-1 right-2 uppercase tracking-widest font-medium z-0" data-astro-cid-33f3bo6r>Advertisement</span> <!-- The Ad Unit --> <!-- 
    NOTE: You must replace the 'slotId' prop with a valid Data Ad Slot ID from your Google AdSense Dashboard.
    Each ad placement should ideally have a unique Slot ID for better tracking.
  --> <ins class="adsbygoogle z-10 relative" style="display:block; min-width: 300px; min-height: 250px; width: 100%;"`, "", "", "", " data-astro-cid-33f3bo6r></ins> <script>\n       (adsbygoogle = window.adsbygoogle || []).push({});\n  <\/script> </div> "])), maybeRenderHead(), addAttribute(containerId, "id"), addAttribute(`ad-wrapper my-8 flex justify-center items-center bg-gray-50 border border-gray-100/50 rounded-xl overflow-hidden relative ${className}`, "class"), addAttribute(PUBLISHER_ID, "data-ad-client"), addAttribute(slotId, "data-ad-slot"), addAttribute(format, "data-ad-format"), addAttribute(responsive ? "true" : "false", "data-full-width-responsive"));
}, "C:/Users/richa/Downloads/APP INVENTOR/thetimes clock/TTC ASTRO THEME - Antigravity/src/components/AdBanner.astro", void 0);

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(raw || cooked.slice()) }));
var _a;
const $$Astro = createAstro("https://thetimesclock.com");
async function getStaticPaths() {
  const headers = { "Content-Type": "application/json" };
  const endpoint = "https://wp.thetimesclock.com/graphql";
  const queryRecent = `
    query GetRecentSlugs {
      posts(first: 10000) {
        nodes {
          slug
        }
      }
    }
  `;
  const queryCategories = `
    query GetCategorySlugs {
      featured: posts(where: { categoryName: "Featured" }, first: 500) { nodes { slug } }
      starter: posts(where: { categoryName: "Starter Story" }, first: 500) { nodes { slug } }
      brand: posts(where: { categoryName: "Brand Story" }, first: 500) { nodes { slug } }
      finance: posts(where: { categoryName: "Finance" }, first: 500) { nodes { slug } }
    }
  `;
  try {
    const [recentRes, catRes] = await Promise.all([
      fetch(endpoint, { method: "POST", headers, body: JSON.stringify({ query: queryRecent }) }),
      fetch(endpoint, { method: "POST", headers, body: JSON.stringify({ query: queryCategories }) })
    ]);
    const recentData = await recentRes.json();
    const catData = await catRes.json();
    const recentSlugs = recentData.data?.posts?.nodes || [];
    const featuredSlugs = catData.data?.featured?.nodes || [];
    const starterSlugs = catData.data?.starter?.nodes || [];
    const brandSlugs = catData.data?.brand?.nodes || [];
    const financeSlugs = catData.data?.finance?.nodes || [];
    const allNodes = [
      ...recentSlugs,
      ...featuredSlugs,
      ...starterSlugs,
      ...brandSlugs,
      ...financeSlugs
    ];
    const uniqueSlugs = /* @__PURE__ */ new Set();
    const paths = [];
    for (const node of allNodes) {
      if (node.slug && !uniqueSlugs.has(node.slug)) {
        uniqueSlugs.add(node.slug);
        paths.push({ params: { slug: node.slug } });
      }
    }
    return paths;
  } catch (e) {
    console.error("Error fetching static paths:", e);
    return [];
  }
}
const $$slug = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$slug;
  const { slug } = Astro2.params;
  const post = await getPostBySlug(slug);
  if (!post) return Astro2.redirect("/404");
  const cleanDesc = post.excerpt ? post.excerpt.replace(/<\/?[^>]+(>|$)/g, "").trim().slice(0, 160) + "..." : "Read this full case study on The Times Clock.";
  const seoImage = post.featuredImage?.node?.sourceUrl || "https://thetimesclock.com/default-share-image.jpg";
  const category = post.categories?.nodes[0]?.name || "News";
  const { nodes: relatedPosts } = await getPostsByCategory(category, 8);
  const formattedDate = new Date(post.date).toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" });
  const authorName = post.author?.node?.name || "Editor";
  const authorAvatar = post.author?.node?.avatar?.url;
  const featuredImgUrl = post.featuredImage?.node?.sourceUrl;
  const AD_SLOT_ID = "9786811867";
  const PUBLISHER_ID = "ca-pub-9250289969484573";
  function injectAdsIntoContent(htmlContent) {
    if (!htmlContent) return "";
    const paragraphs = htmlContent.split("</p>");
    const totalParagraphs = paragraphs.length - 1;
    if (totalParagraphs < 6) {
      return htmlContent;
    }
    let insertionIndices = [];
    if (totalParagraphs <= 15) {
      insertionIndices.push(Math.floor(totalParagraphs / 2));
    } else if (totalParagraphs <= 25) {
      insertionIndices.push(Math.floor(totalParagraphs / 3));
      insertionIndices.push(Math.floor(totalParagraphs * 2 / 3));
    } else {
      insertionIndices.push(Math.floor(totalParagraphs / 4));
      insertionIndices.push(Math.floor(totalParagraphs * 2 / 4));
      insertionIndices.push(Math.floor(totalParagraphs * 3 / 4));
    }
    const getAdHtml = (index) => `
    <div class="ad-in-article my-10 flex justify-center items-center bg-gray-50 border border-gray-100 rounded-lg overflow-hidden min-h-[280px] relative w-full">
      <span class="text-[10px] text-gray-400 absolute top-2 right-3 uppercase tracking-widest font-semibold">Advertisement</span>
      
      <!-- In-Article Ad Unit -->
      <ins class="adsbygoogle"
           style="display:block; text-align:center; width: 100%;"
           data-ad-layout="in-article"
           data-ad-format="fluid"
           data-ad-client="${PUBLISHER_ID}"
           data-ad-slot="${AD_SLOT_ID}"></ins>
      
      <script>
           (adsbygoogle = window.adsbygoogle || []).push({});
      <\/script>
    </div>
  `;
    return paragraphs.map((p, index) => {
      const paragraphHtml = p + "</p>";
      if (insertionIndices.includes(index)) {
        return paragraphHtml + getAdHtml();
      }
      return paragraphHtml;
    }).join("");
  }
  const processedContent = injectAdsIntoContent(post.content);
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": post.title, "description": cleanDesc, "image": seoImage, "type": "article", "publishDate": post.date, "author": post.author?.node?.name, "canonical": `https://thetimesclock.com/post/${post.slug}`, "data-astro-cid-ztig7rse": true }, { "default": async ($$result2) => renderTemplate(_a || (_a = __template(["  ", '<main class="max-w-[1500px] mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12" data-astro-cid-ztig7rse> <!-- HERO SECTION --> <header class="max-w-[90%] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 mb-20 items-center" data-astro-cid-ztig7rse> <div class="lg:col-span-7 order-2 lg:order-1" data-astro-cid-ztig7rse> ', ' </div> <div class="lg:col-span-5 order-1 lg:order-2 flex flex-col justify-center" data-astro-cid-ztig7rse> <div class="flex items-center gap-3 mb-6" data-astro-cid-ztig7rse> <span class="px-3 py-1 bg-black text-white text-[10px] font-bold uppercase tracking-widest rounded-sm" data-astro-cid-ztig7rse>', '</span> <span class="text-gray-500 text-xs font-medium uppercase tracking-wider" data-astro-cid-ztig7rse>', '</span> </div> <h1 class="text-3xl md:text-5xl font-black leading-[1.1] mb-8 tracking-tight text-gray-900" data-astro-cid-ztig7rse> ', ' </h1> <div class="flex items-start gap-4 pt-2 border-t border-gray-100 mt-2" data-astro-cid-ztig7rse> ', ' <div data-astro-cid-ztig7rse> <p class="text-xs text-gray-400 font-bold uppercase tracking-wider mb-0.5" data-astro-cid-ztig7rse>Written By</p> <p class="font-bold text-gray-900 text-sm mb-2" data-astro-cid-ztig7rse>', '</p> <div class="flex gap-3 text-gray-400" data-astro-cid-ztig7rse> <a href="#" class="hover:text-black transition-colors" data-astro-cid-ztig7rse><svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4 fill-current" viewBox="0 0 24 24" data-astro-cid-ztig7rse><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zl-1.161-.31L4.14 2.25H4.14l11.474 17.5H19.2l-5.244-6.38z" data-astro-cid-ztig7rse></path></svg></a> <a href="#" class="hover:text-[#0077b5] transition-colors" data-astro-cid-ztig7rse>', '</a> </div> </div> </div> </div> </header> <!-- MAIN CONTENT --> <div class="grid grid-cols-1 lg:grid-cols-12 gap-12 relative max-w-[95%] mx-auto" data-astro-cid-ztig7rse> <!-- LEFT SIDEBAR: TOC & Desktop Share --> <aside class="hidden lg:block lg:col-span-2" data-astro-cid-ztig7rse> <div class="sticky top-32 flex flex-col gap-10" data-astro-cid-ztig7rse> <!-- TOC --> <div data-astro-cid-ztig7rse> <p class="text-xs font-bold text-gray-900 uppercase tracking-wider mb-4 border-b border-gray-100 pb-2" data-astro-cid-ztig7rse>Table of Contents</p> <nav id="toc" class="flex flex-col gap-0.5 -ml-4" data-astro-cid-ztig7rse> <!-- JS Populated --> </nav> </div> </div> </aside> <!-- CENTER CONTENT --> <article class="lg:col-span-7 article-content" data-astro-cid-ztig7rse> <div class="prose prose-lg max-w-none \n            prose-headings:font-black prose-headings:tracking-tight prose-headings:text-gray-900 prose-headings:mt-12 prose-headings:mb-6 prose-headings:scroll-mt-32\n            prose-p:text-gray-600 prose-p:leading-[1.8] prose-p:font-medium\n            prose-a:text-green-600 prose-a:no-underline prose-a:font-bold hover:prose-a:underline\n            prose-img:rounded-2xl prose-img:shadow-lg prose-img:my-10\n            first-letter:text-6xl first-letter:font-black first-letter:text-black first-letter:mr-3 first-letter:float-left first-letter:leading-[0.8]\n            prose-li:text-gray-600" data-astro-cid-ztig7rse> <div id="post-content-body" data-astro-cid-ztig7rse>', `</div> </div> <!-- POST FOOTER SHARE --> <div class="mt-16 pt-8 border-t border-gray-100" data-astro-cid-ztig7rse> <p class="text-center text-xs font-bold text-gray-400 uppercase tracking-wider mb-6" data-astro-cid-ztig7rse>Share this article</p> <div class="flex justify-center gap-4" data-astro-cid-ztig7rse> <button onclick="share('twitter')" class="p-3 rounded-full bg-gray-50 text-gray-600 hover:bg-black hover:text-white transition-colors" data-astro-cid-ztig7rse><svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5 fill-current" viewBox="0 0 24 24" data-astro-cid-ztig7rse><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zl-1.161-.31L4.14 2.25H4.14l11.474 17.5H19.2l-5.244-6.38z" data-astro-cid-ztig7rse></path></svg></button> <button onclick="share('facebook')" class="p-3 rounded-full bg-gray-50 text-gray-600 hover:bg-[#1877F2] hover:text-white transition-colors" data-astro-cid-ztig7rse>`, `</button> <button onclick="share('linkedin')" class="p-3 rounded-full bg-gray-50 text-gray-600 hover:bg-[#0077b5] hover:text-white transition-colors" data-astro-cid-ztig7rse>`, `</button> <button onclick="share('whatsapp')" class="p-3 rounded-full bg-gray-50 text-gray-600 hover:bg-[#25D366] hover:text-white transition-colors" data-astro-cid-ztig7rse> <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="w-5 h-5" data-astro-cid-ztig7rse><path d="M3 21l1.65-3.8a9 9 0 1 1 3.4 2.9L3 21" data-astro-cid-ztig7rse></path><path d="M9 10a.5.5 0 0 0 1 0V9a.5.5 0 0 0-1 0v1a5 5 0 0 0 5 5h1a.5.5 0 0 0 0-1h-1a.5.5 0 0 0 0 1" data-astro-cid-ztig7rse></path></svg> </button> <button onclick="copyLink()" class="p-3 rounded-full bg-gray-50 text-gray-600 hover:bg-gray-800 hover:text-white transition-colors" data-astro-cid-ztig7rse>`, '</button> </div> </div> </article> <!-- RIGHT SIDEBAR --> <aside class="lg:col-span-3 space-y-8" data-astro-cid-ztig7rse> <div class="bg-gray-50 p-6 rounded-2xl border border-gray-100/50 sticky top-32" data-astro-cid-ztig7rse> <span class="text-xs font-black text-gray-900 uppercase tracking-widest block mb-4 border-b border-gray-200 pb-2" data-astro-cid-ztig7rse>', '</span> <h3 class="text-xl font-black leading-tight mb-4 tracking-tight" data-astro-cid-ztig7rse>Start your own success story today.</h3> <p class="text-gray-500 mb-6 text-sm leading-relaxed" data-astro-cid-ztig7rse>Join our community of 50,000+ founders and get daily insights.</p> <a href="/subscribe" class="block text-center w-full bg-[#22c55e] hover:bg-green-600 transition-colors text-white font-black py-3.5 rounded-xl uppercase text-xs tracking-widest shadow-lg shadow-green-500/20 hover:shadow-green-500/30 hover:-translate-y-1 transform duration-200" data-astro-cid-ztig7rse>\nJoin the Community\n</a> </div> <!-- AdSense: Sidebar Square --> ', ' </aside> </div> <!-- CONTINUE READING SLIDER (Vertical Design) --> <section class="mt-32 pt-12 border-t border-gray-100" data-astro-cid-ztig7rse> <div class="flex items-center justify-between mb-8 px-4" data-astro-cid-ztig7rse> <h2 class="text-2xl font-black text-gray-900 uppercase tracking-tighter" data-astro-cid-ztig7rse>More Stories</h2> <div class="flex gap-2" data-astro-cid-ztig7rse> <button id="slide-left" class="p-2 rounded-full border border-gray-200 hover:bg-gray-100 transition-colors" data-astro-cid-ztig7rse>', '</button> <button id="slide-right" class="p-2 rounded-full border border-gray-200 hover:bg-gray-100 transition-colors" data-astro-cid-ztig7rse>', '</button> </div> </div> <div id="slider-container" class="flex gap-6 overflow-x-auto snap-x snap-mandatory pb-12 px-4 scroll-smooth no-scrollbar" data-astro-cid-ztig7rse> ', " </div> </section> </main> <script>(function(){", "\n        // SHARE FUNCTIONS\n        window.share = (platform) => {\n            const url = window.location.href;\n            const text = title;\n            let shareUrl = '';\n\n            switch(platform) {\n                case 'twitter': shareUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(text)}&url=${encodeURIComponent(url)}`; break;\n                case 'facebook': shareUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`; break;\n                case 'linkedin': shareUrl = `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`; break;\n                case 'whatsapp': shareUrl = `https://wa.me/?text=${encodeURIComponent(text + ' ' + url)}`; break;\n            }\n            if(shareUrl) window.open(shareUrl, '_blank', 'width=600,height=400');\n        };\n\n        window.copyLink = () => {\n            navigator.clipboard.writeText(window.location.href);\n            alert('Link copied to clipboard!');\n        };\n\n        // SLIDER LOGIC\n        const container = document.getElementById('slider-container');\n        document.getElementById('slide-right')?.addEventListener('click', () => container.scrollBy({ left: 320, behavior: 'smooth' }));\n        document.getElementById('slide-left')?.addEventListener('click', () => container.scrollBy({ left: -320, behavior: 'smooth' }));\n\n        // TOC GENERATOR & HIGHLIGHTER\n        const contentBody = document.getElementById('post-content-body');\n        const tocContainer = document.getElementById('toc');\n\n        if (contentBody && tocContainer) {\n            const headings = Array.from(contentBody.querySelectorAll('h1, h2, h3'));\n            \n            if (headings.length === 0) {\n                tocContainer.innerHTML = '<p class=\"text-xs italic text-gray-400\">No headings found.</p>';\n            } else {\n                headings.forEach((heading, index) => {\n                    if (!heading.id) heading.id = `idx-${index}`;\n                    \n                    const link = document.createElement('a');\n                    link.href = `#${heading.id}`;\n                    link.dataset.target = heading.id;\n                    link.className = `group flex items-start gap-2 py-0.5 transition-all text-xs sm:text-sm font-medium text-gray-500 hover:text-gray-900 leading-tight cursor-pointer ${heading.tagName === 'H3' ? 'ml-4 opacity-80' : ''}`;\n                    \n                    const bullet = document.createElement('span');\n                    bullet.className = 'w-1.5 h-1.5 mt-1.5 rounded-full bg-gray-200 shrink-0 transition-colors duration-300 group-hover:bg-gray-400 toc-bullet';\n                    \n                    const text = document.createElement('span');\n                    text.textContent = heading.textContent;\n                    text.className = 'transition-colors duration-200';\n\n                    link.appendChild(bullet);\n                    link.appendChild(text);\n\n                    link.onclick = (e) => {\n                        e.preventDefault();\n                        heading.scrollIntoView({ behavior: 'smooth', block: 'start' });\n                        // Update active manually\n                        updateActiveToc(heading.id);\n                    };\n\n                    tocContainer.appendChild(link);\n                });\n\n                function updateActiveToc(activeId) {\n                    document.querySelectorAll('#toc a').forEach(link => {\n                        const bullet = link.querySelector('.toc-bullet');\n                        const text = link.querySelector('span:last-child');\n                        \n                        // Reset\n                        link.classList.remove('text-gray-900');\n                        link.classList.add('text-gray-500');\n                        bullet.classList.remove('bg-[#22c55e]', 'ring-2', 'ring-green-100');\n                        bullet.classList.add('bg-gray-200');\n                        text.classList.remove('font-bold');\n\n                        // Activate\n                        if (link.dataset.target === activeId) {\n                            link.classList.remove('text-gray-500');\n                            link.classList.add('text-gray-900');\n                            bullet.classList.remove('bg-gray-200', 'group-hover:bg-gray-400');\n                            bullet.classList.add('bg-[#22c55e]', 'ring-2', 'ring-green-100');\n                            text.classList.add('font-bold');\n                        }\n                    });\n                }\n\n                // Intersection Observer for Active State\n                const observer = new IntersectionObserver((entries) => {\n                    entries.forEach(entry => {\n                        if (entry.isIntersecting) {\n                            updateActiveToc(entry.target.id);\n                        }\n                    });\n                }, { rootMargin: '-100px 0px -60% 0px', threshold: 0.1 });\n\n                headings.forEach(h => observer.observe(h));\n            }\n        }\n    })();<\/script> "], ["  ", '<main class="max-w-[1500px] mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12" data-astro-cid-ztig7rse> <!-- HERO SECTION --> <header class="max-w-[90%] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 mb-20 items-center" data-astro-cid-ztig7rse> <div class="lg:col-span-7 order-2 lg:order-1" data-astro-cid-ztig7rse> ', ' </div> <div class="lg:col-span-5 order-1 lg:order-2 flex flex-col justify-center" data-astro-cid-ztig7rse> <div class="flex items-center gap-3 mb-6" data-astro-cid-ztig7rse> <span class="px-3 py-1 bg-black text-white text-[10px] font-bold uppercase tracking-widest rounded-sm" data-astro-cid-ztig7rse>', '</span> <span class="text-gray-500 text-xs font-medium uppercase tracking-wider" data-astro-cid-ztig7rse>', '</span> </div> <h1 class="text-3xl md:text-5xl font-black leading-[1.1] mb-8 tracking-tight text-gray-900" data-astro-cid-ztig7rse> ', ' </h1> <div class="flex items-start gap-4 pt-2 border-t border-gray-100 mt-2" data-astro-cid-ztig7rse> ', ' <div data-astro-cid-ztig7rse> <p class="text-xs text-gray-400 font-bold uppercase tracking-wider mb-0.5" data-astro-cid-ztig7rse>Written By</p> <p class="font-bold text-gray-900 text-sm mb-2" data-astro-cid-ztig7rse>', '</p> <div class="flex gap-3 text-gray-400" data-astro-cid-ztig7rse> <a href="#" class="hover:text-black transition-colors" data-astro-cid-ztig7rse><svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4 fill-current" viewBox="0 0 24 24" data-astro-cid-ztig7rse><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zl-1.161-.31L4.14 2.25H4.14l11.474 17.5H19.2l-5.244-6.38z" data-astro-cid-ztig7rse></path></svg></a> <a href="#" class="hover:text-[#0077b5] transition-colors" data-astro-cid-ztig7rse>', '</a> </div> </div> </div> </div> </header> <!-- MAIN CONTENT --> <div class="grid grid-cols-1 lg:grid-cols-12 gap-12 relative max-w-[95%] mx-auto" data-astro-cid-ztig7rse> <!-- LEFT SIDEBAR: TOC & Desktop Share --> <aside class="hidden lg:block lg:col-span-2" data-astro-cid-ztig7rse> <div class="sticky top-32 flex flex-col gap-10" data-astro-cid-ztig7rse> <!-- TOC --> <div data-astro-cid-ztig7rse> <p class="text-xs font-bold text-gray-900 uppercase tracking-wider mb-4 border-b border-gray-100 pb-2" data-astro-cid-ztig7rse>Table of Contents</p> <nav id="toc" class="flex flex-col gap-0.5 -ml-4" data-astro-cid-ztig7rse> <!-- JS Populated --> </nav> </div> </div> </aside> <!-- CENTER CONTENT --> <article class="lg:col-span-7 article-content" data-astro-cid-ztig7rse> <div class="prose prose-lg max-w-none \n            prose-headings:font-black prose-headings:tracking-tight prose-headings:text-gray-900 prose-headings:mt-12 prose-headings:mb-6 prose-headings:scroll-mt-32\n            prose-p:text-gray-600 prose-p:leading-[1.8] prose-p:font-medium\n            prose-a:text-green-600 prose-a:no-underline prose-a:font-bold hover:prose-a:underline\n            prose-img:rounded-2xl prose-img:shadow-lg prose-img:my-10\n            first-letter:text-6xl first-letter:font-black first-letter:text-black first-letter:mr-3 first-letter:float-left first-letter:leading-[0.8]\n            prose-li:text-gray-600" data-astro-cid-ztig7rse> <div id="post-content-body" data-astro-cid-ztig7rse>', `</div> </div> <!-- POST FOOTER SHARE --> <div class="mt-16 pt-8 border-t border-gray-100" data-astro-cid-ztig7rse> <p class="text-center text-xs font-bold text-gray-400 uppercase tracking-wider mb-6" data-astro-cid-ztig7rse>Share this article</p> <div class="flex justify-center gap-4" data-astro-cid-ztig7rse> <button onclick="share('twitter')" class="p-3 rounded-full bg-gray-50 text-gray-600 hover:bg-black hover:text-white transition-colors" data-astro-cid-ztig7rse><svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5 fill-current" viewBox="0 0 24 24" data-astro-cid-ztig7rse><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zl-1.161-.31L4.14 2.25H4.14l11.474 17.5H19.2l-5.244-6.38z" data-astro-cid-ztig7rse></path></svg></button> <button onclick="share('facebook')" class="p-3 rounded-full bg-gray-50 text-gray-600 hover:bg-[#1877F2] hover:text-white transition-colors" data-astro-cid-ztig7rse>`, `</button> <button onclick="share('linkedin')" class="p-3 rounded-full bg-gray-50 text-gray-600 hover:bg-[#0077b5] hover:text-white transition-colors" data-astro-cid-ztig7rse>`, `</button> <button onclick="share('whatsapp')" class="p-3 rounded-full bg-gray-50 text-gray-600 hover:bg-[#25D366] hover:text-white transition-colors" data-astro-cid-ztig7rse> <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="w-5 h-5" data-astro-cid-ztig7rse><path d="M3 21l1.65-3.8a9 9 0 1 1 3.4 2.9L3 21" data-astro-cid-ztig7rse></path><path d="M9 10a.5.5 0 0 0 1 0V9a.5.5 0 0 0-1 0v1a5 5 0 0 0 5 5h1a.5.5 0 0 0 0-1h-1a.5.5 0 0 0 0 1" data-astro-cid-ztig7rse></path></svg> </button> <button onclick="copyLink()" class="p-3 rounded-full bg-gray-50 text-gray-600 hover:bg-gray-800 hover:text-white transition-colors" data-astro-cid-ztig7rse>`, '</button> </div> </div> </article> <!-- RIGHT SIDEBAR --> <aside class="lg:col-span-3 space-y-8" data-astro-cid-ztig7rse> <div class="bg-gray-50 p-6 rounded-2xl border border-gray-100/50 sticky top-32" data-astro-cid-ztig7rse> <span class="text-xs font-black text-gray-900 uppercase tracking-widest block mb-4 border-b border-gray-200 pb-2" data-astro-cid-ztig7rse>', '</span> <h3 class="text-xl font-black leading-tight mb-4 tracking-tight" data-astro-cid-ztig7rse>Start your own success story today.</h3> <p class="text-gray-500 mb-6 text-sm leading-relaxed" data-astro-cid-ztig7rse>Join our community of 50,000+ founders and get daily insights.</p> <a href="/subscribe" class="block text-center w-full bg-[#22c55e] hover:bg-green-600 transition-colors text-white font-black py-3.5 rounded-xl uppercase text-xs tracking-widest shadow-lg shadow-green-500/20 hover:shadow-green-500/30 hover:-translate-y-1 transform duration-200" data-astro-cid-ztig7rse>\nJoin the Community\n</a> </div> <!-- AdSense: Sidebar Square --> ', ' </aside> </div> <!-- CONTINUE READING SLIDER (Vertical Design) --> <section class="mt-32 pt-12 border-t border-gray-100" data-astro-cid-ztig7rse> <div class="flex items-center justify-between mb-8 px-4" data-astro-cid-ztig7rse> <h2 class="text-2xl font-black text-gray-900 uppercase tracking-tighter" data-astro-cid-ztig7rse>More Stories</h2> <div class="flex gap-2" data-astro-cid-ztig7rse> <button id="slide-left" class="p-2 rounded-full border border-gray-200 hover:bg-gray-100 transition-colors" data-astro-cid-ztig7rse>', '</button> <button id="slide-right" class="p-2 rounded-full border border-gray-200 hover:bg-gray-100 transition-colors" data-astro-cid-ztig7rse>', '</button> </div> </div> <div id="slider-container" class="flex gap-6 overflow-x-auto snap-x snap-mandatory pb-12 px-4 scroll-smooth no-scrollbar" data-astro-cid-ztig7rse> ', " </div> </section> </main> <script>(function(){", "\n        // SHARE FUNCTIONS\n        window.share = (platform) => {\n            const url = window.location.href;\n            const text = title;\n            let shareUrl = '';\n\n            switch(platform) {\n                case 'twitter': shareUrl = \\`https://twitter.com/intent/tweet?text=\\${encodeURIComponent(text)}&url=\\${encodeURIComponent(url)}\\`; break;\n                case 'facebook': shareUrl = \\`https://www.facebook.com/sharer/sharer.php?u=\\${encodeURIComponent(url)}\\`; break;\n                case 'linkedin': shareUrl = \\`https://www.linkedin.com/sharing/share-offsite/?url=\\${encodeURIComponent(url)}\\`; break;\n                case 'whatsapp': shareUrl = \\`https://wa.me/?text=\\${encodeURIComponent(text + ' ' + url)}\\`; break;\n            }\n            if(shareUrl) window.open(shareUrl, '_blank', 'width=600,height=400');\n        };\n\n        window.copyLink = () => {\n            navigator.clipboard.writeText(window.location.href);\n            alert('Link copied to clipboard!');\n        };\n\n        // SLIDER LOGIC\n        const container = document.getElementById('slider-container');\n        document.getElementById('slide-right')?.addEventListener('click', () => container.scrollBy({ left: 320, behavior: 'smooth' }));\n        document.getElementById('slide-left')?.addEventListener('click', () => container.scrollBy({ left: -320, behavior: 'smooth' }));\n\n        // TOC GENERATOR & HIGHLIGHTER\n        const contentBody = document.getElementById('post-content-body');\n        const tocContainer = document.getElementById('toc');\n\n        if (contentBody && tocContainer) {\n            const headings = Array.from(contentBody.querySelectorAll('h1, h2, h3'));\n            \n            if (headings.length === 0) {\n                tocContainer.innerHTML = '<p class=\"text-xs italic text-gray-400\">No headings found.</p>';\n            } else {\n                headings.forEach((heading, index) => {\n                    if (!heading.id) heading.id = \\`idx-\\${index}\\`;\n                    \n                    const link = document.createElement('a');\n                    link.href = \\`#\\${heading.id}\\`;\n                    link.dataset.target = heading.id;\n                    link.className = \\`group flex items-start gap-2 py-0.5 transition-all text-xs sm:text-sm font-medium text-gray-500 hover:text-gray-900 leading-tight cursor-pointer \\${heading.tagName === 'H3' ? 'ml-4 opacity-80' : ''}\\`;\n                    \n                    const bullet = document.createElement('span');\n                    bullet.className = 'w-1.5 h-1.5 mt-1.5 rounded-full bg-gray-200 shrink-0 transition-colors duration-300 group-hover:bg-gray-400 toc-bullet';\n                    \n                    const text = document.createElement('span');\n                    text.textContent = heading.textContent;\n                    text.className = 'transition-colors duration-200';\n\n                    link.appendChild(bullet);\n                    link.appendChild(text);\n\n                    link.onclick = (e) => {\n                        e.preventDefault();\n                        heading.scrollIntoView({ behavior: 'smooth', block: 'start' });\n                        // Update active manually\n                        updateActiveToc(heading.id);\n                    };\n\n                    tocContainer.appendChild(link);\n                });\n\n                function updateActiveToc(activeId) {\n                    document.querySelectorAll('#toc a').forEach(link => {\n                        const bullet = link.querySelector('.toc-bullet');\n                        const text = link.querySelector('span:last-child');\n                        \n                        // Reset\n                        link.classList.remove('text-gray-900');\n                        link.classList.add('text-gray-500');\n                        bullet.classList.remove('bg-[#22c55e]', 'ring-2', 'ring-green-100');\n                        bullet.classList.add('bg-gray-200');\n                        text.classList.remove('font-bold');\n\n                        // Activate\n                        if (link.dataset.target === activeId) {\n                            link.classList.remove('text-gray-500');\n                            link.classList.add('text-gray-900');\n                            bullet.classList.remove('bg-gray-200', 'group-hover:bg-gray-400');\n                            bullet.classList.add('bg-[#22c55e]', 'ring-2', 'ring-green-100');\n                            text.classList.add('font-bold');\n                        }\n                    });\n                }\n\n                // Intersection Observer for Active State\n                const observer = new IntersectionObserver((entries) => {\n                    entries.forEach(entry => {\n                        if (entry.isIntersecting) {\n                            updateActiveToc(entry.target.id);\n                        }\n                    });\n                }, { rootMargin: '-100px 0px -60% 0px', threshold: 0.1 });\n\n                headings.forEach(h => observer.observe(h));\n            }\n        }\n    })();<\/script> "])), maybeRenderHead(), featuredImgUrl ? renderTemplate`<div class="aspect-[16/10] w-full relative rounded-2xl overflow-hidden shadow-sm" data-astro-cid-ztig7rse> <img${addAttribute(featuredImgUrl, "src")}${addAttribute(post.title, "alt")} class="absolute inset-0 w-full h-full object-cover" loading="eager" data-astro-cid-ztig7rse> </div>` : renderTemplate`<div class="aspect-[16/10] w-full bg-gray-100 rounded-2xl flex items-center justify-center text-gray-300" data-astro-cid-ztig7rse>
No Image
</div>`, category, formattedDate, post.title, authorAvatar && renderTemplate`<img${addAttribute(authorAvatar, "src")}${addAttribute(authorName, "alt")} class="w-12 h-12 rounded-full border border-gray-100 mt-1" data-astro-cid-ztig7rse>`, authorName, renderComponent($$result2, "Linkedin", Linkedin, { "className": "w-4 h-4 fill-current", "data-astro-cid-ztig7rse": true }), unescapeHTML(processedContent), renderComponent($$result2, "Facebook", Facebook, { "className": "w-5 h-5", "data-astro-cid-ztig7rse": true }), renderComponent($$result2, "Linkedin", Linkedin, { "className": "w-5 h-5", "data-astro-cid-ztig7rse": true }), renderComponent($$result2, "Copy", Copy, { "className": "w-5 h-5", "data-astro-cid-ztig7rse": true }), category, renderComponent($$result2, "AdBanner", $$AdBanner, { "slotId": "6603031205", "format": "rectangle", "data-astro-cid-ztig7rse": true }), renderComponent($$result2, "ChevronLeft", ChevronLeft, { "className": "w-5 h-5", "data-astro-cid-ztig7rse": true }), renderComponent($$result2, "ChevronRight", ChevronRight, { "className": "w-5 h-5", "data-astro-cid-ztig7rse": true }), relatedPosts.map((post2) => renderTemplate`<div class="min-w-[280px] w-[280px] md:min-w-[380px] snap-start" data-astro-cid-ztig7rse> <a${addAttribute(`/post/${post2.slug}`, "href")} class="block group h-full p-1" data-astro-cid-ztig7rse> <article class="flex gap-4 h-full items-center" data-astro-cid-ztig7rse> <!-- Image Left --> <div class="w-24 h-24 shrink-0 rounded-xl overflow-hidden shadow-sm border border-gray-100 relative" data-astro-cid-ztig7rse> ${post2.featuredImage?.node?.sourceUrl ? renderTemplate`<img${addAttribute(post2.featuredImage.node.sourceUrl, "src")}${addAttribute(post2.title, "alt")} class="absolute inset-0 w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500" data-astro-cid-ztig7rse>` : renderTemplate`<div class="absolute inset-0 w-full h-full flex items-center justify-center bg-gradient-to-br from-gray-100 to-gray-200 group-hover:scale-105 transition-transform duration-500" data-astro-cid-ztig7rse> <img src="/logo.png" alt="The Times Clock" class="w-10 h-10 object-contain opacity-50 grayscale" data-astro-cid-ztig7rse> </div>`} </div> <!-- Content Right --> <div class="flex-1 min-w-0 flex flex-col justify-center" data-astro-cid-ztig7rse> <div class="mb-1.5 text-[10px] uppercase tracking-wider text-gray-400 font-medium" data-astro-cid-ztig7rse> ${new Date(post2.date).toLocaleDateString("en-US", { month: "short", year: "numeric" })} </div> <h3 class="text-sm font-bold text-gray-900 leading-snug group-hover:text-blue-600 transition-colors line-clamp-2 mb-2" data-astro-cid-ztig7rse> ${post2.title} </h3> <p class="text-[10px] font-bold text-gray-400 flex items-center gap-1 group-hover:translate-x-1 transition-transform" data-astro-cid-ztig7rse>
Read ${renderComponent($$result2, "ChevronRight", ChevronRight, { "className": "w-3 h-3", "data-astro-cid-ztig7rse": true })} </p> </div> </article> </a> </div>`), defineScriptVars({ title: post.title })) })}`;
}, "C:/Users/richa/Downloads/APP INVENTOR/thetimes clock/TTC ASTRO THEME - Antigravity/src/pages/post/[slug].astro", void 0);

const $$file = "C:/Users/richa/Downloads/APP INVENTOR/thetimes clock/TTC ASTRO THEME - Antigravity/src/pages/post/[slug].astro";
const $$url = "/post/[slug]";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$slug,
  file: $$file,
  getStaticPaths,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
