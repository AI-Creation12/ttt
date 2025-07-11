import React from 'react';
import { Layout } from '../components/Layout';
import { Shield } from 'lucide-react';
import { Helmet } from 'react-helmet-async';
import logoAi from '../constants/images/logo-ai.png';

export const Terms = () => {
  const SITE_URL = import.meta.env.VITE_FRONT_URL;

  return (
    <>
      <Helmet>
            <title>Terms of Use - AI Creative</title>
            <meta name="description" content="Simple and fair terms for using the AI Creative recipe generator. Learn about responsible use and important disclaimers." />
            <meta property="og:title" content="Terms of Use - AI Creative" />
            <meta property="og:description" content="Simple and fair terms for using the AI Creative recipe generator." />
            <meta property="og:image" content={logoAi} />
            <meta property="og:url" content={`${SITE_URL}/terms`} />
            <meta name="robots" content="index, follow" />
      </Helmet>
      <Layout
        title="Terms of Use - AI Creative"
        description="Read the terms of use and service agreement for AICreative.website."
      >
        <div className="container mx-auto px-4 py-16">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-16">
              <Shield className="w-16 h-16 text-cyan-400 mx-auto mb-6" />
              <h1 className="text-4xl font-bold mb-6 text-cyan-400 cyber-glow">Terms of Use</h1>
              <p className="text-lg text-cyan-300">
                Last updated: {new Date().toLocaleDateString()}
              </p>
            </div>

            <div className="space-y-8 text-cyan-300">
              <div className="bg-gray-900/90 p-8 rounded-lg border border-cyan-500/20 cyber-border">
                <p className="text-lg">
                  Welcome to AI Creative! These are the rules for using my website. I've tried to keep them simple and fair. By using this site, you're agreeing to these terms.
                </p>
              </div>

              <div className="bg-gray-900/90 p-8 rounded-lg border border-cyan-500/20 cyber-border">
                <h2 className="text-2xl font-bold mb-4 text-cyan-400">1. How You Can Use This Site</h2>
                <p className="mb-4">
                  I grant you permission to use this website for its intended purpose: generating recipes for your own personal, non-commercial use.
                </p>
                <p>
                  To keep this tool free and available for everyone, please agree not to:
                </p>
                <ul className="list-disc list-inside mt-4 space-y-2">
                  <li>Use this site for any commercial purpose.</li>
                  <li>Attempt to copy, decompile, or reverse engineer the software.</li>
                  <li>Misuse the service in a way that could harm it or prevent others from using it (e.g., by sending automated queries).</li>
                </ul>
              </div>

              <div className="bg-gray-900/90 p-8 rounded-lg border border-cyan-500/20 cyber-border">
                <h2 className="text-2xl font-bold mb-4 text-cyan-400">2. Important Disclaimer (Please Read)</h2>
                <p className="mb-4">
                  The recipes and information provided by the AI are for informational and inspirational purposes only. They are generated by an algorithm and have not been tested by a human chef.
                </p>
                <p className="font-bold text-cyan-400">
                  You are fully responsible for your own actions in the kitchen.
                </p>
                <p className="mt-4">
                  This includes, but is not limited to, ensuring food safety, checking ingredients for allergens, and verifying that food is cooked to a safe temperature. I am not liable for any culinary mishaps, allergic reactions, or other damages that may result from using a recipe from this website.
                </p>
              </div>

              <div className="bg-gray-900/90 p-8 rounded-lg border border-cyan-500/20 cyber-border">
                <h2 className="text-2xl font-bold mb-4 text-cyan-400">3. Limitation of Liability</h2>
                <p className="mb-4">
                  I've built this website to the best of my ability, but it is provided "as is." I cannot guarantee that it will always be available, error-free, or perfect.
                </p>
                <p>
                  In no event will I be liable for any damages (including loss of data or profit) arising out of the use or inability to use this website.
                </p>
              </div>

              <div className="bg-gray-900/90 p-8 rounded-lg border border-cyan-500/20 cyber-border">
                <h2 className="text-2xl font-bold mb-4 text-cyan-400">4. Changes to These Terms</h2>
                <p>
                  I may update these terms from time to time. If I do, I will update the "last updated" date at the top of this page. Your continued use of the site after changes are posted means you agree to the new terms.
                </p>
              </div>

              <div className="bg-gray-900/90 p-8 rounded-lg border border-cyan-500/20 cyber-border">
                <h2 className="text-2xl font-bold mb-4 text-cyan-400">5. Questions?</h2>
                <p>
                  If you have any questions about these terms, please feel free to contact me at <a href='mailto:ai.support.creation@gmail.com' className="text-cyan-400 hover:underline">ai.support.creation@gmail.com</a>.
                </p>
              </div>
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
};