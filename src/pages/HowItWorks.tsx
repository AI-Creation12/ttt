import React from 'react';
import { Layout } from '../components/Layout';
import { Camera, Settings, ChefHat, Sparkles  } from 'lucide-react';
import { Helmet } from 'react-helmet-async';
import logoAi from '../constants/images/logo-ai.png';

export const HowItWorks = () => {
  const steps = [
    {
      icon: <Camera className="w-8 h-8" />,
      title: 'Step 1: Snap a Photo',
      description: 'Use your phone or webcam to take a clear picture of the ingredients you have. Don\'t worry about making it perfect, just get everything in the frame!',
    },
    {
      icon: <Settings className="w-8 h-8" />,
      title: 'Step 2: Set Your Preferences',
      description: 'This is where you guide the AI. Tell it if you want something vegan, gluten-free, or a specific cuisine like "Mexican." The more details you give, the better the result.',
    },
    {
      icon: <ChefHat className="w-8 h-8" />,
      title: 'Step 3: Let the AI Work Its Magic',
      description: 'Hit "Generate"! My AI uses advanced image recognition to identify your ingredients and then builds a unique recipe customized just for you. Please be patient, as this creative process can take 2-3 minutes.',
    },
    {
      icon: <Sparkles className="w-8 h-8" />,
      title: 'Step 4: Get Cooking!',
      description: 'You\'ll get a complete recipe with step-by-step instructions. Time to have fun and create something delicious!',
    },
  ];
  const SITE_URL = import.meta.env.VITE_FRONT_URL
  

  return (
    <>
      <Helmet>
          <title>How AI Creative Works: From Photo to Feast</title>
          <meta name="description" content="I designed this tool to feel like magic. See how to snap a photo of your ingredients and let my AI create a custom recipe just for you." />
          <meta property="og:title" content="How AI Creative Works: From Photo to Feast" />
          <meta property="og:description" content="See how to snap a photo of your ingredients and let my AI create a custom recipe." />
          <meta property="og:image" content={logoAi} />
          <meta property="og:url" content={SITE_URL} />
          <meta name="robots" content="index, follow" />
      </Helmet>
      <Layout
        title="How It Works - AI Creative"
        description="Learn how to use AI Creative to transform a photo of your ingredients into a delicious recipe."
      >
        <div className="container mx-auto px-4 py-16">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h1 className="text-4xl font-bold mb-6 text-cyan-400 cyber-glow">From Photo to Feast</h1>
            <p className="text-lg text-cyan-300">
              I designed this tool to feel like magic. Here’s how simple it is.
            </p>
          </div>

          <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
            {steps.map((step, index) => (
              <div
                key={index}
                className="relative flex flex-col items-center text-center bg-gray-900/90 p-6 rounded-lg border border-cyan-500/20 cyber-border"
              >
                <div className="mb-4 p-4 bg-cyan-600 rounded-full">
                  {step.icon}
                </div>
                <h3 className="text-xl font-semibold mb-3 text-cyan-400">{step.title}</h3>
                <p className="text-cyan-300">{step.description}</p>
              </div>
            ))}
          </div>

          {/* AdSense between sections */}
          <div className="my-16 bg-gray-900/90 p-4 rounded-lg border border-cyan-500/20 h-[250px] flex items-center justify-center text-cyan-300">
            Ad Space
          </div>

          <div className="mt-24 max-w-3xl mx-auto bg-gray-900/90 p-8 rounded-lg border border-cyan-500/20 cyber-border">
            <h2 className="text-2xl font-bold mb-6 text-cyan-400 text-center">My Tips for a Perfect Recipie</h2>
            <ul className="space-y-4 text-cyan-300">
              <li className="flex items-start">
                <span className="text-cyan-400 mr-3">•</span>
                <span><strong>Good Lighting is Key:</strong> A well-lit photo helps my AI see everything clearly. Natural daylight works best!</span>
              </li>
              <li className="flex items-start">
                <span className="text-cyan-400 mr-3">•</span>
                <span><strong>Spread Ingredients Out:</strong> Try to arrange your ingredients so they aren't overlapping. It’s easier for the AI to identify an apple and an onion if they aren't piled on top of each other.</span>
              </li>
              <li className="flex items-start">
                <span className="text-cyan-400 mr-3">•</span>
                <span><strong>Clear Background:</strong> A simple, uncluttered background helps the AI focus on just the food.</span>
              </li>
              <li className="flex items-start">
                <span className="text-cyan-400 mr-3">•</span>
                <span><strong>Verify the Ingredients:</strong> After the AI analyzes your photo, it will show you a list of what it found. Take a second to double-check this list and correct any mistakes before generating the recipe. This is the secret to a perfect result!</span>
              </li>
            </ul>
          </div>

          {/* AdSense between sections */}
          <div className="mt-16 bg-gray-900/90 p-4 rounded-lg border border-cyan-500/20 h-[250px] flex items-center justify-center text-cyan-300">
            Ad Space
          </div>
        </div>
      </Layout>
    </>
  );
};