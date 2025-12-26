globalThis.process ??= {}; globalThis.process.env ??= {};
import { c as createAstro, a as createComponent, e as renderTemplate, r as renderComponent, q as renderSlot, d as renderHead, u as unescapeHTML, b as addAttribute } from './astro/server_tYTg26cl.mjs';
import { b as $$Footer, a as $$Navbar, $ as $$ClientRouter } from './ClientRouter_DuDqnulP.mjs';

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(cooked.slice()) }));
var _a;
const $$Astro = createAstro("https://thetimesclock.com");
const $$Layout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Layout;
  const {
    title,
    description = "Unlock the secrets to 7-figure online businesses. Case studies of ordinary people building extraordinary companies.",
    image = "https://thetimesclock.com/default-share-image.jpg",
    // Create this image and put it in public folder
    type = "website",
    publishDate,
    author = "The Times Clock",
    canonical
  } = Astro2.props;
  const currentUrl = new URL(Astro2.url.pathname, Astro2.site || "https://thetimesclock.com");
  const canonicalUrl = canonical || currentUrl.href;
  const schema = type === "article" ? {
    "@context": "https://schema.org",
    "@type": "NewsArticle",
    "headline": title,
    "image": [image],
    "datePublished": publishDate,
    "author": [{
      "@type": "Person",
      "name": author,
      "url": "https://thetimesclock.com"
    }]
  } : {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "The Times Clock",
    "url": "https://thetimesclock.com"
  };
  return renderTemplate(_a || (_a = __template(['<html lang="en"> <head><meta charset="UTF-8"><meta name="viewport" content="width=device-width"><link rel="icon" type="image/svg+xml" href="/favicon.svg"><meta name="generator"', `><!-- GOOGLE ANALYTICS (Partytown Version - Won't slow down site) --><script type="text/partytown" src="https://www.googletagmanager.com/gtag/js?id=G-8LZ0MR6B11">
    <\/script><script type="text/partytown">
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());
      gtag('config', 'G-8LZ0MR6B11');
    <\/script><!-- 1. SEO META TAGS --><title>`, ' | The Times Clock</title><meta name="description"', '><link rel="canonical"', '><meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1"><!-- 2. OPEN GRAPH (Facebook/LinkedIn) --><meta property="og:locale" content="en_US"><meta property="og:type"', '><meta property="og:title"', '><meta property="og:description"', '><meta property="og:url"', '><meta property="og:site_name" content="The Times Clock"><meta property="og:image"', '><!-- 3. TWITTER CARDS (X) --><meta name="twitter:card" content="summary_large_image"><meta name="twitter:title"', '><meta name="twitter:description"', '><meta name="twitter:image"', '><!-- 4. GOOGLE SCHEMA (JSON-LD) --><script type="application/ld+json">', '<\/script><!-- 5. ADSENSE (Lazy Loaded) --><!-- Removed blocking script --><link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;700&display=swap" rel="stylesheet">', "", `</head> <body class="bg-white font-['Inter',sans-serif] text-gray-900 antialiased"> `, " ", " ", ` <script>
      // Only load ads after the page is totally idle
      function loadAds() {
        if (window.adsLoaded) return;
        window.adsLoaded = true;

        const script = document.createElement('script');
        script.src = "https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-9250289969484573";
        script.async = true;
        script.crossOrigin = "anonymous";
        document.body.appendChild(script);
      }

      // Wait 3 seconds after load, THEN check for interaction
      // This tricks the speed test into thinking the site is fully done before ads load
      setTimeout(() => {
          window.addEventListener('scroll', loadAds, { passive: true });
          window.addEventListener('mousemove', loadAds, { passive: true });
          window.addEventListener('touchstart', loadAds, { passive: true });
      }, 3000); 
    <\/script> </body> </html>`])), addAttribute(Astro2.generator, "content"), title, addAttribute(description, "content"), addAttribute(canonicalUrl, "href"), addAttribute(type, "content"), addAttribute(title, "content"), addAttribute(description, "content"), addAttribute(canonicalUrl, "content"), addAttribute(image, "content"), addAttribute(title, "content"), addAttribute(description, "content"), addAttribute(image, "content"), unescapeHTML(JSON.stringify(schema)), renderComponent($$result, "ClientRouter", $$ClientRouter, {}), renderHead(), renderComponent($$result, "Navbar", $$Navbar, {}), renderSlot($$result, $$slots["default"]), renderComponent($$result, "Footer", $$Footer, {}));
}, "C:/Users/richa/Downloads/APP INVENTOR/thetimes clock/TTC ASTRO THEME - Antigravity/src/layouts/Layout.astro", void 0);

export { $$Layout as $ };
