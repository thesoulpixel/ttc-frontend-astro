globalThis.process ??= {}; globalThis.process.env ??= {};
/* empty css                                 */
import { c as createAstro, a as createComponent, b as addAttribute, r as renderComponent, d as renderHead, e as renderTemplate } from '../chunks/astro/server_tYTg26cl.mjs';
import { $ as $$ClientRouter, a as $$Navbar, b as $$Footer } from '../chunks/ClientRouter_DuDqnulP.mjs';
export { r as renderers } from '../chunks/_@astro-renderers_Ddps2kkj.mjs';

const $$Astro = createAstro("https://thetimesclock.com");
const $$Terms = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Terms;
  return renderTemplate`<html lang="en"> <head><meta charset="UTF-8"><meta name="description" content="Terms of Service - The Times Clock"><meta name="viewport" content="width=device-width"><link rel="icon" type="image/svg+xml" href="/favicon.svg"><meta name="generator"${addAttribute(Astro2.generator, "content")}><title>Terms of Service - The Times Clock</title>${renderComponent($$result, "ClientRouter", $$ClientRouter, {})}<meta name="description" content="Terms of Service for The Times Clock. Read our user conduct, intellectual property rights, and disclaimers."><!-- Open Graph --><meta property="og:type" content="website"><meta property="og:url"${addAttribute(Astro2.url, "content")}><meta property="og:title" content="Terms of Service - The Times Clock"><meta property="og:description" content="Terms of Service for The Times Clock. Read our user conduct, intellectual property rights, and disclaimers."><link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&display=swap" rel="stylesheet">${renderHead()}</head> <body class="bg-white font-['Inter',sans-serif] antialiased text-gray-900"> ${renderComponent($$result, "Navbar", $$Navbar, {})} <main class="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24"> <div class="max-w-3xl mx-auto"> <!-- Header --> <p class="text-[#ff3b30] font-bold text-xs uppercase tracking-[0.2em] mb-8">Legal</p> <!-- Main Title --> <h1 class="text-4xl sm:text-5xl md:text-6xl font-extrabold text-gray-900 uppercase tracking-tighter leading-[0.95] mb-4">
Terms of Service
</h1> <p class="text-gray-400 italic mb-16">Effective Date: May 20, 2024</p> <!-- Content --> <div class="space-y-12"> <!-- Section 1 --> <section> <h2 class="text-2xl font-bold text-gray-900 uppercase tracking-tight mb-6">1. Acceptance of Terms</h2> <p class="text-gray-500 leading-relaxed text-lg">
By accessing and using The Times Clock website, you accept and agree to be bound by the terms and provision of this agreement.
</p> </section> <!-- Section 2 --> <section> <h2 class="text-2xl font-bold text-gray-900 uppercase tracking-tight mb-6">2. User Conduct</h2> <p class="text-gray-500 leading-relaxed text-lg">
Users are expected to use the platform for lawful purposes only. Any harassment, spamming, or unauthorized use of the content provided in our case studies is strictly prohibited.
</p> </section> <!-- Section 3 --> <section> <h2 class="text-2xl font-bold text-gray-900 uppercase tracking-tight mb-6">3. Intellectual Property</h2> <p class="text-gray-500 leading-relaxed text-lg">
The content, organization, graphics, design, and other matters related to the Site are protected under applicable copyrights and other proprietary laws. The copying, redistribution, use or publication by you of any such matters or any part of the Site is strictly prohibited.
</p> </section> <!-- Section 4 --> <section> <h2 class="text-2xl font-bold text-gray-900 uppercase tracking-tight mb-6">4. Disclaimer</h2> <p class="text-gray-500 leading-relaxed text-lg">
The information contained on the website is for general information purposes only. While we endeavor to keep the information up to date and correct, we make no representations or warranties of any kind.
</p> </section> </div> </div> </main> ${renderComponent($$result, "Footer", $$Footer, {})} </body></html>`;
}, "C:/Users/richa/Downloads/APP INVENTOR/thetimes clock/TTC ASTRO THEME - Antigravity/src/pages/terms.astro", void 0);

const $$file = "C:/Users/richa/Downloads/APP INVENTOR/thetimes clock/TTC ASTRO THEME - Antigravity/src/pages/terms.astro";
const $$url = "/terms";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Terms,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
