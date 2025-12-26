globalThis.process ??= {}; globalThis.process.env ??= {};
/* empty css                                 */
import { c as createAstro, a as createComponent, b as addAttribute, r as renderComponent, d as renderHead, e as renderTemplate } from '../chunks/astro/server_tYTg26cl.mjs';
import { $ as $$ClientRouter, a as $$Navbar, b as $$Footer } from '../chunks/ClientRouter_DuDqnulP.mjs';
export { r as renderers } from '../chunks/_@astro-renderers_Ddps2kkj.mjs';

const $$Astro = createAstro("https://thetimesclock.com");
const $$About = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$About;
  return renderTemplate`<html lang="en"> <head><meta charset="UTF-8"><meta name="description" content="The Times Clock is the world's leading database of actionable business case studies."><meta name="viewport" content="width=device-width"><link rel="icon" type="image/svg+xml" href="/favicon.svg"><meta name="generator"${addAttribute(Astro2.generator, "content")}><title>About - The Times Clock</title>${renderComponent($$result, "ClientRouter", $$ClientRouter, {})}<meta name="description" content="The Times Clock is the world's leading database of actionable business case studies. Learn from founders who started with nothing and built empires."><!-- Open Graph --><meta property="og:type" content="website"><meta property="og:url"${addAttribute(Astro2.url, "content")}><meta property="og:title" content="About - The Times Clock"><meta property="og:description" content="The Times Clock is the world's leading database of actionable business case studies."><link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&display=swap" rel="stylesheet">${renderHead()}</head> <body class="bg-white font-['Inter',sans-serif] antialiased text-gray-900"> ${renderComponent($$result, "Navbar", $$Navbar, {})} <main class="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24"> <div class="max-w-4xl mx-auto"> <!-- Header --> <p class="text-[#ff3b30] font-bold text-xs uppercase tracking-[0.2em] mb-8">Our Mission</p> <!-- Main Title --> <h1 class="text-4xl sm:text-5xl md:text-6xl font-extrabold text-gray-900 uppercase tracking-tighter leading-[0.95] mb-12">
Building the<br>
Future of Commerce.
</h1> <!-- Subheadline --> <h2 class="text-xl sm:text-2xl font-bold text-gray-900 leading-tight mb-10 max-w-3xl">
The Times Clock is the world's leading database of actionable business case studies.
</h2> <!-- Introduction Text --> <div class="prose prose-lg prose-gray text-gray-500 leading-relaxed mb-16 max-w-3xl"> <p class="mb-6">
We believe that the best way to learn how to build a business is by looking at what is already working. Since 2020, we have documented thousands of stories from founders who started with nothing and built multi-million dollar empires.
</p> <p>
Our goal is simple: to democratize business knowledge. We strip away the fluff and focus on the raw numbers, the specific tech stacks, and the exact marketing strategies that drive growth.
</p> </div> <!-- Stats Section --> <div class="grid grid-cols-1 sm:grid-cols-2 gap-12 border-y border-gray-100 py-12 mb-16"> <div> <span class="block text-3xl sm:text-4xl font-extrabold text-gray-900 tracking-tight mb-2">4,400+</span> <span class="text-xs font-bold text-gray-400 uppercase tracking-widest">Verified Case Studies</span> </div> <div> <span class="block text-3xl sm:text-4xl font-extrabold text-gray-900 tracking-tight mb-2">50,000+</span> <span class="text-xs font-bold text-gray-400 uppercase tracking-widest">Community Members</span> </div> </div> <!-- Philosophy Section --> <div class="max-w-3xl"> <h3 class="text-3xl font-bold text-gray-900 tracking-tight mb-6">Our Editorial Philosophy</h3> <p class="text-lg text-gray-500 leading-relaxed border-l-4 border-gray-900 pl-6">
We don't do "puff pieces." Every story we publish must provide actionable value. Whether it's a solo-founder running a SaaS or a massive D2C brand, we dive deep into the mechanics of their success.
</p> </div> </div> </main> ${renderComponent($$result, "Footer", $$Footer, {})} </body></html>`;
}, "C:/Users/richa/Downloads/APP INVENTOR/thetimes clock/TTC ASTRO THEME - Antigravity/src/pages/about.astro", void 0);

const $$file = "C:/Users/richa/Downloads/APP INVENTOR/thetimes clock/TTC ASTRO THEME - Antigravity/src/pages/about.astro";
const $$url = "/about";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$About,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
