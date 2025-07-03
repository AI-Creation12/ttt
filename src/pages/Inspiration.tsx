import React from 'react';
import { Layout } from '../components/Layout';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import logoAi from '../constants/images/logo-ai.png';
import airFryer from '../constants/images/air-fryer.webp';
import quickEasy from '../constants/images/quick-easy.webp';
import comfortFood from '../constants/images/comfort-food.webp';
import streetFoodInspired from '../constants/images/street-food-inspired.webp';
import healthyBowls from '../constants/images/healthy-bowls.webp';
import plantForward from '../constants/images/plant-forward.webp';
import onePotWonders from '../constants/images/one-pot-wonders.webp';
import globalFusion from '../constants/images/global-fusion.webp';
import dessertsBaking from '../constants/images/desserts-baking.webp';




export const Inspiration = () => {
  const categories = [
    {
      title: 'Air Fryer',
      description: 'Crispy meals with less oil, fast',
      image: airFryer,
      href: '/category/air-fryer'
    },
    {
      title: 'Quick & Easy',
      description: '30-minute meals for busy weeknights',
      image: quickEasy,
      href: '/category/quick-easy'
    },
    {
      title: 'Comfort Food',
      description: 'Classic favorites with a twist',
      image: comfortFood,
      href: '/category/comfort-food'
    },
    {
      title: 'Street Food Inspired',
      description: 'Gourmet spins on street favorites',
      image: streetFoodInspired,
      href: '/category/street-food-inspired'
    },
    {
      title: 'Healthy Bowls',
      description: 'Nutritious bowls, all-in-one',
      image: healthyBowls,
      href: '/category/healthy-bowls'
    },
    {
      title: 'Plant-Forward',
      description: 'Veggies take center stage here',
      image: plantForward,
      href: '/category/plant-forward'
    },
    {
      title: 'One-Pot Wonders',
      description: 'Easy meals, one pot, less mess',
      image: onePotWonders,
      href: '/category/one-pot-wonders'
    },
    {
      title: 'Global Fusion',
      description: 'Bold flavors from many cultures',
      image: globalFusion,
      href: '/category/global-fusion'
    },
    {
      title: 'Desserts & Baking',
      description: 'Sweet treats for every craving',
      image: dessertsBaking,
      href: '/category/desserts-baking'
    }
  ];
  const SITE_URL = import.meta.env.VITE_FRONT_URL

  return (
    <>
      <Helmet>
            <title>Global Recipe Ideas: Comfort Food to Fusion Dishes</title>
            <meta name="description" content="Explore trending recipe categories: street food, healthy bowls, desserts, and more. Get inspired to cook today!" />
            <meta property="og:title" content="Global Recipe Ideas: Comfort Food to Fusion Dishes" />
            <meta property="og:description" content="Explore trending recipe categories: street food, healthy bowls, desserts, and more. Get inspired to cook today!" />
            <meta property="og:image" content={logoAi} />
            <meta property="og:url" content={SITE_URL} />
            <meta name="robots" content="index, follow" />
      </Helmet>
      <Layout
        title="Recipe Inspiration - AI Creative"
        description="Discover delicious recipe ideas and get inspired to cook something new with AI Creative's recipe categories."
      >
        <div className="container mx-auto px-4 py-16">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h1 className="text-4xl font-bold mb-6 text-cyan-400 cyber-glow">Recipe Inspiration</h1>
            <p className="text-lg text-cyan-300">
              Discover new recipes and get inspired to create something delicious
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {categories.map((category, index) => (
              <Link
                key={index}
                to={category.href}
                className="group relative isolate flex flex-col justify-end overflow-hidden rounded-2xl bg-gray-900 px-8 pb-8 pt-80 transition-transform hover:scale-105"
              >
                <img
                  src={category.image}
                  alt={category.title}
                  className="absolute inset-0 -z-10 h-full w-full object-cover transition-transform group-hover:scale-110"
                />
                <div className="absolute inset-0 -z-10 bg-gradient-to-t from-gray-900 via-gray-900/40" />
                <div className="absolute inset-0 -z-10 rounded-2xl ring-1 ring-inset ring-gray-900/10" />
                <h3 className="mt-3 text-2xl font-semibold leading-6 text-cyan-400 cyber-glow">
                  {category.title}
                </h3>
                <p className="mt-3 text-sm leading-6 text-cyan-300">{category.description}</p>
              </Link>
            ))}
          </div>

          <div className="mt-16 grid gap-8 md:grid-cols-2">
            {/* Google AdSense Placeholder */}
            <div className="bg-gray-900/90 p-4 rounded-lg border border-cyan-500/20 h-[300px] flex items-center justify-center text-cyan-300">
              Ad Space
            </div>

            <div className="bg-gray-900/90 p-8 rounded-lg border border-cyan-500/20">
              <h2 className="text-2xl font-bold mb-6 text-cyan-400">Get More Ideas</h2>
              <p className="text-cyan-300 mb-4">
                Looking for more recipe inspiration? Upload a photo of your ingredients and let our AI suggest personalized recipes just for you.
              </p>
              <Link
                to="/generate"
                className="inline-block bg-cyan-600 text-white px-6 py-3 rounded-md hover:bg-cyan-500 transition-colors cyber-glow"
              >
                Generate Recipe
              </Link>
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
};