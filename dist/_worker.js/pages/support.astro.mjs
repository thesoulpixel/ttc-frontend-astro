globalThis.process ??= {}; globalThis.process.env ??= {};
/* empty css                                                */
import { c as createAstro, a as createComponent, b as addAttribute, r as renderComponent, d as renderHead, e as renderTemplate } from '../chunks/astro/server_tYTg26cl.mjs';
import { $ as $$ClientRouter, a as $$Navbar, b as $$Footer } from '../chunks/ClientRouter_DuDqnulP.mjs';
export { r as renderers } from '../chunks/_@astro-renderers_Ddps2kkj.mjs';

const $$Astro = createAstro("https://thetimesclock.com");
const $$Support = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Support;
  return renderTemplate`<html lang="en"> <head><meta charset="UTF-8"><meta name="description" content="The Times Clock Support Hub - Get help with your subscription and questions."><meta name="viewport" content="width=device-width"><link rel="icon" type="image/svg+xml" href="/favicon.svg"><meta name="generator"${addAttribute(Astro2.generator, "content")}><title>Support - The Times Clock</title>${renderComponent($$result, "ClientRouter", $$ClientRouter, {})}<meta name="description" content="Get help with your subscription, account, or content queries on The Times Clock Support Hub."><!-- Open Graph --><meta property="og:type" content="website"><meta property="og:url"${addAttribute(Astro2.url, "content")}><meta property="og:title" content="Support - The Times Clock"><meta property="og:description" content="Get help with your subscription, account, or content queries on The Times Clock Support Hub."><link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&display=swap" rel="stylesheet">${renderHead()}</head> <body class="bg-white font-['Inter',sans-serif] antialiased text-gray-900"> ${renderComponent($$result, "Navbar", $$Navbar, {})} <main class="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24"> <div class="max-w-4xl mx-auto"> <!-- Header --> <p class="text-[#ff3b30] font-bold text-xs uppercase tracking-[0.2em] mb-8">Help Center</p> <!-- Main Title --> <h1 class="text-4xl sm:text-5xl md:text-6xl font-extrabold text-gray-900 uppercase tracking-tighter leading-[0.95] mb-16">
Support Hub.
</h1> <!-- Cards Grid --> <div class="grid grid-cols-1 md:grid-cols-2 gap-6 mb-24"> <!-- Card 1 --> <div class="bg-gray-50 rounded-2xl p-8 border border-gray-100 hover:shadow-lg transition-shadow duration-300"> <h3 class="text-xl font-bold text-gray-900 uppercase tracking-tight mb-4">Subscription Help</h3> <p class="text-gray-500 mb-8 leading-relaxed">
Need help managing your premium membership or newsletter preferences?
</p> <a href="/contact" class="inline-flex items-center text-xs font-bold text-blue-600 uppercase tracking-widest hover:text-blue-700 transition-colors group">
Get Billing Help
<svg class="w-4 h-4 ml-1 transform group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path> </svg> </a> </div> <!-- Card 2 --> <div class="bg-gray-50 rounded-2xl p-8 border border-gray-100 hover:shadow-lg transition-shadow duration-300"> <h3 class="text-xl font-bold text-gray-900 uppercase tracking-tight mb-4">Content Queries</h3> <p class="text-gray-500 mb-8 leading-relaxed">
Have a question about a specific case study or need data verification?
</p> <a href="/contact" class="inline-flex items-center text-xs font-bold text-blue-600 uppercase tracking-widest hover:text-blue-700 transition-colors group">
Ask Our Analysts
<svg class="w-4 h-4 ml-1 transform group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path> </svg> </a> </div> </div> <!-- FAQ Section --> <div class="bg-black text-white rounded-[2.5rem] p-8 sm:p-12 md:p-16"> <h2 class="text-3xl font-bold text-center mb-16 tracking-tight">Common Questions</h2> <div class="space-y-12 max-w-2xl mx-auto"> <div class="border-b border-white/10 pb-8 last:border-0 last:pb-0"> <h3 class="text-[#ff3b30] font-bold text-xs uppercase tracking-widest mb-3">How often are new stories added?</h3> <p class="text-lg text-gray-300 leading-relaxed">
We publish 3-5 deep dive case studies every week.
</p> </div> <div class="border-b border-white/10 pb-8 last:border-0 last:pb-0"> <h3 class="text-[#ff3b30] font-bold text-xs uppercase tracking-widest mb-3">Can I submit my own business?</h3> <p class="text-lg text-gray-300 leading-relaxed">
Yes! Head over to our Contact page and select "Story Submission" from the dropdown.
</p> </div> </div> </div> </div> </main> ${renderComponent($$result, "Footer", $$Footer, {})} </body></html>`;
}, "C:/Users/richa/Downloads/APP INVENTOR/thetimes clock/TTC ASTRO THEME - Antigravity/src/pages/support.astro", void 0);

const $$file = "C:/Users/richa/Downloads/APP INVENTOR/thetimes clock/TTC ASTRO THEME - Antigravity/src/pages/support.astro";
const $$url = "/support";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Support,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
