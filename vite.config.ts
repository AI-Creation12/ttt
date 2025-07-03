import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import sitemap from 'vite-plugin-sitemap';
import recipes from './src/data/recipes.json';

const staticRoutes = [
  '/',
  '/how-it-works',
  '/generate',
  '/inspiration',
  '/about',
  '/terms',
  '/privacy',
  '/contact',
  '/category',
];

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

const categoryRoutes = categorySlugs.map(slug => `/category/${slug}`);
const recipeRoutes = recipes.map(recipe => `/inspiration/${recipe.category}/${recipe.slug}`);

const allRoutes = [
  ...staticRoutes,
  ...categoryRoutes,
  ...recipeRoutes,
];

export default defineConfig(({ command, mode }) => {
  // Sprawdź czy to build SSR na podstawie argumentów CLI
  const isSSRBuild = process.argv.includes('--ssr');
  
  console.log('isSSRBuild:', isSSRBuild); // Debug log
  console.log('command:', command); // Debug log
  
  return {
    plugins: [
      react(),
      // Sitemap tylko dla buildu klienta
      !isSSRBuild && sitemap({
        hostname: 'https://aicreative.website',
        dynamicRoutes: allRoutes,
      }),
    ].filter(Boolean),
    
    build: {
      outDir: isSSRBuild ? 'dist/server' : 'dist/client',
      rollupOptions: {
        input: isSSRBuild ? 'src/entry-server.tsx' : 'src/entry-client.tsx',
      },
      ssr: isSSRBuild,
      emptyOutDir: false, // Nie kasuj folderów między buildami
    },
    
    ssr: {
      noExternal: [
        'react-cookie-manager',
        'react-ga4',
        'react-router',
        'react-router-dom',
      ],
    },
  };
});
