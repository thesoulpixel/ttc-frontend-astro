const fs = require('fs');
const path = require('path');

// Helper to create directories and files
const write = (filePath, content) => {
  const targetPath = path.join(process.cwd(), filePath);
  const dirname = path.dirname(targetPath);

  if (!fs.existsSync(dirname)) {
    fs.mkdirSync(dirname, { recursive: true });
  }

  fs.writeFileSync(targetPath, content.trim());
  console.log(`✅ Updated: ${filePath}`);
};

console.log("🚀 Applying 'Target Design' Force Fix...");

// 1. API Utility (Enhanced with Fallback Data)
// This ensures the site NEVER looks empty, even if the API fails.
write('src/lib/api.js', `
const API_URL = 'https://thetimesclock.com/graphql';

async function fetchAPI(query, variables = {}) {
  const headers = { 'Content-Type': 'application/json' };
  try {
    const res = await fetch(API_URL, {
      method: 'POST',
      headers,
      body: JSON.stringify({ query, variables }),
    });
    const json = await res.json();
    return json.data;
  } catch (error) {
    console.warn('API Connection Failed (Using Fallback Data):', error);
    return null;
  }
}

// --- FALLBACK DATA GENERATOR ---
// Returns professional mock data if the live API fails
function getFallbackData(category, limit) {
  const images = [
    "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=800&q=80"
  ];
  
  return Array(limit).fill(0).map((_, i) => ({
    title: \`\${category} Success Story: How to Scale to 7-Figures #\${i+1}\`,
    slug: "sample-post",
    date: new Date().toISOString(),
    excerpt: "Learn the exact strategies used by top founders to grow their revenue...",
    featuredImage: { node: { sourceUrl: images[i % images.length], altText: "Business" } },
    author: { node: { name: "John Doe", avatar: { url: "https://i.pravatar.cc/150" } } },
    categories: { nodes: [{ name: category }] }
  }));
}

export async function getPostsByCategory(categoryName, limit = 3) {
  const query = \`
    query GetPostsByCategory($categoryName: String!, $limit: Int!) {
      posts(where: { categoryName: $categoryName, orderby: { field: DATE, order: DESC } }, first: $limit) {
        nodes {
          title
          slug
          date
          excerpt
          featuredImage { node { sourceUrl altText } }
          author { node { name avatar { url } } }
          categories { nodes { name } }
        }
      }
    }
  \`;
  
  const data = await fetchAPI(query, { categoryName, limit });
  
  // IF DATA IS MISSING -> RETURN FALLBACK
  if (!data?.posts?.nodes || data.posts.nodes.length === 0) {
    console.log(\`⚠️ No data found for \${categoryName}, using fallback data.\`);
    return getFallbackData(categoryName, limit);
  }
  
  return data.posts.nodes;
}

export async function getAllPostSlugs() {
  const query = \`{ posts(first: 1000) { nodes { slug } } }\`;
  const data = await fetchAPI(query);
  return data?.posts?.nodes || [];
}

export async function getPostBySlug(slug) {
  const query = \`
    query GetPostBySlug($slug: ID!) {
      post(id: $slug, idType: SLUG) {
        title content date slug
        featuredImage { node { sourceUrl altText } }
        author { node { name avatar { url } } }
        categories { nodes { name slug } }
      }
    }
  \`;
  const data = await fetchAPI(query, { slug });
  return data?.post;
}
`);

