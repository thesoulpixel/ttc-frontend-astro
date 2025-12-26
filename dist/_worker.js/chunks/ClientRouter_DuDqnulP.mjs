globalThis.process ??= {}; globalThis.process.env ??= {};
import { c as createAstro, a as createComponent, m as maybeRenderHead, b as addAttribute, r as renderComponent, f as renderScript, e as renderTemplate } from './astro/server_tYTg26cl.mjs';
/* empty css                          */
import { a as reactExports } from './_@astro-renderers_Ddps2kkj.mjs';

/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */

const toKebabCase = (string) => string.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase();
const toCamelCase = (string) => string.replace(
  /^([A-Z])|[\s-_]+(\w)/g,
  (match, p1, p2) => p2 ? p2.toUpperCase() : p1.toLowerCase()
);
const toPascalCase = (string) => {
  const camelCase = toCamelCase(string);
  return camelCase.charAt(0).toUpperCase() + camelCase.slice(1);
};
const mergeClasses = (...classes) => classes.filter((className, index, array) => {
  return Boolean(className) && className.trim() !== "" && array.indexOf(className) === index;
}).join(" ").trim();
const hasA11yProp = (props) => {
  for (const prop in props) {
    if (prop.startsWith("aria-") || prop === "role" || prop === "title") {
      return true;
    }
  }
};

/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */

var defaultAttributes = {
  xmlns: "http://www.w3.org/2000/svg",
  width: 24,
  height: 24,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round"
};

/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */


const Icon = reactExports.forwardRef(
  ({
    color = "currentColor",
    size = 24,
    strokeWidth = 2,
    absoluteStrokeWidth,
    className = "",
    children,
    iconNode,
    ...rest
  }, ref) => reactExports.createElement(
    "svg",
    {
      ref,
      ...defaultAttributes,
      width: size,
      height: size,
      stroke: color,
      strokeWidth: absoluteStrokeWidth ? Number(strokeWidth) * 24 / Number(size) : strokeWidth,
      className: mergeClasses("lucide", className),
      ...!children && !hasA11yProp(rest) && { "aria-hidden": "true" },
      ...rest
    },
    [
      ...iconNode.map(([tag, attrs]) => reactExports.createElement(tag, attrs)),
      ...Array.isArray(children) ? children : [children]
    ]
  )
);

/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */


const createLucideIcon = (iconName, iconNode) => {
  const Component = reactExports.forwardRef(
    ({ className, ...props }, ref) => reactExports.createElement(Icon, {
      ref,
      iconNode,
      className: mergeClasses(
        `lucide-${toKebabCase(toPascalCase(iconName))}`,
        `lucide-${iconName}`,
        className
      ),
      ...props
    })
  );
  Component.displayName = toPascalCase(iconName);
  return Component;
};

/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */


const __iconNode$2 = [
  ["path", { d: "M5 12h14", key: "1ays0h" }],
  ["path", { d: "m12 5 7 7-7 7", key: "xquz4c" }]
];
const ArrowRight = createLucideIcon("arrow-right", __iconNode$2);

/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */


const __iconNode$1 = [
  ["path", { d: "M4 5h16", key: "1tepv9" }],
  ["path", { d: "M4 12h16", key: "1lakjw" }],
  ["path", { d: "M4 19h16", key: "1djgab" }]
];
const Menu = createLucideIcon("menu", __iconNode$1);

/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */


const __iconNode = [
  ["path", { d: "M18 6 6 18", key: "1bl5f8" }],
  ["path", { d: "m6 6 12 12", key: "d8bk6v" }]
];
const X = createLucideIcon("x", __iconNode);

