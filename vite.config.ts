import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import sitemap from 'vite-plugin-sitemap';
import recipes from './src/data/recipes.json'; // Make sure you have created this file

// --- Step 1: Define ALL your page types ---

// List all your main static pages
const staticRoutes = [
  '/',
  '/how-it-works',
  '/generate',
  '/inspiration',
  '/about',
  '/terms',
  '/privacy',
  '/contact',
  '/category', // The main category listing page
];

// List all your category slugs to generate their pages
const categorySlugs = [
  'air-fryer',
  'quick-easy',
  'comfort-food',
  'street-food-inspired',
  'healthy-bowls',
  'plant-forward',
  'one-pot-wonders',
  'global-fusion',
  'desserts-baking',
];

// Automatically generate the full paths for your category pages
const categoryRoutes = categorySlugs.map(slug => `/category/${slug}`);

// Automatically generate the full paths for your recipe pages from the JSON file
const recipeRoutes = recipes.map(recipe => `/inspiration/${recipe.category}/${recipe.slug}`);


// --- Step 2: Combine all routes into one master list ---
const allRoutes = [
  ...staticRoutes,
  ...categoryRoutes,
  ...recipeRoutes,
];


// --- Step 3: Configure Vite ---
export default defineConfig({
  plugins: [
    react(),
    sitemap({
      hostname: 'https://aicreative.website',
      // Pass the complete list of all pages to the plugin
      dynamicRoutes: allRoutes,
    }),
  ],
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
});