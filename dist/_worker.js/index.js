globalThis.process ??= {}; globalThis.process.env ??= {};
import { r as renderers } from './chunks/_@astro-renderers_Ddps2kkj.mjs';
import { c as createExports, s as serverEntrypointModule } from './chunks/_@astrojs-ssr-adapter_C8I0dlwT.mjs';
import { manifest } from './manifest_Bw7AtF0K.mjs';

const serverIslandMap = new Map();;

const _page0 = () => import('./pages/about.astro.mjs');
const _page1 = () => import('./pages/category/_slug_/_---page_.astro.mjs');
const _page2 = () => import('./pages/contact.astro.mjs');
const _page3 = () => import('./pages/post/_slug_.astro.mjs');
const _page4 = () => import('./pages/privacy.astro.mjs');
const _page5 = () => import('./pages/subscribe.astro.mjs');
const _page6 = () => import('./pages/support.astro.mjs');
const _page7 = () => import('./pages/terms.astro.mjs');
const _page8 = () => import('./pages/index.astro.mjs');
const pageMap = new Map([
    ["src/pages/about.astro", _page0],
    ["src/pages/category/[slug]/[...page].astro", _page1],
    ["src/pages/contact.astro", _page2],
    ["src/pages/post/[slug].astro", _page3],
    ["src/pages/privacy.astro", _page4],
    ["src/pages/subscribe.astro", _page5],
    ["src/pages/support.astro", _page6],
    ["src/pages/terms.astro", _page7],
    ["src/pages/index.astro", _page8]
]);

const _manifest = Object.assign(manifest, {
    pageMap,
    serverIslandMap,
    renderers,
    actions: () => import('./noop-entrypoint.mjs'),
    middleware: () => import('./_astro-internal_middleware.mjs')
});
const _args = undefined;
const _exports = createExports(_manifest);
const __astrojsSsrVirtualEntry = _exports.default;
const _start = 'start';
if (Object.prototype.hasOwnProperty.call(serverEntrypointModule, _start)) {
	serverEntrypointModule[_start](_manifest, _args);
}

export { __astrojsSsrVirtualEntry as default, pageMap };