const $$Astro$1 = createAstro("https://thetimesclock.com");
const $$Navbar = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Navbar;
  const logoUrl = "/logo.png";
  return renderTemplate`${maybeRenderHead()}<nav id="main-navbar" class="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-gray-100/50 shadow-sm transition-all duration-300 h-[64px]" data-astro-cid-5blmo7yk> <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center justify-between transition-all duration-300" id="nav-container" data-astro-cid-5blmo7yk> <!-- Logo --> <a href="/" data-astro-prefetch="viewport" class="flex-shrink-0 flex items-center group relative z-50" data-astro-cid-5blmo7yk> <img${addAttribute(logoUrl, "src")} alt="The Times Clock" width="150" height="40" class="h-10 w-auto object-contain transition-transform duration-300 group-hover:scale-105" loading="eager" onerror="this.src='https://via.placeholder.com/150x50?text=LOGO'" data-astro-cid-5blmo7yk> </a> <!-- Desktop Menu --> <div class="hidden md:flex items-center gap-8" data-astro-cid-5blmo7yk> <div class="flex items-center gap-8 text-[13px] font-bold text-gray-600 tracking-wider uppercase font-['Inter']" data-astro-cid-5blmo7yk> <a href="/category/starter-story" data-astro-prefetch="viewport" class="hover:text-black hover:tracking-widest transition-all duration-300" data-astro-cid-5blmo7yk>Starter Story</a> <a href="/category/brand-story" data-astro-prefetch="viewport" class="hover:text-black hover:tracking-widest transition-all duration-300" data-astro-cid-5blmo7yk>Brand Story</a> <a href="/category/finance" data-astro-prefetch="viewport" class="hover:text-black hover:tracking-widest transition-all duration-300" data-astro-cid-5blmo7yk>Finance</a> </div> <a href="/subscribe" class="bg-[#22c55e] text-white font-bold px-6 py-2.5 rounded-lg shadow-[0_4px_14px_0_rgba(34,197,94,0.39)] hover:bg-green-600 hover:shadow-[0_6px_20px_rgba(34,197,94,0.23)] hover:-translate-y-0.5 active:translate-y-0 transition-all duration-300 text-[11px] tracking-widest uppercase flex items-center gap-2" data-astro-cid-5blmo7yk>
Subscribe ${renderComponent($$result, "ArrowRight", ArrowRight, { "className": "w-3 h-3", "data-astro-cid-5blmo7yk": true })} </a> </div> <!-- Mobile Menu Toggle --> <button id="mobile-menu-btn" class="md:hidden text-gray-900 z-50 p-2 rounded-md hover:bg-gray-100 transition-colors cursor-pointer" data-astro-cid-5blmo7yk> ${renderComponent($$result, "Menu", Menu, { "className": "w-8 h-8", "data-astro-cid-5blmo7yk": true })} </button> </div> <!-- Mobile Menu Overlay --> <div id="mobile-menu" class="fixed top-0 left-0 w-full h-[100dvh] bg-white z-[100] flex flex-col transition-all duration-300 md:hidden opacity-0 invisible" data-astro-cid-5blmo7yk> <!-- Mobile Overlay Header --> <div class="h-[64px] flex items-center justify-between px-4 sm:px-6 border-b border-gray-100 bg-white shrink-0" data-astro-cid-5blmo7yk> <a href="/" data-astro-prefetch="viewport" class="h-10 block" data-astro-cid-5blmo7yk> <!-- Logo in Menu --> <img src="/logo.png" alt="The Times Clock" class="h-full w-auto object-contain" onerror="this.src='https://via.placeholder.com/150x50?text=LOGO'" data-astro-cid-5blmo7yk> </a> <button id="mobile-menu-close-btn" class="p-2 text-gray-900 hover:bg-gray-100 rounded-full transition-colors cursor-pointer" data-astro-cid-5blmo7yk> ${renderComponent($$result, "X", X, { "className": "w-8 h-8", "data-astro-cid-5blmo7yk": true })} </button> </div> <!-- Mobile Overlay Content --> <div class="flex-1 flex flex-col px-6 pt-10 space-y-8 overflow-y-auto bg-white" data-astro-cid-5blmo7yk> <nav class="flex flex-col space-y-6" data-astro-cid-5blmo7yk> <a href="/category/starter-story" data-astro-prefetch="viewport" class="nav-link-mobile text-3xl font-black text-[#0F172A] uppercase tracking-tight hover:text-[#22c55e] transition-colors" data-astro-cid-5blmo7yk>
Starter Story
</a> <a href="/category/brand-story" data-astro-prefetch="viewport" class="nav-link-mobile text-3xl font-black text-[#0F172A] uppercase tracking-tight hover:text-[#22c55e] transition-colors" data-astro-cid-5blmo7yk>
Brand Story
</a> <a href="/category/finance" data-astro-prefetch="viewport" class="nav-link-mobile text-3xl font-black text-[#0F172A] uppercase tracking-tight hover:text-[#22c55e] transition-colors" data-astro-cid-5blmo7yk>
Finance
</a> </nav> <div class="w-full h-px bg-gray-100 my-4 shrink-0" data-astro-cid-5blmo7yk></div> <a href="/subscribe" class="w-full bg-[#22c55e] hover:bg-green-600 text-white font-black text-lg py-4 rounded pointer-events-auto transition-colors shadow-sm tracking-wide uppercase shrink-0 mb-8 flex justify-center items-center" data-astro-cid-5blmo7yk>
Join 50k+ Founders
</a> </div> </div> </nav>  ${renderScript($$result, "C:/Users/richa/Downloads/APP INVENTOR/thetimes clock/TTC ASTRO THEME - Antigravity/src/components/Navbar.astro?astro&type=script&index=0&lang.ts")}`;
}, "C:/Users/richa/Downloads/APP INVENTOR/thetimes clock/TTC ASTRO THEME - Antigravity/src/components/Navbar.astro", void 0);

