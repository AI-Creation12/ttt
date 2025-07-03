import React from 'react';
import { Layout } from '../components/Layout';
import { Code, Cpu, BrainCircuit, DollarSign  } from 'lucide-react';
import { Helmet } from 'react-helmet-async';
import logoAi from '../constants/images/logo-ai.png';


export const About = () => {
  const SITE_URL = import.meta.env.VITE_FRONT_URL
  const features = [
    {
      icon: <BrainCircuit className="w-8 h-8" />,
      title: 'AI-Powered Analysis',
      description: 'Our advanced AI system analyzes your ingredients and preferences to create personalized recipes.'
    },
    {
      icon: <Code className="w-8 h-8" />,
      title: 'Smart Recognition',
      description: 'Advanced image recognition technology identifies ingredients accurately.'
    },
    {
      icon: <Cpu className="w-8 h-8" />,
      title: 'Real-time Processing',
      description: 'Get recipe suggestions instantly with our powerful processing capabilities.'
    },
    {
      icon: <DollarSign className="w-8 h-8" />,
      title: 'Free to Use',
      description: 'Enjoy full access to our features at no cost no hidden fees, no subscriptions.'
    }
  ];

  return (
    <>
      <Helmet>
            <title>About Me - The Creator of AI Creative's Recipe Generator</title>
            <meta name="description" content="Learn the story behind AICreative.website. Meet the creator and discover the mission to solve everyday cooking problems with a personal, powerful AI tool." />
            <meta property="og:title" content="About Me - The Creator of AI Creative's Recipe Generator" />
            <meta property="og:description" content="Meet the creator of AICreative and learn the story behind the AI Recipe Generator." />
            <meta property="og:image" content={logoAi} />
            <meta property="og:url" content={SITE_URL} />
            <meta name="robots" content="index, follow" />
      </Helmet>
      <Layout
        title="About AI Creative - AI Recipie Generator"
        description="Learn about the story behind AICreative and its mission to revolutionize cooking."
      >
        <div className="container mx-auto px-4 py-16">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h1 className="text-4xl font-bold mb-6 text-cyan-400 cyber-glow">The Story Behind The Code</h1>
            <p className="text-lg text-cyan-300">
              It all started with a simple, everyday problem.
            </p>
          </div>

          <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4 mb-16">
            {features.map((feature, index) => (
              <div
                key={index}
                className="bg-gray-900/90 p-6 rounded-lg border border-cyan-500/20 text-center cyber-border"
              >
                <div className="mb-4 p-4 bg-cyan-600 rounded-full inline-block">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold mb-3 text-cyan-400">{feature.title}</h3>
                <p className="text-cyan-300">{feature.description}</p>
              </div>
            ))}
          </div>
          
          <div className="bg-gray-900/90 p-8 rounded-lg border border-cyan-500/20 cyber-border mb-16">
            <h2 className="text-3xl font-bold mb-6 text-cyan-400 text-center">Hi, I'm Jacob!</h2>
            <div className="text-lg text-cyan-300 space-y-4 max-w-3xl mx-auto">
              <p>
                As a tech enthusiast, I've always been fascinated by how technology can solve real-world challenges. My biggest daily challenge? Staring at a fridge full of random ingredients and having no idea what to make for dinner.
              </p>
              <p>
                I was tired of wasting food and endlessly searching for recipes that required a trip to the store. I thought to myself, "What if I could build a tool that was smart enough to look at what I already have and instantly give me creative, delicious ideas?"
              </p>
              <p>
                That idea became my obsession. I combined my passion for coding and AI with my love for good food, and after countless hours of work, **AI Creative was born.** This website isn't run by a big, faceless corporation; it's a personal project built by me to solve a problem I believe many of us share.
              </p>
            </div>
          </div>

          <div className="grid gap-8 md:grid-cols-2">
            <div className="bg-gray-900/90 p-8 rounded-lg border border-cyan-500/20 cyber-border">
              <h2 className="text-2xl font-bold mb-4 text-cyan-400">My Mission</h2>
              <p className="text-cyan-300 mb-4">
                My mission is simple: to make creative cooking accessible to everyone, regardless of their budget or schedule. I believe a powerful AI tool shouldn't be hidden behind a subscription or a paywall. 
              </p>
              <p className="text-cyan-300">
                That's why AI Creative is, and always will be, free to use. My goal is to empower you in the kitchen and help reduce food waste, one personalized recipe at a time.
              </p>
            </div>

            <div className="bg-gray-900/90 p-8 rounded-lg border border-cyan-500/20 cyber-border">
              <h2 className="text-2xl font-bold mb-4 text-cyan-400">The Technology</h2>
              <p className="text-cyan-300 mb-4">
                To bring this idea to life, I built a system using modern machine learning models. When you enter your photo of ingredients, the AI analyzes them against a vast database of culinary patterns, flavor pairings, and cooking techniques.
              </p>
              <p className="text-cyan-300">
                It's designed to be smart and intuitive, providing you with high-quality, personalized recipes in seconds. I'm constantly working to improve the models to make the suggestions even more creative and accurate.
              </p>
            </div>
          </div>

          {/* Bottom AdSense */}
          <div className="mt-16 bg-gray-900/90 p-4 rounded-lg border border-cyan-500/20 h-[250px] flex items-center justify-center text-cyan-300">
            Ad Space
          </div>
        </div>
      </Layout>
    </>
  );
};