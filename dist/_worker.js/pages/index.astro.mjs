globalThis.process ??= {}; globalThis.process.env ??= {};
/* empty css                                                */
import { c as createAstro, a as createComponent, e as renderTemplate, g as defineScriptVars, b as addAttribute, r as renderComponent, m as maybeRenderHead, f as renderScript } from '../chunks/astro/server_tYTg26cl.mjs';
import { g as getPostsByCategory } from '../chunks/api_vcYZWY_0.mjs';
import { $ as $$Image } from '../chunks/_astro_assets_D2xwECj1.mjs';
import { T as TrendingUp } from '../chunks/trending-up_mOel-IyY.mjs';
import { c as createLucideIcon, A as ArrowRight } from '../chunks/ClientRouter_DuDqnulP.mjs';
import { C as ChevronRight } from '../chunks/chevron-right_CflOToG6.mjs';
import { $ as $$Layout } from '../chunks/Layout_Bmr1Xpry.mjs';
export { r as renderers } from '../chunks/_@astro-renderers_Ddps2kkj.mjs';

/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */


const __iconNode$1 = [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
  ["path", { d: "m9 12 2 2 4-4", key: "dzmm74" }]
];
const CircleCheck = createLucideIcon("circle-check", __iconNode$1);

/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */


const __iconNode = [
  ["path", { d: "M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2", key: "975kel" }],
  ["circle", { cx: "12", cy: "7", r: "4", key: "17ys0d" }]
];
const User = createLucideIcon("user", __iconNode);

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(cooked.slice()) }));
var _a;
const $$Astro$2 = createAstro("https://thetimesclock.com");
const $$Hero = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$Hero;
  const { featuredPosts } = Astro2.props;
  const posts = featuredPosts && featuredPosts.length > 0 ? featuredPosts : [];
  if (posts.length === 0) {
    return null;
  }
  const extractMoney = (str) => {
    const match = str.match(/[$€£¥][0-9,.]+[kKmMbB]?/);
    return match ? match[0] : null;
  };
  const postsWithGrowth = posts.map((post) => ({
    ...post,
    extractedGrowth: extractMoney(post.title) || post.growthValue || "$0"
    // Fallback
  }));
  const activeGrowthValue = postsWithGrowth[0].extractedGrowth;
  return renderTemplate(_a || (_a = __template(["", `<section class="relative bg-gradient-to-r from-[#6366f1] to-[#3b82f6] overflow-hidden pt-12 pb-16 lg:pt-20 lg:pb-20 font-['Inter']"> <!-- Dynamic Gradient Background --> <div class="w-full max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-12 relative z-10"> <div class="grid lg:grid-cols-[45%_auto] gap-10 lg:gap-16 items-center"> <!-- Text Content --> <div class="space-y-6 text-left order-1 lg:order-none"> <h1 class="text-3xl sm:text-5xl lg:text-5xl font-extrabold text-white leading-[1.1] tracking-tight"> <span class="block">Unlock the secrets to</span> <span class="block text-[#4ade80]">7-figure <span class="text-white">online</span></span> <span class="block text-white">businesses.</span> </h1> <p class="text-base text-white/90 max-w-lg leading-snug font-normal opacity-90">
Dive into our database of 4,000+ case studies and learn how ordinary people built extraordinary companies.
</p> <div class="relative max-w-lg mt-4"> <form id="hero-subscribe-form" class="flex flex-col sm:flex-row gap-2 bg-white p-2 rounded-xl shadow-2xl transition-all duration-300"> <input type="email" id="hero-email" name="email_address" required placeholder="Enter your email" class="w-full px-4 py-3 rounded-lg outline-none text-gray-900 bg-transparent placeholder-gray-400 text-base"> <button type="submit" id="hero-submit-btn" class="w-full sm:w-auto bg-[#22c55e] text-white font-bold px-8 py-3 rounded-lg hover:bg-green-500 hover:shadow-lg transition-all duration-300 whitespace-nowrap text-base disabled:opacity-75 disabled:cursor-not-allowed">
Join Community
</button> </form> <div id="hero-success-msg" class="hidden absolute inset-0 bg-white rounded-xl shadow-2xl flex flex-col sm:flex-row items-center justify-center text-center sm:text-left p-2 sm:p-4 gap-1 sm:gap-3 border-2 border-green-100 z-10 transition-all"> <p class="text-[#22c55e] font-black text-lg flex items-center gap-2 whitespace-nowrap"> <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
Subscribed!
</p> <p class="text-xs text-gray-400 font-medium sm:whitespace-nowrap">Please check your inbox.</p> </div> <div id="hero-error-msg" class="hidden mt-2 text-red-500 text-xs font-bold px-2">
Something went wrong. Please try again.
</div> </div> <div class="flex items-center gap-4 pt-2"> <div class="flex -space-x-3"> `, ' </div> <p class="text-white text-sm font-bold tracking-wide">Joined by 50,000+ entrepreneurs</p> </div> </div> <!-- Hero Image Card --> <div class="relative w-full order-2 lg:order-none lg:pl-10 select-none"> <!-- Tilted Card Look with Click Handler (Tilted LEFT: -rotate-2) --> <div id="hero-card-container" class="relative w-full aspect-[16/10] -rotate-2 hover:rotate-0 hover:scale-[1.01] transition-all duration-300 ease-out p-1 bg-white/20 backdrop-blur-sm rounded-[2rem] shadow-[0_25px_50px_-12px_rgba(0,0,0,0.5)] border border-white/20 group cursor-pointer"> <div class="w-full h-full rounded-[1.8rem] relative bg-[#1e1b4b]"> <div id="hero-slider-track" class="relative w-full h-full"> ', ' </div> </div> <!-- Floating Growth Badge (Left side, Smaller) --> <div class="absolute -bottom-4 -left-3 sm:-left-6 bg-white rounded-lg p-2.5 sm:p-3 shadow-[0_15px_30px_rgba(0,0,0,0.15)] flex items-center gap-2.5 z-30 min-w-[120px] border border-gray-100 animate-fade-in-up pointer-events-none"> <div class="bg-green-100 p-1.5 rounded-md shrink-0"> ', ' </div> <div class="leading-none"> <p class="text-[8px] uppercase font-bold text-gray-400 tracking-widest mb-0.5">Revenue</p> <p id="growth-value-display" class="text-base font-black text-gray-900 tracking-[-0.5px]">', '</p> </div> </div> <!-- Slider Dots --> <div class="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2 z-20 pointer-events-none"> ', ' </div> </div> <p class="text-center text-white/40 text-xs mt-8 font-medium tracking-widest uppercase">Tap card to view next story</p> </div> </div> </div> </section> <script>(function(){', `
  function initHeroSlider() {
    const container = document.getElementById('hero-card-container');
    const items = document.querySelectorAll('.js-slide-item');
    const dots = document.querySelectorAll('.js-slide-dot');
    const growthDisplay = document.getElementById('growth-value-display');
    
    // Subscribe Form Logic
    const form = document.getElementById('hero-subscribe-form');
    const emailInput = document.getElementById('hero-email');
    const submitBtn = document.getElementById('hero-submit-btn');
    const successMsg = document.getElementById('hero-success-msg');
    const errorMsg = document.getElementById('hero-error-msg');
    
    if (form) {
        // Remove existing listener to avoid duplicates if re-init (simple way is to clone or just use onclick which overrides)
        // Here we just add it, but since we run this on swap, we need to be careful.
        // Better: use a named function or attach it once. 
        // For simplicity in this context, we'll assign onsubmit directly.
        form.onsubmit = async (e) => {
            e.preventDefault();
            
            const originalBtnText = submitBtn.innerText;
            submitBtn.disabled = true;
            submitBtn.innerText = '...';
            errorMsg.classList.add('hidden');

            const email = emailInput.value;
            const kitUrl = 'https://app.kit.com/forms/8902621/subscriptions';

            try {
                const formData = new FormData();
                formData.append('email_address', email);

                await fetch(kitUrl, {
                    method: 'POST',
                    body: formData,
                    mode: 'no-cors' 
                });

                // Success
                form.classList.add('opacity-0', 'pointer-events-none');
                successMsg.classList.remove('hidden');

            } catch (err) {
                console.error(err);
                submitBtn.disabled = false;
                submitBtn.innerText = originalBtnText;
                errorMsg.classList.remove('hidden');
            }
        };
    }

    if (!container || items.length === 0) return;

    let currentIndex = 0;
    const totalSlides = items.length;
    
    // Use extractedGrowth from the processed data
    const growthValues = initialPosts.map(p => p.extractedGrowth || "$0"); 

    const showSlide = (index) => {
        items.forEach((item, i) => {
            if (i === index) {
                item.classList.remove('opacity-0', 'z-0', 'pointer-events-none');
                item.classList.add('opacity-100', 'z-10', 'pointer-events-auto');
            } else {
                item.classList.remove('opacity-100', 'z-10', 'pointer-events-auto');
                item.classList.add('opacity-0', 'z-0', 'pointer-events-none');
            }
        });

        dots.forEach((dot, i) => {
             if (i === index) {
                dot.classList.remove('bg-white/30', 'w-1.5');
                dot.classList.add('bg-[#22c55e]', 'w-6');
             } else {
                dot.classList.remove('bg-[#22c55e]', 'w-6');
                dot.classList.add('bg-white/30', 'w-1.5');
             }
        });
        
        if(growthDisplay) {
             // reliable simple update if arrays align
             if(growthValues[index]) growthDisplay.textContent = growthValues[index];
        }
    };

    container.addEventListener('click', (e) => {
        // If the user clicked a link (like the heading or read story button), do nothing (let the link work)
        if (e.target.closest('a')) return;

        // Otherwise, slide
        currentIndex = (currentIndex + 1) % totalSlides;
        showSlide(currentIndex);
    });
  }

  // Run on load and after Astro swaps
  initHeroSlider();
  document.addEventListener('astro:after-swap', initHeroSlider);
})();<\/script>`])), maybeRenderHead(), [1, 2, 3, 4].map((i) => renderTemplate`<div class="w-10 h-10 rounded-full border-[3px] border-[#4F46E5] bg-gray-200 overflow-hidden relative z-10 ring-2 ring-white/10"> ${renderComponent($$result, "Image", $$Image, { "src": `https://i.pravatar.cc/100?img=${i + 20}`, "alt": "User", "width": 40, "height": 40, "class": "w-full h-full object-cover", "loading": "eager" })} </div>`), postsWithGrowth.map((post, index) => renderTemplate`<div${addAttribute(`absolute inset-0 w-full h-full transition-opacity duration-500 js-slide-item ${index === 0 ? "opacity-100 z-10 pointer-events-auto" : "opacity-0 z-0 pointer-events-none"}`, "class")}> <!-- Clipped Image Container --> <div class="absolute inset-0 w-full h-full rounded-[1.8rem] overflow-hidden"> <img${addAttribute(post.featuredImage?.node?.sourceUrl, "src")}${addAttribute(post.title, "alt")} class="w-full h-full object-cover opacity-90 group-hover:opacity-100 transition-opacity duration-500"${addAttribute(index === 0 ? "eager" : "lazy", "loading")}> <!-- Overlay gradient --> <div class="absolute inset-0 bg-gradient-to-t from-[#1e1b4b]/90 via-[#1e1b4b]/20 to-transparent"></div> </div> <div class="absolute bottom-8 left-6 right-10 text-white z-40"> <!-- Clickable Heading --> <a${addAttribute(`/post/${post.slug}`, "href")} data-astro-prefetch="viewport" class="block group/link pointer-events-auto relative z-50"> <h3 class="text-xs sm:text-xl font-bold leading-tight mb-1 tracking-[-0.5px] group-hover/link:underline decoration-white/50 underline-offset-4">${post.title}</h3> </a> </div> <!-- Read Story Button (Hanging out) --> <a${addAttribute(`/post/${post.slug}`, "href")} data-astro-prefetch="viewport" class="absolute bottom-0 right-0 translate-x-[10%] translate-y-[10%] sm:translate-x-[30%] sm:translate-y-[30%] bg-[#ff3b30] hover:bg-red-600 text-white text-[8px] sm:text-[10px] font-bold uppercase tracking-widest px-3 py-1.5 sm:px-4 sm:py-2 rounded-full shadow-xl z-50 transition-transform hover:scale-105 pointer-events-auto whitespace-nowrap" title="Read Story">
Read Story
</a> </div>`), renderComponent($$result, "TrendingUp", TrendingUp, { "className": "w-4 h-4 text-[#22c55e]" }), activeGrowthValue, postsWithGrowth.map((_, index) => renderTemplate`<div${addAttribute(`h-1.5 rounded-full transition-all duration-300 js-slide-dot ${index === 0 ? "bg-[#22c55e] w-6" : "bg-white/30 w-1.5"}`, "class")}></div>`), defineScriptVars({ initialPosts: postsWithGrowth }));
}, "C:/Users/richa/Downloads/APP INVENTOR/thetimes clock/TTC ASTRO THEME - Antigravity/src/components/Hero.astro", void 0);

const $$Astro$1 = createAstro("https://thetimesclock.com");
const $$PostCard = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$PostCard;
  const { post, categoryLabel } = Astro2.props;
  if (!post) return null;
  const { title, featuredImage, author, date, slug } = post;
  const imageUrl = featuredImage?.node?.sourceUrl ? featuredImage.node.sourceUrl : "/logo.png";
  const authorImg = author?.node?.avatar?.url;
  const authorName = author?.node?.name || "Editor";
  const formattedDate = date ? new Date(date).toLocaleDateString("en-US", { month: "short", year: "numeric" }) : "Recent";
  return renderTemplate`${maybeRenderHead()}<a${addAttribute(`/post/${slug}`, "href")} data-astro-prefetch="viewport" class="block h-full group"> <article class="flex flex-col sm:flex-row gap-5 sm:gap-7 p-5 bg-white rounded-2xl border border-gray-100/80 hover:border-gray-200 shadow-[0_2px_8px_rgba(0,0,0,0.04)] hover:shadow-[0_12px_24px_rgba(0,0,0,0.06)] transition-all duration-300 h-full relative z-10 group overflow-hidden"> <div class="w-full sm:w-[160px] md:w-[200px] shrink-0"> <div class="aspect-[4/3] sm:aspect-[3/4] sm:h-full rounded-xl overflow-hidden relative shadow-sm border border-gray-100"> <img${addAttribute(imageUrl, "src")}${addAttribute(title, "alt")} loading="lazy"${addAttribute(`w-full h-full ${imageUrl === "/logo.png" ? "object-contain p-6 bg-gray-50 opacity-40" : "object-cover"} transform group-hover:scale-105 transition-transform duration-700 ease-out`, "class")}> <div class="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-colors"></div> </div> </div> <div class="flex flex-col flex-1 min-w-0 py-1"> <div> <div class="flex items-center justify-between mb-3"> <span class="inline-flex items-center px-2 py-0.5 rounded text-[10px] sm:text-[11px] font-bold bg-[#a855f7]/10 text-[#a855f7] uppercase tracking-wider border border-[#a855f7]/20 whitespace-nowrap"> ${categoryLabel || "STARTER STORY"} </span> <span class="text-[10px] sm:text-[11px] font-semibold text-gray-400 uppercase tracking-widest whitespace-nowrap ml-2">${formattedDate}</span> </div> <h3 class="text-xl sm:text-2xl font-[800] text-gray-900 leading-[1.2] mb-4 group-hover:text-[#4F46E5] transition-colors tracking-tight line-clamp-2 sm:line-clamp-3 break-words"> ${title} </h3> <ul class="space-y-2 mb-4"> ${(() => {
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
        "Tech stack & marketing tools"
      ];
    }
    while (points.length < 3) {
      points.push("Business strategy & insights");
    }
    return points.slice(0, 3).map((point) => renderTemplate`<li class="flex items-start gap-3 text-xs sm:text-[13px] font-medium text-gray-600"> ${renderComponent($$result, "CheckCircle2", CircleCheck, { "className": "w-4 h-4 text-[#22c55e] mt-0.5 shrink-0" })} <span class="line-clamp-1">${point}</span> </li>`);
  })()} </ul> </div> <div class="flex items-center justify-between pt-5 border-t border-gray-100/80 mt-auto gap-4"> <div class="flex items-center gap-2.5 min-w-0"> ${authorImg ? renderTemplate`<img${addAttribute(authorImg, "src")}${addAttribute(authorName, "alt")} class="w-6 h-6 rounded-full ring-2 ring-white shadow-sm shrink-0">` : renderTemplate`<div class="w-6 h-6 rounded-full bg-gray-100 flex items-center justify-center ring-2 ring-white shrink-0"> ${renderComponent($$result, "User", User, { "className": "w-3 h-3 text-gray-400" })} </div>`} <span class="text-xs font-bold text-gray-700 truncate">${authorName}</span> </div> <div class="flex items-center gap-1.5 text-xs font-bold text-blue-600 group-hover:translate-x-1 transition-transform whitespace-nowrap shrink-0">
