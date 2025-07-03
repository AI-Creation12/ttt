import React from 'react';
import { Link } from 'react-router-dom';
import { Layout } from '../components/Layout';
import { ChevronRight, Camera, Utensils, Clock } from 'lucide-react';
import { Helmet } from 'react-helmet-async';
import logoAi from '../constants/images/logo-ai.png';
import comfortFood from '../constants/images/comfort-food.webp';
import dessertsBaking from '../constants/images/desserts-baking.webp';
import quickEasy from '../constants/images/quick-easy.webp';

export const Home = () => {
  const SITE_URL = import.meta.env.VITE_FRONT_URL
  return (
  <>
   <Helmet>
        <title>AI Recipe Generator</title>
        <meta name="description" content="Create Custom Meals from Your Ingredients" />
        <meta property="og:title" content="AI Recipe Generator" />
        <meta property="og:description" content="Create Custom Meals from Your Ingredients" />
        <meta property="og:image" content={logoAi} />
        <meta property="og:url" content={SITE_URL} />
        <meta name="robots" content="index, follow" />
    </Helmet>
    <Layout>
      <div className="relative isolate">
        <div className="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h1 className="text-4xl font-bold tracking-tight text-cyan-400 sm:text-6xl cyber-glow">
              Generate Recipes for Free by Uploading Your Ingredient Photos Powered by AI!
            </h1>
            <p className="mt-6 text-lg leading-8 text-cyan-300">
              Upload a photo of your ingredients and let our AI-powered kitchen assistant create personalized recipes just for you.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <Link
                to="/generate"
                className="rounded-md bg-cyan-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-cyan-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan-600 transition-all duration-200 cyber-glow"
              >
                Get Started
              </Link>
              <Link
                to="/how-it-works"
                className="text-sm font-semibold leading-6 text-cyan-400 flex items-center gap-1 hover:text-cyan-300 transition-colors"
              >
                Learn more <ChevronRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-gray-900/90 py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-cyan-400 sm:text-4xl cyber-glow">
              How It Works
            </h2>
            <p className="mt-6 text-lg leading-8 text-cyan-300">
              Get personalized recipes in three simple steps
            </p>
          </div>
          <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
            <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3">
              <div className="flex flex-col items-center">
                <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-lg bg-cyan-600">
                  <Camera className="h-8 w-8 text-white" />
                </div>
                <dt className="text-xl font-semibold leading-7 text-cyan-400">Upload Photo</dt>
                <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-cyan-300 text-center">
                  <p className="flex-auto">Take a photo of your ingredients and upload it to our platform.</p>
                </dd>
              </div>
              <div className="flex flex-col items-center">
                <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-lg bg-cyan-600">
                  <Utensils className="h-8 w-8 text-white" />
                </div>
                <dt className="text-xl font-semibold leading-7 text-cyan-400">Set Preferences</dt>
                <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-cyan-300 text-center">
                  <p className="flex-auto">Choose your dietary preferences, meal type, and cuisine style.</p>
                </dd>
              </div>
              <div className="flex flex-col items-center">
                <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-lg bg-cyan-600">
                  <Clock className="h-8 w-8 text-white" />
                </div>
                <dt className="text-xl font-semibold leading-7 text-cyan-400">Get Recipe</dt>
                <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-cyan-300 text-center">
                  <p className="flex-auto">Receive a personalized recipe based on your ingredients and preferences.</p>
                </dd>
              </div>
            </dl>
          </div>
        </div>
      </div>  

      <div className="py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-cyan-400 sm:text-4xl cyber-glow">
              Popular Categories
            </h2>
            <p className="mt-6 text-lg leading-8 text-cyan-300">
              Explore our most popular recipe categories
            </p>
          </div>
          <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-12 sm:mt-20 lg:mx-0 lg:max-w-none lg:grid-cols-3">
            {[
              {
                title: 'Desserts & Baking',
                description: 'Sweet treats for every craving',
                image: dessertsBaking,
                href: '/category/desserts-baking'
              },
              {
                title: 'Comfort Food',
                description: 'Classic favorites with a twist',
                image: comfortFood,
                href: '/category/comfort-food'
              },
              {
                title: 'Quick & Easy',
                description: '30-minute meals for busy weeknights',
                image: quickEasy,
                href: '/category/quick-easy'
              },
            ].map((category) => (
              <Link
                key={category.title}
                to={category.href}
                className="group relative isolate flex flex-col justify-end overflow-hidden rounded-2xl bg-gray-900 px-8 pb-8 pt-80 transition-transform hover:scale-105"
              >
                <img
                  src={category.image}
                  alt={category.title}
                  className="absolute inset-0 -z-10 h-full w-full object-cover"
                />
                <div className="absolute inset-0 -z-10 bg-gradient-to-t from-gray-900 via-gray-900/40" />
                <h3 className="mt-3 text-2xl font-semibold leading-6 text-cyan-400 cyber-glow">
                  {category.title}
                </h3>
                <p className="mt-3 text-sm leading-6 text-cyan-300">{category.description}</p>
              </Link>
            ))}
          </div>
          
          {/* Bottom AdSense */}
          <div className="mt-16 bg-gray-900/90 p-4 rounded-lg border border-cyan-500/20 h-[250px] flex items-center justify-center text-cyan-300">
            Ad Space
          </div>
        </div>
      </div>
    </Layout>
  </>
  );
};