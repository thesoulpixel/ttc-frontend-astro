globalThis.process ??= {}; globalThis.process.env ??= {};
/* empty css                                 */
import { a as createComponent, r as renderComponent, f as renderScript, e as renderTemplate, m as maybeRenderHead } from '../chunks/astro/server_tYTg26cl.mjs';
import { $ as $$Layout } from '../chunks/Layout_Bmr1Xpry.mjs';
import { c as createLucideIcon } from '../chunks/ClientRouter_DuDqnulP.mjs';
import { T as TrendingUp } from '../chunks/trending-up_mOel-IyY.mjs';
export { r as renderers } from '../chunks/_@astro-renderers_Ddps2kkj.mjs';

/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */


const __iconNode$2 = [["path", { d: "M20 6 9 17l-5-5", key: "1gmf2c" }]];
const Check = createLucideIcon("check", __iconNode$2);

/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */


const __iconNode$1 = [
  ["path", { d: "m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7", key: "132q7q" }],
  ["rect", { x: "2", y: "4", width: "20", height: "16", rx: "2", key: "izxlao" }]
];
const Mail = createLucideIcon("mail", __iconNode$1);

/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */


const __iconNode = [
  ["path", { d: "M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2", key: "1yyitq" }],
  ["path", { d: "M16 3.128a4 4 0 0 1 0 7.744", key: "16gr8j" }],
  ["path", { d: "M22 21v-2a4 4 0 0 0-3-3.87", key: "kshegd" }],
  ["circle", { cx: "9", cy: "7", r: "4", key: "nufk8" }]
];
const Users = createLucideIcon("users", __iconNode);