// 2. Navbar (New: Sticky, Mobile Menu, Shrink on Scroll)
write('src/components/Navbar.astro', \`
---
const logoUrl = "/logo.png";
import { Menu, X, ArrowRight } from 'lucide-react';
---

<nav 
  id="main-navbar"
  class="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-gray-100/50 shadow-sm transition-all duration-300 h-[80px]"
>
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center justify-between transition-all duration-300" id="nav-container">
    
    <!-- Logo -->
    <a href="/" class="flex-shrink-0 h-10 flex items-center group relative z-50">
        <img 
            src={logoUrl} 
            alt="The Times Clock" 
            class="h-full w-auto object-contain transition-transform duration-300 group-hover:scale-105"
            onerror="this.src='https://via.placeholder.com/150x50?text=LOGO'" 
        />
    </a>

    <!-- Desktop Menu -->
    <div class="hidden md:flex items-center gap-8">
        <div class="flex items-center gap-8 text-[13px] font-bold text-gray-600 tracking-wider uppercase font-['Inter']">
          <a href="#" class="hover:text-black hover:tracking-widest transition-all duration-300">Starter Story</a>
          <a href="#" class="hover:text-black hover:tracking-widest transition-all duration-300">Brand Story</a>
          <a href="#" class="hover:text-black hover:tracking-widest transition-all duration-300">Finance</a>
        </div>

        <button class="bg-[#22c55e] text-white font-bold px-6 py-2.5 rounded-lg shadow-[0_4px_14px_0_rgba(34,197,94,0.39)] hover:bg-green-600 hover:shadow-[0_6px_20px_rgba(34,197,94,0.23)] hover:-translate-y-0.5 active:translate-y-0 transition-all duration-300 text-[11px] tracking-widest uppercase flex items-center gap-2">
          Subscribe <ArrowRight className="w-3 h-3" />
        </button>
    </div>

    <!-- Mobile Menu Toggle -->
    <button id="mobile-menu-btn" class="md:hidden text-gray-900 z-50 p-2 rounded-md hover:bg-gray-100 transition-colors">
        <Menu className="w-7 h-7" id="menu-icon-open" />
        <X className="w-7 h-7 hidden" id="menu-icon-close" />
    </button>
  </div>

  <!-- Mobile Menu Overlay -->
  <div 
    id="mobile-menu" 
    class="fixed top-0 left-0 w-full h-[100dvh] bg-white z-[100] flex flex-col transition-all duration-300 md:hidden opacity-0 invisible"
  >
      <!-- Mobile Overlay Header -->
      <div class="h-[80px] flex items-center justify-between px-4 sm:px-6 border-b border-gray-100">
        <div class="h-10">
             <!-- Logo in Menu -->
             <img src="/logo.png" alt="The Times Clock" class="h-full w-auto object-contain" onerror="this.src='/logo.png'" />
        </div>
        <button id="mobile-menu-close-btn" class="p-2 text-gray-900 hover:bg-gray-100 rounded-full transition-colors">
            <X className="w-8 h-8" />
        </button>
      </div>
      
      <!-- Mobile Overlay Content -->
      <div class="flex-1 flex flex-col px-6 pt-10 space-y-8 overflow-y-auto">
        <nav class="flex flex-col space-y-6">
            <a href="#" class="nav-link-mobile text-3xl font-black text-[#0F172A] uppercase tracking-tight hover:text-[#22c55e] transition-colors">
            Starter Story
            </a>
            <a href="#" class="nav-link-mobile text-3xl font-black text-[#0F172A] uppercase tracking-tight hover:text-[#22c55e] transition-colors">
            Brand Story
            </a>
            <a href="#" class="nav-link-mobile text-3xl font-black text-[#0F172A] uppercase tracking-tight hover:text-[#22c55e] transition-colors">
            Finance
            </a>
        </nav>

        <div class="w-full h-px bg-gray-100 my-4"></div>

        <button class="w-full bg-[#22c55e] hover:bg-green-600 text-white font-black text-lg py-4 rounded pointer-events-auto transition-colors shadow-sm tracking-wide uppercase">
            Join 50k+ Founders
        </button>
      </div>
  </div>
</nav>

<style>
  /* Shrink state classes */
  .navbar-shrink {
    height: 60px !important;
    background-color: rgba(255, 255, 255, 0.98);
    box-shadow: 0 4px 20px -5px rgba(0, 0, 0, 0.1);
  }
  
  /* Mobile menu open state */
  .mobile-menu-open {
    opacity: 1 !important;
    pointer-events: auto !important;
  }
</style>

<script>
  const nav = document.getElementById('main-navbar');
  const navContainer = document.getElementById('nav-container');
  const menuBtn = document.getElementById('mobile-menu-btn');
  const closeBtnInternal = document.getElementById('mobile-menu-close-btn'); // New close button
  const mobileMenu = document.getElementById('mobile-menu');
  const openIcon = document.getElementById('menu-icon-open');
  const closeIcon = document.getElementById('menu-icon-close');
  const body = document.body;

  // Scroll Handler
  window.addEventListener('scroll', () => {
    if (window.scrollY > 20) {
      nav.classList.add('navbar-shrink');
    } else {
      nav.classList.remove('navbar-shrink');
    }
  });

  function toggleMenu() {
     const isOpen = mobileMenu.classList.contains('mobile-menu-open');
     if(isOpen) {
        mobileMenu.classList.remove('mobile-menu-open');
        // Reset icon state in main bar (though hidden by overlay, good for state)
        if(openIcon) openIcon.classList.remove('hidden');
        if(closeIcon) closeIcon.classList.add('hidden');
        body.style.overflow = 'auto'; 
     } else {
        mobileMenu.classList.add('mobile-menu-open');
        if(openIcon) openIcon.classList.add('hidden');
        if(closeIcon) closeIcon.classList.remove('hidden');
        body.style.overflow = 'hidden'; 
     }
  }

  // Event Listeners
  if(menuBtn) menuBtn.addEventListener('click', toggleMenu);
  if(closeBtnInternal) closeBtnInternal.addEventListener('click', toggleMenu);

  // Close menu when clicking a link
  document.querySelectorAll('.nav-link-mobile').forEach(link => {
      link.addEventListener('click', () => {
        mobileMenu.classList.remove('mobile-menu-open');
        body.style.overflow = 'auto';
      });
  });
</script>
\`);

// 3. Hero Component (Visual Match for "Green Shirt Guy" & Purple BG)
write('src/components/Hero.astro', `
---
import { TrendingUp, ChevronRight } from 'lucide-react';

const { featuredPosts } = Astro.props;

// Use the first post or a hardcoded fallback that matches your screenshot specific visual
const mainPost = (featuredPosts && featuredPosts.length > 0)
  ? featuredPosts[0]
  : {
    title: "How I Built a $1M/Year Payment App in 12 Months",
    slug: "#",
    featuredImage: { node: { sourceUrl: "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&w=1000&q=80" } }
  };
---

  <section class="relative bg-[#5465FF] pt-12 pb-24 overflow-hidden font-sans">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="grid lg:grid-cols-2 gap-12 items-center">

        <div class="space-y-6 relative z-10">
          <h1 class="text-5xl lg:text-[4rem] font-extrabold text-white leading-[1.1] tracking-tight">
            Unlock the secrets to <br />
            <span class="text-[#4ade80]">7-figure</span> online businesses.
          </h1>
          <p class="text-lg text-white/90 max-w-md leading-relaxed">
            Dive into our database of 4,000+ case studies and learn how ordinary people built extraordinary companies.
          </p>

          <div class="flex flex-col sm:flex-row gap-3 max-w-lg mt-4">
            <input
              type="email"
              placeholder="Enter your email"
              class="flex-1 px-6 py-4 rounded-lg outline-none text-gray-900 border-0 shadow-lg"
            />
            <button class="bg-[#22c55e] text-white font-bold px-8 py-4 rounded-lg hover:bg-green-500 transition-colors shadow-lg whitespace-nowrap">
              Join Our Community
            </button>
          </div>

          <div class="flex items-center gap-3 pt-2">
            <div class="flex -space-x-3">
              <img src="https://i.pravatar.cc/100?img=33" class="w-10 h-10 rounded-full border-2 border-[#5465FF]" />
              <img src="https://i.pravatar.cc/100?img=47" class="w-10 h-10 rounded-full border-2 border-[#5465FF]" />
              <img src="https://i.pravatar.cc/100?img=12" class="w-10 h-10 rounded-full border-2 border-[#5465FF]" />
            </div>
            <p class="text-white text-sm font-medium">Joined by 50,000+ entrepreneurs</p>
          </div>
        </div>

        <div class="relative mt-8 lg:mt-0 lg:pl-10">
          <div class="relative w-full aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl rotate-2 hover:rotate-0 transition-all duration-500 group border-[6px] border-white/20 bg-gray-900">

            <img
              src={mainPost.featuredImage?.node?.sourceUrl}
              alt="Hero"
              class="w-full h-full object-cover opacity-95"
            />

            <div class="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>

            <a href="#" class="absolute bottom-6 right-6 bg-[#ef4444] hover:bg-red-600 text-white text-xs font-bold px-5 py-2.5 rounded uppercase flex items-center gap-2 transition-transform hover:scale-105 shadow-lg z-20">
              Read Story <ChevronRight className="w-4 h-4" />
            </a>

            <div class="absolute -bottom-6 -left-6 bg-white rounded-xl p-4 shadow-xl flex items-center gap-4 animate-bounce-slow max-w-[240px] z-30">
              <div class="bg-green-100 p-3 rounded-full">
                <TrendingUp className="w-6 h-6 text-green-600" />
              </div>
              <div>
                <p class="text-[10px] uppercase font-bold text-gray-400 tracking-wider">Growth Highlight</p>
                <p class="text-xl font-black text-gray-900">$70,000 M</p>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  </section>
`);

// 3. Category Section (Fixed Layout)
write('src/components/CategorySection.astro', `
---
import PostCard from './PostCard.astro';
import { ArrowRight } from 'lucide-react';

const { title, posts, cardLabel } = Astro.props;
// Don't hide if empty, show something so layout is visible
if (!posts) return null;
---

  <section class="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 border-b border-gray-100 last:border-0">
    <div class="flex items-center justify-between mb-10">
      <div class="flex items-center gap-4">
        <div class="w-1.5 h-8 bg-[#ef4444]"></div> <h2 class="text-2xl font-bold text-gray-900 tracking-tight">{title}</h2>
      </div>
      <a href="#" class="text-blue-600 font-bold text-sm hover:underline flex items-center gap-1 uppercase tracking-wider">
        View all stories <ArrowRight className="w-4 h-4" />
      </a>
    </div>

    <div class="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-10">
      {posts.map((post) => (
        <PostCard post={post} categoryLabel={cardLabel} />
      ))}
    </div>
  </section>
`);

write('src/components/PostCard.astro', `
---
import { CheckCircle2, User, ChevronRight } from 'lucide-react';

const { post, categoryLabel } = Astro.props;
if (!post) return null;

const { title, featuredImage, author, date, slug } = post;

// Use image or fallback to logo if missing
const imageUrl = featuredImage?.node?.sourceUrl
  ? featuredImage.node.sourceUrl
  : "/logo.png";

const authorImg = author?.node?.avatar?.url;
const authorName = author?.node?.name || "Editor";
const formattedDate = date ? new Date(date).toLocaleDateString('en-US', { month: 'short', year: 'numeric' }) : 'Recent';
---

  <a href={\`/post/\${slug}\`} class="block h-full group">
  <article class="flex flex-col sm:flex-row gap-5 sm:gap-7 p-5 bg-white rounded-2xl border border-gray-100/80 hover:border-gray-200 shadow-[0_2px_8px_rgba(0,0,0,0.04)] hover:shadow-[0_12px_24px_rgba(0,0,0,0.06)] transition-all duration-300 h-full relative z-10 group overflow-hidden">
    
    <div class="w-full sm:w-[160px] md:w-[200px] shrink-0">
      <div class="aspect-[4/3] sm:aspect-[3/4] sm:h-full rounded-xl overflow-hidden relative shadow-sm border border-gray-100">
        <img 
          src={imageUrl} 
          alt={title} 
          loading="lazy"
          class={\`w-full h-full \${imageUrl === '/logo.png' ? 'object-contain p-6 bg-gray-50 opacity-40' : 'object-cover'} transform group-hover:scale-105 transition-transform duration-700 ease-out\`}
        />
        <div class="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-colors"></div>
      </div>
    </div>

    <div class="flex flex-col flex-1 min-w-0 py-1">
      <div>
        <div class="flex items-center justify-between mb-3">
            <span class="inline-flex items-center px-2 py-0.5 rounded text-[10px] sm:text-[11px] font-bold bg-[#a855f7]/10 text-[#a855f7] uppercase tracking-wider border border-[#a855f7]/20 whitespace-nowrap">
            {categoryLabel || 'STARTER STORY'}
            </span>
            <span class="text-[10px] sm:text-[11px] font-semibold text-gray-400 uppercase tracking-widest whitespace-nowrap ml-2">{formattedDate}</span>
        </div>
        
        <h3 class="text-xl sm:text-2xl font-[800] text-gray-900 leading-[1.2] mb-4 group-hover:text-[#4F46E5] transition-colors tracking-tight line-clamp-2 sm:line-clamp-3 break-words">
          {title}
        </h3>

        <ul class="space-y-2 mb-4 hidden sm:block"> 
          <li class="flex items-start gap-3 text-xs sm:text-[13px] font-medium text-gray-600">
            <CheckCircle2 className="w-4 h-4 text-[#22c55e] mt-0.5 shrink-0" />
            <span>Revenue model & margins</span>
          </li>
          <li class="flex items-start gap-3 text-xs sm:text-[13px] font-medium text-gray-600">
            <CheckCircle2 className="w-4 h-4 text-[#22c55e] mt-0.5 shrink-0" />
            <span>Customer acquisition strategy</span>
          </li>
          <li class="flex items-start gap-3 text-xs sm:text-[13px] font-medium text-gray-600">
            <CheckCircle2 className="w-4 h-4 text-[#22c55e] mt-0.5 shrink-0" />
            <span>Tech stack & marketing tools</span>
          </li>
        </ul>
      </div>

      <div class="flex items-center justify-between pt-5 border-t border-gray-100/80 mt-auto gap-4">
        <div class="flex items-center gap-2.5 min-w-0">
            {authorImg ? (
            <img src={authorImg} alt={authorName} class="w-6 h-6 rounded-full ring-2 ring-white shadow-sm shrink-0" />
            ) : (
            <div class="w-6 h-6 rounded-full bg-gray-100 flex items-center justify-center ring-2 ring-white shrink-0">
                <User className="w-3 h-3 text-gray-400" />
            </div>
            )}
            <span class="text-xs font-bold text-gray-700 truncate">{authorName}</span>
        </div>

        <div class="flex items-center gap-1.5 text-xs font-bold text-blue-600 group-hover:translate-x-1 transition-transform whitespace-nowrap shrink-0">
            Read Story
            <ChevronRight className="w-3.5 h-3.5" />
        </div>
      </div>
    </div>
  </article>
</a>
`);

// 4. Index Page (Ensures Categories are Called)
write('src/pages/index.astro', `
---
import { getPostsByCategory } from '../lib/api';
import Hero from '../components/Hero.astro';
import CategorySection from '../components/CategorySection.astro';
import Navbar from '../components/Navbar.astro';
import Footer from '../components/Footer.astro';

// Fetch Data (Will use fallback if API fails)
const featuredPosts = await getPostsByCategory('Featured', 1);
const starterStories = await getPostsByCategory('Starter Story', 4);
const brandStories = await getPostsByCategory('Brand Story', 2);
const financeStories = await getPostsByCategory('Finance', 2);
---

  <html lang="en">
    <head>
      <meta charset="utf-8" />
      <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
      <meta name="viewport" content="width=device-width" />
      <title>The Times Clock</title>
      <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap" rel="stylesheet">
    </head>
    <body class="bg-white font-['Inter',sans-serif] text-gray-900 antialiased">

      <Navbar />

      <main>
        <Hero featuredPosts={featuredPosts} />

        <div class="mt-4">
          <CategorySection title="Starter Story Case Studies" posts={starterStories} cardLabel="Case Studies" />
          <CategorySection title="Brand Story Deep Dives" posts={brandStories} cardLabel="Brand Story" />
          <CategorySection title="Finance & Investment" posts={financeStories} cardLabel="Case Studies" />
        </div>

        <div class="max-w-4xl mx-auto px-4 py-24">
          <div class="bg-white rounded-2xl shadow-2xl p-12 text-center border border-gray-100">
            <h2 class="text-3xl font-bold mb-4">Join the elite circle.</h2>
            <p class="text-gray-500 mb-8 max-w-md mx-auto">Get the latest insights delivered straight to your inbox.</p>
            <button class="bg-black text-white px-8 py-4 rounded-lg font-bold hover:bg-gray-800 transition-colors">Get Early Access</button>
          </div>
        </div>
      </main>

      <Footer />
    </body>
  </html>
`);

console.log("✅ FIXED. Run 'npm run dev' to see the full design.");

// 5. Redesigned Post Page (Hero Split, 3-Col, Slider, TOC, Socials)
write('src/pages/post/[slug].astro', \`
---
import { getAllPostSlugs, getPostBySlug, getPostsByCategory } from '../../lib/api';
import Navbar from '../../components/Navbar.astro';
import Footer from '../../components/Footer.astro';
import { Facebook, Twitter, Linkedin, Link as LinkIcon, ChevronLeft, ChevronRight, Share2, Copy } from 'lucide-react';

export async function getStaticPaths() {
  const allSlugs = await getAllPostSlugs();
  return allSlugs.map((node) => ({ params: { slug: node.slug } }));
}

const { slug } = Astro.params;
const post = await getPostBySlug(slug);
if (!post) return Astro.redirect('/404');

const relatedPosts = await getPostsByCategory('Featured', 8);
const formattedDate = new Date(post.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' });
const category = post.categories?.nodes[0]?.name || 'News';
const authorName = post.author?.node?.name || 'Editor';
const authorAvatar = post.author?.node?.avatar?.url;
const featuredImgUrl = post.featuredImage?.node?.sourceUrl;
const postUrl = typeof window !== 'undefined' ? window.location.href : \\\`https://thetimesclock.com/post/\\\${slug}\\\`; // Fallback/Client-side
---

<html lang="en">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width" />
    <title>{post.title} - The Times Clock</title>
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&family=Playfair+Display:ital,wght@0,400;0,700;0,900;1,400&display=swap" rel="stylesheet">
    <style>
      html { scroll-behavior: smooth; }
      .no-scrollbar::-webkit-scrollbar { display: none; }
      .no-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
      
      /* Active TOC highlight */
      .toc-active { color: #22c55e !important; border-left-color: #22c55e !important; }
    </style>
  </head>
  <body class="bg-white font-['Inter',sans-serif] antialiased text-gray-900">
    <Navbar />
    
    <main class="max-w-[1500px] mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12">
      
      <!-- HERO SECTION -->
      <header class="max-w-[90%] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 mb-20 items-center">
         <div class="lg:col-span-7 order-2 lg:order-1">
            {featuredImgUrl ? (
                <div class="aspect-[16/10] w-full relative rounded-2xl overflow-hidden shadow-sm">
                    <img src={featuredImgUrl} alt={post.title} class="absolute inset-0 w-full h-full object-cover" />
                </div>
            ) : (
                <div class="aspect-[16/10] w-full bg-gray-100 rounded-2xl flex items-center justify-center text-gray-300">
                    No Image
                </div>
            )}
         </div>

         <div class="lg:col-span-5 order-1 lg:order-2 flex flex-col justify-center">
             <div class="flex items-center gap-3 mb-6">
                <span class="px-3 py-1 bg-black text-white text-[10px] font-bold uppercase tracking-widest rounded-sm">{category}</span>
                <span class="text-gray-500 text-xs font-medium uppercase tracking-wider">{formattedDate}</span>
             </div>

             <h1 class="text-3xl md:text-5xl font-black leading-[1.1] mb-8 tracking-tight text-gray-900">
                {post.title}
             </h1>

             <div class="flex items-start gap-4 pt-2 border-t border-gray-100 mt-2">
                {authorAvatar && <img src={authorAvatar} alt={authorName} class="w-12 h-12 rounded-full border border-gray-100 mt-1" />}
                <div>
                    <p class="text-xs text-gray-400 font-bold uppercase tracking-wider mb-0.5">Written By</p>
                    <p class="font-bold text-gray-900 text-sm mb-2">{authorName}</p>
                    <div class="flex gap-3 text-gray-400">
                        <a href="#" class="hover:text-black transition-colors"><Twitter className="w-4 h-4 fill-current" /></a>
                        <a href="#" class="hover:text-[#0077b5] transition-colors"><Linkedin className="w-4 h-4 fill-current" /></a>
                    </div>
                </div>
             </div>
         </div>
      </header>


      <!-- MAIN CONTENT -->
      <div class="grid grid-cols-1 lg:grid-cols-12 gap-12 relative max-w-[95%] mx-auto">
        
        <!-- LEFT SIDEBAR: TOC & Desktop Share -->
        <aside class="hidden lg:block lg:col-span-2">
            <div class="sticky top-32 flex flex-col gap-10">
                <!-- Desktop Share Icons -->
                <!-- Sidebar Content (TOC only now) -->

                <!-- TOC -->
                <div>
                     <p class="text-xs font-bold text-gray-900 uppercase tracking-wider mb-4 border-b border-gray-100 pb-2">Table of Contents</p>
                     <nav id="toc" class="flex flex-col gap-0.5 -ml-4">
                        <!-- JS Populated -->
                     </nav>
                </div>
            </div>
        </aside>

        <!-- CENTER CONTENT -->
        <article class="lg:col-span-7 article-content">
          <div class="prose prose-lg max-w-none 
            prose-headings:font-black prose-headings:tracking-tight prose-headings:text-gray-900 prose-headings:mt-12 prose-headings:mb-6 prose-headings:scroll-mt-32
            prose-p:text-gray-600 prose-p:leading-[1.8] prose-p:font-medium
            prose-a:text-green-600 prose-a:no-underline prose-a:font-bold hover:prose-a:underline
            prose-img:rounded-2xl prose-img:shadow-lg prose-img:my-10
            first-letter:text-6xl first-letter:font-black first-letter:text-black first-letter:mr-3 first-letter:float-left first-letter:leading-[0.8]
            prose-li:text-gray-600">
            <div set:html={post.content} id="post-content-body" />
          </div>

          <!-- POST FOOTER SHARE -->
          <div class="mt-16 pt-8 border-t border-gray-100">
              <p class="text-center text-xs font-bold text-gray-400 uppercase tracking-wider mb-6">Share this article</p>
              <div class="flex justify-center gap-4">
                    <button onclick="share('twitter')" class="p-3 rounded-full bg-gray-50 text-gray-600 hover:bg-black hover:text-white transition-colors"><Twitter className="w-5 h-5" /></button>
                    <button onclick="share('facebook')" class="p-3 rounded-full bg-gray-50 text-gray-600 hover:bg-[#1877F2] hover:text-white transition-colors"><Facebook className="w-5 h-5" /></button>
                    <button onclick="share('linkedin')" class="p-3 rounded-full bg-gray-50 text-gray-600 hover:bg-[#0077b5] hover:text-white transition-colors"><Linkedin className="w-5 h-5" /></button>
                    <button onclick="share('whatsapp')" class="p-3 rounded-full bg-gray-50 text-gray-600 hover:bg-[#25D366] hover:text-white transition-colors">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="w-5 h-5"><path d="M3 21l1.65-3.8a9 9 0 1 1 3.4 2.9L3 21"/><path d="M9 10a.5.5 0 0 0 1 0V9a.5.5 0 0 0-1 0v1a5 5 0 0 0 5 5h1a.5.5 0 0 0 0-1h-1a.5.5 0 0 0 0 1"/></svg>
                    </button>
                    <button onclick="copyLink()" class="p-3 rounded-full bg-gray-50 text-gray-600 hover:bg-gray-800 hover:text-white transition-colors"><Copy className="w-5 h-5" /></button>
              </div>
          </div>
        </article>

        <!-- RIGHT SIDEBAR -->
        <aside class="lg:col-span-3 space-y-8">
            <div class="bg-gray-50 p-6 rounded-2xl border border-gray-100/50 sticky top-32">
                <span class="text-xs font-black text-gray-900 uppercase tracking-widest block mb-4 border-b border-gray-200 pb-2">Brand Story</span>
                <h3 class="text-xl font-black leading-tight mb-4 tracking-tight">Start your own success story today.</h3>
                <p class="text-gray-500 mb-6 text-sm leading-relaxed">Join our community of 50,000+ founders and get daily insights.</p>
                <button class="w-full bg-[#22c55e] hover:bg-green-600 transition-colors text-white font-black py-3.5 rounded-xl uppercase text-xs tracking-widest shadow-lg shadow-green-500/20 hover:shadow-green-500/30 hover:-translate-y-1 transform duration-200">
                    Join the Community
                </button>
            </div>
        </aside>
      </div>

      <!-- CONTINUE READING SLIDER (Vertical Design) -->
      <section class="mt-32 pt-12 border-t border-gray-100">
        <div class="flex items-center justify-between mb-8 px-4">
             <h2 class="text-2xl font-black text-gray-900 uppercase tracking-tighter">Continue Reading</h2>
             <div class="flex gap-2">
                <button id="slide-left" class="p-2 rounded-full border border-gray-200 hover:bg-gray-100 transition-colors"><ChevronLeft className="w-5 h-5"/></button>
                <button id="slide-right" class="p-2 rounded-full border border-gray-200 hover:bg-gray-100 transition-colors"><ChevronRight className="w-5 h-5"/></button>
             </div>
        </div>
        
        <div id="slider-container" class="flex gap-6 overflow-x-auto snap-x snap-mandatory pb-12 px-4 scroll-smooth no-scrollbar">
            {relatedPosts.map(post => (
                <div class="min-w-[280px] w-[280px] md:min-w-[380px] snap-start">
                    <a href={\`/post/\${post.slug}\`} class="block group h-full p-1">
                        <article class="flex gap-4 h-full items-center">
                            <!-- Image Left -->
                            <div class="w-24 h-24 shrink-0 rounded-xl overflow-hidden shadow-sm border border-gray-100 relative">
                                <img 
                                    src={post.featuredImage?.node?.sourceUrl || '/logo.png'} 
                                    alt={post.title} 
                                    class="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                                />
                            </div>
                            <!-- Content Right -->
                            <div class="flex-1 min-w-0 flex flex-col justify-center">
                                <div class="mb-1.5 text-[10px] uppercase tracking-wider text-gray-400 font-medium">
                                     {new Date(post.date).toLocaleDateString('en-US', { month: 'short', year: 'numeric' })}
                                </div>
                                <h3 class="text-sm font-bold text-gray-900 leading-snug group-hover:text-blue-600 transition-colors line-clamp-2 mb-2">
                                    {post.title}
                                </h3>
                                <p class="text-[10px] font-bold text-gray-400 flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                                    Read <ChevronRight className="w-3 h-3"/>
                                </p>
                            </div>
                        </article>
                    </a>
                </div>
            ))}
        </div>
      </section>

    </main>

    <!-- MOBILE SHARE BAR (Fixed Bottom) -->
    <!-- Mobile Share Bar Removed -->

    <Footer />

    <script define:vars={{ title: post.title }}>
        // SHARE FUNCTIONS
        window.share = (platform) => {
            const url = window.location.href;
            const text = title;
            let shareUrl = '';

            switch(platform) {
                case 'twitter': shareUrl = \\\`https://twitter.com/intent/tweet?text=\\\${encodeURIComponent(text)}&url=\\\${encodeURIComponent(url)}\\\`; break;
                case 'facebook': shareUrl = \\\`https://www.facebook.com/sharer/sharer.php?u=\\\${encodeURIComponent(url)}\\\`; break;
                case 'linkedin': shareUrl = \\\`https://www.linkedin.com/sharing/share-offsite/?url=\\\${encodeURIComponent(url)}\\\`; break;
                case 'whatsapp': shareUrl = \\\`https://wa.me/?text=\\\${encodeURIComponent(text + ' ' + url)}\\\`; break;
            }
            if(shareUrl) window.open(shareUrl, '_blank', 'width=600,height=400');
        };

        window.copyLink = () => {
            navigator.clipboard.writeText(window.location.href);
            alert('Link copied to clipboard!');
        };

        // SLIDER LOGIC
        const container = document.getElementById('slider-container');
        document.getElementById('slide-right')?.addEventListener('click', () => container.scrollBy({ left: 320, behavior: 'smooth' }));
        document.getElementById('slide-left')?.addEventListener('click', () => container.scrollBy({ left: -320, behavior: 'smooth' }));

        // TOC GENERATOR & HIGHLIGHTER
        const contentBody = document.getElementById('post-content-body');
        const tocContainer = document.getElementById('toc');

        if (contentBody && tocContainer) {
            const headings = Array.from(contentBody.querySelectorAll('h1, h2, h3'));
            
            if (headings.length === 0) {
                tocContainer.innerHTML = '<p class="text-xs italic text-gray-400">No headings found.</p>';
            } else {
                headings.forEach((heading, index) => {
                    if (!heading.id) heading.id = \\\`idx-\\\${index}\\\`;
                    
                    const link = document.createElement('a');
                    link.href = \\\`#\\\${heading.id}\\\`;
                    link.dataset.target = heading.id;
                    link.className = \\\`group flex items-start gap-2 py-0.5 transition-all text-xs sm:text-sm font-medium text-gray-500 hover:text-gray-900 leading-tight cursor-pointer \\\${heading.tagName === 'H3' ? 'ml-4 opacity-80' : ''}\\\`;
                    
                    const bullet = document.createElement('span');
                    bullet.className = 'w-1.5 h-1.5 mt-1.5 rounded-full bg-gray-200 shrink-0 transition-colors duration-300 group-hover:bg-gray-400 toc-bullet';
                    
                    const text = document.createElement('span');
                    text.textContent = heading.textContent;
                    text.className = 'transition-colors duration-200';

                    link.appendChild(bullet);
                    link.appendChild(text);

                    link.onclick = (e) => {
                        e.preventDefault();
                        heading.scrollIntoView({ behavior: 'smooth', block: 'start' });
                        updateActiveToc(heading.id);
                    };

                    tocContainer.appendChild(link);
                });

                function updateActiveToc(activeId) {
                    document.querySelectorAll('#toc a').forEach(link => {
                        const bullet = link.querySelector('.toc-bullet');
                        const text = link.querySelector('span:last-child');
                        
                        // Reset
                        link.classList.remove('text-gray-900');
                        link.classList.add('text-gray-500');
                        bullet.classList.remove('bg-[#22c55e]', 'ring-2', 'ring-green-100');
                        bullet.classList.add('bg-gray-200');
                        text.classList.remove('font-bold');

                        // Activate
                        if (link.dataset.target === activeId) {
                            link.classList.remove('text-gray-500');
                            link.classList.add('text-gray-900');
                            bullet.classList.remove('bg-gray-200', 'group-hover:bg-gray-400');
                            bullet.classList.add('bg-[#22c55e]', 'ring-2', 'ring-green-100');
                            text.classList.add('font-bold');
                        }
                    });
                }

                // Intersection Observer for Active State
                const observer = new IntersectionObserver((entries) => {
                    entries.forEach(entry => {
                        if (entry.isIntersecting) {
                            updateActiveToc(entry.target.id);
                        }
                    });
                }, { rootMargin: '-100px 0px -60% 0px', threshold: 0.1 });

                headings.forEach(h => observer.observe(h));
            }
        }
    </script>
  </body>
</html>
\`);
export async function getStaticPaths() {
  const allSlugs = await getAllPostSlugs();
  return allSlugs.map((node) => ({ params: { slug: node.slug } }));
}

const { slug } = Astro.params;
const post = await getPostBySlug(slug);
if (!post) return Astro.redirect('/404');

const relatedPosts = await getPostsByCategory('Featured', 8);
const formattedDate = new Date(post.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' });
const category = post.categories?.nodes[0]?.name || 'News';
const authorName = post.author?.node?.name || 'Editor';
const authorAvatar = post.author?.node?.avatar?.url;
const featuredImgUrl = post.featuredImage?.node?.sourceUrl;
const postUrl = typeof window !== 'undefined' ? window.location.href : \`https://thetimesclock.com/post/\${slug}\`;
---

<html lang="en">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width" />
    <title>{post.title} - The Times Clock</title>
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&family=Playfair+Display:ital,wght@0,400;0,700;0,900;1,400&display=swap" rel="stylesheet">
    <style>
      html { scroll-behavior: smooth; }
      .no-scrollbar::-webkit-scrollbar { display: none; }
      .no-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
      .toc-active { color: #22c55e !important; border-left-color: #22c55e !important; }
    </style>
  </head>
  <body class="bg-white font-['Inter',sans-serif] antialiased text-gray-900">
    <Navbar />
    
    <main class="max-w-[1500px] mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12">
      
      <!-- HERO SECTION -->
      <header class="max-w-[90%] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 mb-20 items-center">
         <div class="lg:col-span-7 order-2 lg:order-1">
            {featuredImgUrl ? (
                <div class="aspect-[16/10] w-full relative rounded-2xl overflow-hidden shadow-sm">
                    <img src={featuredImgUrl} alt={post.title} class="absolute inset-0 w-full h-full object-cover" />
                </div>
            ) : (
                <div class="aspect-[16/10] w-full bg-gray-100 rounded-2xl flex items-center justify-center text-gray-300">
                    No Image
                </div>
            )}
         </div>

         <div class="lg:col-span-5 order-1 lg:order-2 flex flex-col justify-center">
             <div class="flex items-center gap-3 mb-6">
                <span class="px-3 py-1 bg-black text-white text-[10px] font-bold uppercase tracking-widest rounded-sm">{category}</span>
                <span class="text-gray-500 text-xs font-medium uppercase tracking-wider">{formattedDate}</span>
             </div>

             <h1 class="text-3xl md:text-5xl font-black leading-[1.1] mb-8 font-['Inter'] tracking-tight text-gray-900">
                {post.title}
             </h1>

             <div class="flex items-start gap-4 pt-2 border-t border-gray-100 mt-2">
                {authorAvatar && <img src={authorAvatar} alt={authorName} class="w-12 h-12 rounded-full border border-gray-100 mt-1" />}
                <div>
                    <p class="text-xs text-gray-400 font-bold uppercase tracking-wider mb-0.5">Written By</p>
                    <p class="font-bold text-gray-900 text-sm mb-2">{authorName}</p>
                    <div class="flex gap-3 text-gray-400">
                        <a href="#" class="hover:text-black transition-colors"><Twitter className="w-4 h-4 fill-current" /></a>
                        <a href="#" class="hover:text-[#0077b5] transition-colors"><Linkedin className="w-4 h-4 fill-current" /></a>
                    </div>
                </div>
             </div>
         </div>
      </header>


      <!-- MAIN CONTENT -->
      <div class="grid grid-cols-1 lg:grid-cols-12 gap-12 relative max-w-[95%] mx-auto">
        
        <!-- LEFT SIDEBAR: TOC & Desktop Share -->
        <aside class="hidden lg:block lg:col-span-2">
            <div class="sticky top-32 flex flex-col gap-10">
                <div class="flex flex-col gap-3">
                    <p class="text-xs font-bold text-gray-400 uppercase tracking-wider mb-2">Share</p>
                    <div class="flex flex-wrap gap-2">
                         <button onclick="share('twitter')" class="w-8 h-8 rounded-full bg-gray-50 flex items-center justify-center text-gray-600 hover:bg-black hover:text-white transition-colors cursor-pointer border border-gray-100"><Twitter className="w-4 h-4" /></button>
                         <button onclick="share('facebook')" class="w-8 h-8 rounded-full bg-gray-50 flex items-center justify-center text-gray-600 hover:bg-[#1877F2] hover:text-white transition-colors cursor-pointer border border-gray-100"><Facebook className="w-4 h-4" /></button>
                         <button onclick="share('linkedin')" class="w-8 h-8 rounded-full bg-gray-50 flex items-center justify-center text-gray-600 hover:bg-[#0077b5] hover:text-white transition-colors cursor-pointer border border-gray-100"><Linkedin className="w-4 h-4" /></button>
                         <button onclick="share('whatsapp')" class="w-8 h-8 rounded-full bg-gray-50 flex items-center justify-center text-gray-600 hover:bg-[#25D366] hover:text-white transition-colors cursor-pointer border border-gray-100"><Phone className="w-4 h-4" /></button>
                         <button onclick="copyLink()" class="w-8 h-8 rounded-full bg-gray-50 flex items-center justify-center text-gray-600 hover:bg-gray-800 hover:text-white transition-colors cursor-pointer border border-gray-100"><Copy className="w-4 h-4" /></button>
                    </div>
                </div>

                <div>
                     <p class="text-xs font-bold text-gray-900 uppercase tracking-wider mb-4 border-b border-gray-100 pb-2">Table of Contents</p>
                     <nav id="toc" class="text-sm text-gray-500 flex flex-col gap-3 font-medium border-l border-gray-100 pl-4"></nav>
                </div>
            </div>
        </aside>

        <!-- CENTER CONTENT -->
        <article class="lg:col-span-7 article-content">
          <div class="prose prose-lg max-w-none 
            prose-headings:font-black prose-headings:tracking-tight prose-headings:text-gray-900 prose-headings:mt-12 prose-headings:mb-6 prose-headings:scroll-mt-32
            prose-p:text-gray-600 prose-p:leading-[1.8] prose-p:font-medium
            prose-a:text-green-600 prose-a:no-underline prose-a:font-bold hover:prose-a:underline
            prose-img:rounded-2xl prose-img:shadow-lg prose-img:my-10
            first-letter:text-6xl first-letter:font-black first-letter:text-black first-letter:mr-3 first-letter:float-left first-letter:leading-[0.8]">
            <div set:html={post.content} id="post-content-body" />
          </div>

          <div class="mt-16 pt-8 border-t border-gray-100">
              <p class="text-center text-xs font-bold text-gray-400 uppercase tracking-wider mb-6">Share this article</p>
              <div class="flex justify-center gap-4">
                    <button onclick="share('twitter')" class="p-3 rounded-full bg-gray-50 text-gray-600 hover:bg-black hover:text-white transition-colors"><Twitter className="w-5 h-5" /></button>
                    <button onclick="share('facebook')" class="p-3 rounded-full bg-gray-50 text-gray-600 hover:bg-[#1877F2] hover:text-white transition-colors"><Facebook className="w-5 h-5" /></button>
                    <button onclick="share('linkedin')" class="p-3 rounded-full bg-gray-50 text-gray-600 hover:bg-[#0077b5] hover:text-white transition-colors"><Linkedin className="w-5 h-5" /></button>
                    <button onclick="share('whatsapp')" class="p-3 rounded-full bg-gray-50 text-gray-600 hover:bg-[#25D366] hover:text-white transition-colors"><Phone className="w-5 h-5" /></button>
                    <button onclick="copyLink()" class="p-3 rounded-full bg-gray-50 text-gray-600 hover:bg-gray-800 hover:text-white transition-colors"><Copy className="w-5 h-5" /></button>
              </div>
          </div>
        </article>

        <!-- RIGHT SIDEBAR -->
        <aside class="lg:col-span-3 space-y-8">
            <div class="bg-gray-50 p-6 rounded-2xl border border-gray-100/50 sticky top-32">
                <span class="text-xs font-black text-gray-900 uppercase tracking-widest block mb-4 border-b border-gray-200 pb-2">Brand Story</span>
                <h3 class="text-xl font-black leading-tight mb-4 tracking-tight">Start your own success story today.</h3>
                <p class="text-gray-500 mb-6 text-sm leading-relaxed">Join our community of 50,000+ founders and get daily insights.</p>
                <button class="w-full bg-[#22c55e] hover:bg-green-600 transition-colors text-white font-black py-3.5 rounded-xl uppercase text-xs tracking-widest shadow-lg shadow-green-500/20">
                    Join the Community
                </button>
            </div>
        </aside>
      </div>

      <!-- CONTINUE READING SLIDER -->
      <section class="mt-32 pt-12 border-t border-gray-100">
        <div class="flex items-center justify-between mb-8 px-4">
             <h2 class="text-2xl font-black text-gray-900 uppercase tracking-tighter">Continue Reading</h2>
             <div class="flex gap-2">
                <button id="slide-left" class="p-2 rounded-full border border-gray-200 hover:bg-gray-100 transition-colors"><ChevronLeft className="w-5 h-5"/></button>
                <button id="slide-right" class="p-2 rounded-full border border-gray-200 hover:bg-gray-100 transition-colors"><ChevronRight className="w-5 h-5"/></button>
             </div>
        </div>
        
        <div id="slider-container" class="flex gap-6 overflow-x-auto snap-x snap-mandatory pb-12 px-4 scroll-smooth no-scrollbar">
            {relatedPosts.map(post => (
                <div class="min-w-[280px] w-[280px] md:min-w-[320px] snap-start">
                    <a href={\`/post/\${post.slug}\`} class="block group h-full">
                        <article class="flex flex-col h-full">
                            <div class="aspect-[16/10] w-full rounded-2xl overflow-hidden mb-4 shadow-sm border border-gray-100 relative">
                                <img src={post.featuredImage?.node?.sourceUrl || '/logo.png'} alt={post.title} class="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500" />
                            </div>
                            <div class="flex-1 flex flex-col">
                                <div class="flex items-center gap-2 mb-2">
                                     <span class="text-[10px] font-bold uppercase tracking-widest text-[#22c55e] bg-green-50 px-2 py-0.5 rounded-sm">Featured</span>
                                     <span class="text-[10px] uppercase tracking-wider text-gray-400">{new Date(post.date).toLocaleDateString()}</span>
                                </div>
                                <h3 class="text-lg font-bold text-gray-900 leading-tight group-hover:text-blue-600 transition-colors mb-3 line-clamp-2">{post.title}</h3>
                                <p class="text-sm font-semibold text-gray-400 mt-auto flex items-center gap-1 group-hover:translate-x-1 transition-transform">Read Article <ChevronRight className="w-3 h-3"/></p>
                            </div>
                        </article>
                    </a>
                </div>
            ))}
        </div>
      </section>

    </main>

    <div class="lg:hidden fixed bottom-0 left-0 w-full bg-white border-t border-gray-100 p-2 z-50 flex justify-around items-center shadow-[0_-5px_20px_rgba(0,0,0,0.05)] safe-area-bottom">
        <span class="text-[10px] font-bold uppercase text-gray-400 hidden xs:block">Share</span>
        <button onclick="share('twitter')" class="p-3 text-gray-600 hover:text-black"><Twitter className="w-5 h-5" /></button>
        <button onclick="share('facebook')" class="p-3 text-gray-600 hover:text-[#1877F2]"><Facebook className="w-5 h-5" /></button>
        <button onclick="share('linkedin')" class="p-3 text-gray-600 hover:text-[#0077b5]"><Linkedin className="w-5 h-5" /></button>
        <button onclick="share('whatsapp')" class="p-3 text-gray-600 hover:text-[#25D366]"><Phone className="w-5 h-5" /></button>
        <button onclick="copyLink()" class="p-3 text-gray-600 hover:text-gray-900"><Copy className="w-5 h-5" /></button>
    </div>
    <div class="lg:hidden h-20"></div>

    <Footer />

    <script define:vars={{ title: post.title }}>
        window.share = (platform) => {
            const url = window.location.href;
            const text = title;
            let shareUrl = '';
            switch(platform) {
                case 'twitter': shareUrl = \`https://twitter.com/intent/tweet?text=\${encodeURIComponent(text)}&url=\${encodeURIComponent(url)}\`; break;
                case 'facebook': shareUrl = \`https://www.facebook.com/sharer/sharer.php?u=\${encodeURIComponent(url)}\`; break;
                case 'linkedin': shareUrl = \`https://www.linkedin.com/sharing/share-offsite/?url=\${encodeURIComponent(url)}\`; break;
                case 'whatsapp': shareUrl = \`https://wa.me/?text=\${encodeURIComponent(text + ' ' + url)}\`; break;
            }
            if(shareUrl) window.open(shareUrl, '_blank', 'width=600,height=400');
        };

        window.copyLink = () => {
            navigator.clipboard.writeText(window.location.href);
            alert('Link copied to clipboard!');
        };

        const container = document.getElementById('slider-container');
        document.getElementById('slide-right')?.addEventListener('click', () => container.scrollBy({ left: 320, behavior: 'smooth' }));
        document.getElementById('slide-left')?.addEventListener('click', () => container.scrollBy({ left: -320, behavior: 'smooth' }));

        const contentBody = document.getElementById('post-content-body');
        const tocContainer = document.getElementById('toc');

        if (contentBody && tocContainer) {
            const headings = Array.from(contentBody.querySelectorAll('h1, h2, h3'));
            if (headings.length === 0) {
                tocContainer.innerHTML = '<p class="text-xs italic text-gray-400">No headings found.</p>';
            } else {
                headings.forEach((heading, index) => {
                    if (!heading.id) heading.id = \`idx-\${index}\`;
                    const link = document.createElement('a');
                    link.href = \`#\${heading.id}\`;
                    link.dataset.target = heading.id;
                    link.textContent = heading.textContent;
                    link.className = \`block transition-all duration-200 border-l-2 border-transparent pl-3 py-1 hover:text-[#22c55e] hover:border-[#22c55e] line-clamp-1 \${heading.tagName === 'H3' ? 'ml-3 text-xs opacity-80' : 'text-xs'}\`;
                    link.onclick = (e) => {
                        e.preventDefault();
                        heading.scrollIntoView({ behavior: 'smooth', block: 'start' });
                        document.querySelectorAll('#toc a').forEach(a => a.classList.remove('toc-active'));
                        link.classList.add('toc-active');
                    };
                    tocContainer.appendChild(link);
                });

                const observer = new IntersectionObserver((entries) => {
                    entries.forEach(entry => {
                        if (entry.isIntersecting) {
                            const id = entry.target.id;
                            const activeLink = tocContainer.querySelector(\`a[data-target="\${id}"]\`);
                            if (activeLink) {
                                document.querySelectorAll('#toc a').forEach(a => a.classList.remove('toc-active'));
                                activeLink.classList.add('toc-active');
                            }
                        }
                    });
                }, { rootMargin: '-100px 0px -60% 0px', threshold: 0.1 });
                headings.forEach(h => observer.observe(h));
            }
        }
    </script>
  </body>
</html>
\`);