Read Story
${renderComponent($$result, "ChevronRight", ChevronRight, { "className": "w-3.5 h-3.5" })} </div> </div> </div> </article> </a>`;
}, "C:/Users/richa/Downloads/APP INVENTOR/thetimes clock/TTC ASTRO THEME - Antigravity/src/components/PostCard.astro", void 0);

const $$Astro = createAstro("https://thetimesclock.com");
const $$CategorySection = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$CategorySection;
  const { title, posts, cardLabel, slug } = Astro2.props;
  if (!posts || posts.length === 0) return null;
  return renderTemplate`${maybeRenderHead()}<section class="py-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"> <div class="flex items-center justify-between mb-10 border-b border-gray-100 pb-4"> <div class="flex items-center gap-4"> <div class="w-2 h-10 bg-[#ef4444] rounded-sm shadow-[0_0_15px_rgba(239,68,68,0.5)]"></div> <h2 class="text-3xl font-extrabold text-gray-900 tracking-tight font-['Inter']">${title}</h2> </div> <a${addAttribute(`/category/${slug}`, "href")} class="group hidden sm:flex items-center gap-2 text-[#4F46E5] font-bold text-sm hover:text-[#4338ca] transition-colors tracking-wide uppercase">
View all stories
<div class="bg-[#4F46E5]/10 p-1 rounded-full group-hover:translate-x-1 transition-transform"> ${renderComponent($$result, "ArrowRight", ArrowRight, { "className": "w-4 h-4" })} </div> </a> </div> <div class="grid grid-cols-1 md:grid-cols-2 gap-8"> ${posts.map((post) => renderTemplate`${renderComponent($$result, "PostCard", $$PostCard, { "post": post, "categoryLabel": cardLabel })}`)} </div> </section>`;
}, "C:/Users/richa/Downloads/APP INVENTOR/thetimes clock/TTC ASTRO THEME - Antigravity/src/components/CategorySection.astro", void 0);

const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const { nodes: featuredPosts } = await getPostsByCategory("Featured", 5);
  const { nodes: starterStories } = await getPostsByCategory("Starter Story", 4);
  const { nodes: brandStories } = await getPostsByCategory("Brand Story", 4);
  const { nodes: financeStories } = await getPostsByCategory("Finance", 4);
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "The Times Clock" }, { "default": async ($$result2) => renderTemplate` ${maybeRenderHead()}<main> ${renderComponent($$result2, "Hero", $$Hero, { "featuredPosts": featuredPosts })} <div class="mt-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-24 space-y-12"> ${renderComponent($$result2, "CategorySection", $$CategorySection, { "title": "Starter Story Case Studies", "posts": starterStories, "cardLabel": "Case Studies", "slug": "starter-story" })} ${renderComponent($$result2, "CategorySection", $$CategorySection, { "title": "Brand Story Deep Dives", "posts": brandStories, "cardLabel": "Brand Story", "slug": "brand-story" })} ${renderComponent($$result2, "CategorySection", $$CategorySection, { "title": "Finance & Investment", "posts": financeStories, "cardLabel": "Case Studies", "slug": "finance" })} </div> <div class="max-w-4xl mx-auto px-4 py-24 text-center"> <div class="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8 text-gray-500 text-sm font-semibold tracking-wide"> <div class="flex -space-x-2"> ${[1, 2, 3, 4, 5].map((i) => renderTemplate`<img${addAttribute(`https://i.pravatar.cc/100?img=${i + 30}`, "src")} class="w-8 h-8 rounded-full border-2 border-white ring-1 ring-gray-100" alt="Member">`)} <div class="w-8 h-8 rounded-full bg-[#22c55e] border-2 border-white flex items-center justify-center text-[10px] text-white font-bold">
+5k
</div> </div> <p>Over 5,000 more case studies live there...</p> </div> <div class="bg-white rounded-[2.5rem] shadow-[0_30px_60px_-15px_rgba(0,0,0,0.1)] p-8 sm:p-16 border border-gray-100"> <h2 class="text-3xl sm:text-5xl font-[900] text-gray-900 leading-tight mb-4 tracking-tight">
Join the elite circle of <br class="hidden sm:block"> <span class="relative inline-block">
modern founders
<svg class="absolute w-full h-3 -bottom-1 left-0 text-[#22c55e]" viewBox="0 0 100 10" preserveAspectRatio="none"> <path d="M0 5 Q 50 10 100 5" stroke="currentColor" stroke-width="4" fill="none"></path> </svg> </span> </h2> <div class="relative max-w-xl mx-auto mt-10"> <form id="footer-subscribe-form" class="flex flex-col sm:flex-row gap-3"> <input type="email" id="footer-email" name="email_address" required placeholder="Your email address" class="w-full px-6 py-4 rounded-xl border border-gray-200 outline-none focus:border-[#22c55e] focus:ring-2 focus:ring-[#22c55e]/20 transition-all text-lg placeholder-gray-400"> <button type="submit" id="footer-submit-btn" class="bg-[#111827] text-white px-8 py-4 rounded-xl font-bold hover:bg-black transition-all hover:scale-[1.02] shadow-xl flex items-center justify-center gap-2 whitespace-nowrap disabled:opacity-75">
Get Early Access ${renderComponent($$result2, "ArrowRight", ArrowRight, { "className": "w-5 h-5" })} </button> </form> <div id="footer-success-msg" class="hidden absolute inset-0 bg-white rounded-xl shadow-xl flex flex-col sm:flex-row items-center justify-center text-center sm:text-left gap-1 sm:gap-4 text-[#22c55e] font-bold text-lg border-2 border-green-100 z-10"> <div class="flex items-center gap-2 whitespace-nowrap"> <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6 border-2 border-[#22c55e] rounded-full p-0.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
You're on the list!
</div> <p class="text-sm text-gray-400 font-medium sm:whitespace-nowrap">Check your inbox.</p> </div> <div id="footer-error-msg" class="hidden mt-2 text-red-500 text-sm font-bold">
Something went wrong. Please try again.
</div> </div> ${renderScript($$result2, "C:/Users/richa/Downloads/APP INVENTOR/thetimes clock/TTC ASTRO THEME - Antigravity/src/pages/index.astro?astro&type=script&index=0&lang.ts")} </div> </div> </main> ` })}`;
}, "C:/Users/richa/Downloads/APP INVENTOR/thetimes clock/TTC ASTRO THEME - Antigravity/src/pages/index.astro", void 0);

const $$file = "C:/Users/richa/Downloads/APP INVENTOR/thetimes clock/TTC ASTRO THEME - Antigravity/src/pages/index.astro";
const $$url = "";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