const $$Subscribe = createComponent(async ($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Subscribe - The Times Clock" }, { "default": async ($$result2) => renderTemplate` ${maybeRenderHead()}<main class="min-h-screen bg-slate-50 flex items-center justify-center relative overflow-hidden font-['Inter'] py-20 px-4 sm:px-6"> <!-- Background Gradients --> <div class="absolute inset-0 overflow-hidden pointer-events-none"> <div class="absolute -top-[20%] -left-[10%] w-[50%] h-[50%] bg-[#4F46E5]/20 blur-[120px] rounded-full"></div> <div class="absolute top-[20%] -right-[10%] w-[40%] h-[40%] bg-[#22c55e]/20 blur-[100px] rounded-full"></div> <div class="absolute bottom-[-10%] left-[20%] w-[30%] h-[30%] bg-[#0ea5e9]/20 blur-[80px] rounded-full"></div> </div> <div class="w-full max-w-5xl mx-auto flex flex-col lg:flex-row items-stretch gap-0 bg-white rounded-[2rem] shadow-2xl overflow-hidden relative z-10 border border-gray-100"> <!-- Left Side: Content & Social Proof --> <div class="w-full lg:w-1/2 p-10 sm:p-14 bg-white flex flex-col justify-center"> <a href="/" class="inline-block mb-10 transform hover:scale-105 transition-transform"> <img src="/logo.png" alt="The Times Clock" class="h-10 w-auto"> </a> <h1 class="text-4xl sm:text-5xl font-[900] text-gray-900 leading-[1.1] mb-6 tracking-tight">
Join <span class="text-[#22c55e]">50,000+</span> founders building the future.
</h1> <p class="text-lg text-gray-500 mb-10 leading-relaxed font-medium">
Get the latest case studies, trends, and business insights delivered straight to your inbox. No fluff, just value.
</p> <ul class="space-y-4 mb-10"> <li class="flex items-center gap-3"> <div class="bg-green-100 p-1 rounded-full">${renderComponent($$result2, "Check", Check, { "className": "w-4 h-4 text-[#22c55e] stroke-[3]" })}</div> <span class="text-gray-700 font-semibold">Weekly Case Studies</span> </li> <li class="flex items-center gap-3"> <div class="bg-blue-100 p-1 rounded-full">${renderComponent($$result2, "Check", Check, { "className": "w-4 h-4 text-[#3b82f6] stroke-[3]" })}</div> <span class="text-gray-700 font-semibold">Business Trends & Data</span> </li> <li class="flex items-center gap-3"> <div class="bg-purple-100 p-1 rounded-full">${renderComponent($$result2, "Check", Check, { "className": "w-4 h-4 text-[#8b5cf6] stroke-[3]" })}</div> <span class="text-gray-700 font-semibold">Exclusive Founder Interviews</span> </li> </ul> <div class="mt-auto pt-8 border-t border-gray-100 flex items-center gap-4"> <div class="flex -space-x-3"> <img src="https://i.pravatar.cc/100?img=11" class="w-10 h-10 rounded-full border-2 border-white" alt="Member"> <img src="https://i.pravatar.cc/100?img=12" class="w-10 h-10 rounded-full border-2 border-white" alt="Member"> <img src="https://i.pravatar.cc/100?img=13" class="w-10 h-10 rounded-full border-2 border-white" alt="Member"> <div class="w-10 h-10 rounded-full bg-gray-100 border-2 border-white flex items-center justify-center text-xs font-bold text-gray-500">+50k</div> </div> <p class="text-sm font-semibold text-gray-400">Join the elite community</p> </div> </div> <!-- Right Side: Interaction Form --> <div class="w-full lg:w-1/2 bg-[#f8fafc] p-10 sm:p-14 flex flex-col justify-center border-l border-gray-100 relative overflow-hidden"> <!-- Decorative Patterns --> <div class="absolute top-0 right-0 w-32 h-32 bg-[radial-gradient(#cbd5e1_1px,transparent_1px)] [background-size:16px_16px] opacity-20"></div> <div class="absolute bottom-0 left-0 w-32 h-32 bg-[radial-gradient(#cbd5e1_1px,transparent_1px)] [background-size:16px_16px] opacity-20"></div> <div class="relative z-10 max-w-sm mx-auto w-full"> <div class="bg-white p-8 rounded-2xl shadow-lg border border-gray-200/60 mb-8"> <div class="w-12 h-12 bg-green-50 rounded-xl flex items-center justify-center mb-6"> ${renderComponent($$result2, "Mail", Mail, { "className": "w-6 h-6 text-[#22c55e]" })} </div> <h3 class="text-xl font-bold text-gray-900 mb-2">Subscribe to newsletter</h3> <p class="text-sm text-gray-500 mb-6">Access our premium content for free.</p> <!-- Custom Form Handling --> <form id="subscribe-form" class="space-y-4"> <div> <label for="email" class="sr-only">Email address</label> <input type="email" id="email" name="email_address" required placeholder="name@example.com" class="w-full px-5 py-4 rounded-xl bg-gray-50 border border-gray-200 focus:bg-white focus:border-[#22c55e] focus:ring-2 focus:ring-[#22c55e]/20 outline-none transition-all font-medium text-gray-900 placeholder-gray-400"> </div> <button type="submit" id="submit-btn" class="w-full bg-[#111827] text-white font-bold text-lg py-4 rounded-xl hover:bg-black hover:scale-[1.02] active:scale-[0.98] transition-all shadow-xl flex items-center justify-center gap-2"> <span>Subscribe Free</span> </button> </form> <div id="success-message" class="hidden mt-6 bg-green-50 border border-green-100 rounded-xl p-4 text-center animate-fade-in"> <div class="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-2"> ${renderComponent($$result2, "Check", Check, { "className": "w-5 h-5 text-[#22c55e]" })} </div> <p class="text-[#22c55e] font-bold text-sm">Successfully Subscribed!</p> <p class="text-gray-500 text-xs mt-1">Check your inbox to confirm.</p> </div> <div id="error-message" class="hidden mt-4 text-red-500 text-sm text-center font-medium">
Something went wrong. Please try again.
</div> </div> <div class="grid grid-cols-2 gap-4"> <div class="bg-white p-4 rounded-xl shadow-sm border border-gray-100 flex flex-col items-center justify-center text-center"> ${renderComponent($$result2, "TrendingUp", TrendingUp, { "className": "w-5 h-5 text-gray-400 mb-2" })} <span class="text-2xl font-black text-gray-900">4k+</span> <span class="text-[10px] font-bold text-gray-400 uppercase tracking-wider">Case Studies</span> </div> <div class="bg-white p-4 rounded-xl shadow-sm border border-gray-100 flex flex-col items-center justify-center text-center"> ${renderComponent($$result2, "Users", Users, { "className": "w-5 h-5 text-gray-400 mb-2" })} <span class="text-2xl font-black text-gray-900">50k+</span> <span class="text-[10px] font-bold text-gray-400 uppercase tracking-wider">Readers</span> </div> </div> </div> </div> </div> </main> ` })} ${renderScript($$result, "C:/Users/richa/Downloads/APP INVENTOR/thetimes clock/TTC ASTRO THEME - Antigravity/src/pages/subscribe.astro?astro&type=script&index=0&lang.ts")}`;
}, "C:/Users/richa/Downloads/APP INVENTOR/thetimes clock/TTC ASTRO THEME - Antigravity/src/pages/subscribe.astro", void 0);

const $$file = "C:/Users/richa/Downloads/APP INVENTOR/thetimes clock/TTC ASTRO THEME - Antigravity/src/pages/subscribe.astro";
const $$url = "/subscribe";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Subscribe,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
