globalThis.process ??= {}; globalThis.process.env ??= {};
/* empty css                                                */
import { c as createAstro, a as createComponent, b as addAttribute, r as renderComponent, d as renderHead, f as renderScript, e as renderTemplate } from '../chunks/astro/server_tYTg26cl.mjs';
import { $ as $$ClientRouter, a as $$Navbar, b as $$Footer } from '../chunks/ClientRouter_DuDqnulP.mjs';
export { r as renderers } from '../chunks/_@astro-renderers_Ddps2kkj.mjs';

const $$Astro = createAstro("https://thetimesclock.com");
const $$Contact = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Contact;
  return renderTemplate`<html lang="en"> <head><meta charset="UTF-8"><meta name="description" content="Contact The Times Clock - Get in touch with our team."><meta name="viewport" content="width=device-width"><link rel="icon" type="image/svg+xml" href="/favicon.svg"><meta name="generator"${addAttribute(Astro2.generator, "content")}><title>Contact - The Times Clock</title>${renderComponent($$result, "ClientRouter", $$ClientRouter, {})}<meta name="description" content="Contact The Times Clock team for inquiries, story submissions, or support."><!-- Open Graph --><meta property="og:type" content="website"><meta property="og:url"${addAttribute(Astro2.url, "content")}><meta property="og:title" content="Contact - The Times Clock"><meta property="og:description" content="Contact The Times Clock team for inquiries, story submissions, or support."><link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&display=swap" rel="stylesheet">${renderHead()}</head> <body class="bg-white font-['Inter',sans-serif] antialiased text-gray-900"> ${renderComponent($$result, "Navbar", $$Navbar, {})} <main class="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24"> <div class="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24"> <!-- Left Column: Info --> <div> <p class="text-[#ff3b30] font-bold text-xs uppercase tracking-[0.2em] mb-8">Get In Touch</p> <h1 class="text-4xl sm:text-5xl md:text-6xl font-extrabold text-gray-900 uppercase tracking-tighter leading-[0.95] mb-12">
We're Here<br>
To Help.
</h1> <p class="text-lg text-gray-500 leading-relaxed max-w-md mb-12">
Have a question about our case studies? Or maybe you have a story to share? Use the form below or reach out directly.
</p> <div class="space-y-8"> <div> <h3 class="text-xs font-bold text-gray-900 uppercase tracking-widest mb-2">Email Us</h3> <a href="mailto:contact@thetimesclock.com" class="text-blue-600 font-bold hover:text-blue-700 transition-colors">contact@thetimesclock.com</a> </div> <div> <h3 class="text-xs font-bold text-gray-900 uppercase tracking-widest mb-2">Press Inquiries</h3> <a href="mailto:contact@thetimesclock.com" class="font-bold text-gray-900 hover:text-gray-700 transition-colors">contact@thetimesclock.com</a> </div> </div> </div> <!-- Right Column: Form --> <div> <div class="bg-gray-50 rounded-3xl p-8 sm:p-10 border border-gray-100 relative overflow-hidden"> <div id="form-success-msg" class="hidden absolute inset-0 bg-white z-20 flex flex-col items-center justify-center text-center p-8 animate-fade-in-up"> <div class="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-6"> <svg xmlns="http://www.w3.org/2000/svg" class="w-8 h-8 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M5 13l4 4L19 7"></path></svg> </div> <h3 class="text-2xl font-black text-gray-900 mb-2">Message Sent!</h3> <p class="text-gray-500 font-medium max-w-xs mx-auto mb-8">Thanks for reaching out. We'll get back to you shortly.</p> <button id="send-another-btn" class="text-green-600 font-bold text-sm uppercase tracking-widest hover:text-green-700 underline underline-offset-4">
Send another message
</button> </div> <form id="contact-form" class="space-y-6 relative z-10"> <input type="hidden" name="access_key" value="0f7f30bb-6d27-4cde-a8e7-f2717cdde7d9"> <div> <label for="name" class="block text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-2">Full Name</label> <input type="text" id="name" name="name" required class="w-full bg-white border border-gray-200 rounded-xl px-4 py-3 text-sm font-medium focus:outline-none focus:ring-2 focus:ring-black/5 focus:border-black transition-all" placeholder="John Doe"> </div> <div> <label for="email" class="block text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-2">Email Address</label> <input type="email" id="email" name="email" required class="w-full bg-white border border-gray-200 rounded-xl px-4 py-3 text-sm font-medium focus:outline-none focus:ring-2 focus:ring-black/5 focus:border-black transition-all" placeholder="john@example.com"> </div> <div> <label for="message" class="block text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-2">Message</label> <textarea id="message" name="message" required rows="4" class="w-full bg-white border border-gray-200 rounded-xl px-4 py-3 text-sm font-medium focus:outline-none focus:ring-2 focus:ring-black/5 focus:border-black transition-all resize-none" placeholder="How can we help?"></textarea> </div> <button type="submit" id="submit-btn" class="w-full bg-black text-white font-bold text-xs uppercase tracking-widest py-4 rounded-xl hover:bg-gray-900 transition-colors shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 duration-200 disabled:opacity-70 disabled:cursor-not-allowed">
Send Message
</button> <p id="form-error-msg" class="hidden text-center text-red-500 text-xs font-bold mt-4">
Something went wrong. Please try again.
</p> </form> ${renderScript($$result, "C:/Users/richa/Downloads/APP INVENTOR/thetimes clock/TTC ASTRO THEME - Antigravity/src/pages/contact.astro?astro&type=script&index=0&lang.ts")} </div> </div> </div> </main> ${renderComponent($$result, "Footer", $$Footer, {})} </body></html>`;
}, "C:/Users/richa/Downloads/APP INVENTOR/thetimes clock/TTC ASTRO THEME - Antigravity/src/pages/contact.astro", void 0);

const $$file = "C:/Users/richa/Downloads/APP INVENTOR/thetimes clock/TTC ASTRO THEME - Antigravity/src/pages/contact.astro";
const $$url = "/contact";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Contact,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