const $$Footer = createComponent(($$result, $$props, $$slots) => {
  const year = (/* @__PURE__ */ new Date()).getFullYear();
  return renderTemplate`${maybeRenderHead()}<footer class="bg-white border-t border-gray-200 mt-12 py-12 text-center text-gray-400 text-sm"> <div class="max-w-7xl mx-auto px-4"> <img src="/logo.png" alt="The Times Clock" class="h-8 w-auto mx-auto mb-6"> <!-- Social Media Icons --> <div class="flex justify-center gap-6 mb-8"> <!-- X (Twitter) --> <a href="https://x.com/thetimesclock" target="_blank" rel="noopener noreferrer" class="text-gray-400 hover:text-gray-900 transition-colors"> <span class="sr-only">X (Twitter)</span> <svg class="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"> <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"></path> </svg> </a> <!-- Facebook --> <a href="https://www.facebook.com/thetimesclock/" target="_blank" rel="noopener noreferrer" class="text-gray-400 hover:text-gray-900 transition-colors"> <span class="sr-only">Facebook</span> <svg class="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"> <path fill-rule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clip-rule="evenodd"></path> </svg> </a> <!-- YouTube --> <a href="https://www.youtube.com/@thetimesclock" target="_blank" rel="noopener noreferrer" class="text-gray-400 hover:text-gray-900 transition-colors"> <span class="sr-only">YouTube</span> <svg class="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"> <path fill-rule="evenodd" d="M19.812 5.418c.861.23 1.538.907 1.768 1.768C21.998 8.746 22 12 22 12s0 3.255-.418 4.814a2.504 2.504 0 0 1-1.768 1.768c-1.56.419-7.814.419-7.814.419s-6.255 0-7.814-.419a2.505 2.505 0 0 1-1.768-1.768C2 15.255 2 12 2 12s0-3.255.417-4.814a2.507 2.507 0 0 1 1.768-1.768C5.744 5 11.998 5 11.998 5s6.255 0 7.814.418zM15.194 12 10 15V9l5.194 3z" clip-rule="evenodd"></path> </svg> </a> </div> <div class="flex justify-center gap-6 mb-6 font-medium"> <a href="/about" class="hover:text-gray-900">About</a> <a href="/support" class="hover:text-gray-900">Support</a> <a href="/contact" class="hover:text-gray-900">Contact</a> <a href="/privacy" class="hover:text-gray-900">Privacy</a> <a href="/terms" class="hover:text-gray-900">Terms</a> </div> <p>&copy; ${year} The Times Clock. All rights reserved.</p> </div> </footer>`;
}, "C:/Users/richa/Downloads/APP INVENTOR/thetimes clock/TTC ASTRO THEME - Antigravity/src/components/Footer.astro", void 0);

const $$Astro = createAstro("https://thetimesclock.com");
const $$ClientRouter = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$ClientRouter;
  const { fallback = "animate" } = Astro2.props;
  return renderTemplate`<meta name="astro-view-transitions-enabled" content="true"><meta name="astro-view-transitions-fallback"${addAttribute(fallback, "content")}>${renderScript($$result, "C:/Users/richa/Downloads/APP INVENTOR/thetimes clock/TTC ASTRO THEME - Antigravity/node_modules/astro/components/ClientRouter.astro?astro&type=script&index=0&lang.ts")}`;
}, "C:/Users/richa/Downloads/APP INVENTOR/thetimes clock/TTC ASTRO THEME - Antigravity/node_modules/astro/components/ClientRouter.astro", void 0);

export { $$ClientRouter as $, ArrowRight as A, $$Navbar as a, $$Footer as b, createLucideIcon as c };
