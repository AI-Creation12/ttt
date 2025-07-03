import React from 'react';
import { Layout } from '../components/Layout';
import { Lock } from 'lucide-react';
import { Helmet } from 'react-helmet-async';
import logoAi from '../constants/images/logo-ai.png';

export const Privacy = () => {
  const SITE_URL = import.meta.env.VITE_FRONT_URL;

  return (
    <>
      <Helmet>
            <title>Privacy Policy - AI Creative</title>
            <meta name="description" content="Learn how I handle your data, use cookies, and respect your privacy at AICreative.website. Your trust is my top priority." />
            <meta property="og:title" content="Privacy Policy - AI Creative" />
            <meta property="og:description" content="Learn how I handle your data at AICreative.website." />
            <meta property="og:image" content={logoAi} />
            <meta property="og:url" content={`${SITE_URL}/privacy`} />
            <meta name="robots" content="index, follow" />
      </Helmet>
      <Layout
        title="Privacy Policy - AI Creative"
        description="Learn how AI Creative handles and protects your personal information."
      >
        <div className="container mx-auto px-4 py-16">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-16">
              <Lock className="w-16 h-16 text-cyan-400 mx-auto mb-6" />
              <h1 className="text-4xl font-bold mb-6 text-cyan-400 cyber-glow">Privacy Policy</h1>
              <p className="text-lg text-cyan-300">
                Last updated: {new Date().toLocaleDateString()}
              </p>
            </div>

            <div className="space-y-8 text-cyan-300">
              <div className="bg-gray-900/90 p-8 rounded-lg border border-cyan-500/20 cyber-border">
                <p className="text-lg">
                  Hello! I'm Jacob, the creator of AICreative.website. Your privacy is my top priority. This policy explains what information I collect, how I use it, and how I keep it safe. My goal is to be as transparent as possible.
                </p>
              </div>
              
              <div className="bg-gray-900/90 p-8 rounded-lg border border-cyan-500/20 cyber-border">
                <h2 className="text-2xl font-bold mb-4 text-cyan-400">1. Information I Collect</h2>
                <p className="mb-4">
                  To keep things simple and private, I collect very little information:
                </p>
                <ul className="list-disc list-inside space-y-2">
                  <li><strong>Information you provide:</strong> When you enter ingredients or select preferences in the recipe generator, that information is sent to the AI to create your recipe. I do not store or log this personal input long-term.</li>
                  <li><strong>Anonymous usage data:</strong> Like most websites, I use analytics tools (like Google Analytics) to understand how visitors use my site. This helps me see what's popular and how to improve the tool. This data is aggregated and anonymous, meaning I cannot use it to identify you personally.</li>
                </ul>
              </div>

              <div className="bg-gray-900/90 p-8 rounded-lg border border-cyan-500/20 cyber-border">
                <h2 className="text-2xl font-bold mb-4 text-cyan-400">2. How I Use Your Information</h2>
                <p className="mb-4">
                  I use the information collected solely to:
                </p>
                <ul className="list-disc list-inside space-y-2">
                  <li>Provide and operate the AI recipe generator.</li>
                  <li>Improve the website and the user experience.</li>
                  <li>Display advertising to support the cost of running this free service.</li>
                </ul>
              </div>

              {/* --- MERGED COOKIE POLICY SECTION --- */}
              <div className="bg-gray-900/90 p-8 rounded-lg border border-cyan-500/20 cyber-border">
                <h2 className="text-2xl font-bold mb-4 text-cyan-400">3. Cookie Policy</h2>
                <p className="mb-4">
                  My site uses "cookies"—small text files stored on your device. They help the site function and provide a better experience.
                </p>
                <h3 className="text-xl font-semibold mb-2 text-cyan-400">How I Use Cookies</h3>
                <ul className="list-disc list-inside space-y-2 mb-4">
                    <li><strong>Essential Cookies:</strong> These are necessary for the website to function correctly.</li>
                    <li><strong>Analytics Cookies:</strong> These help me understand how visitors use my site (e.g., Google Analytics). All data is anonymous.</li>
                    <li><strong>Advertising Cookies:</strong> To support this free service, I use cookies from partners like Google AdSense. These are explained in the next section.</li>
                </ul>
                <p>
                  You can manage or delete cookies through your browser settings. To learn more, visit <a href="https://www.allaboutcookies.org" target="_blank" rel="noopener noreferrer" className="text-cyan-400 hover:underline">www.allaboutcookies.org</a>.
                </p>
              </div>

              {/* --- CRITICAL GOOGLE ADSENSE SECTION --- */}
              <div className="bg-gray-900/90 p-8 rounded-lg border border-cyan-500/20 cyber-border">
                <h2 className="text-2xl font-bold mb-4 text-cyan-400">4. Advertising and Google AdSense</h2>
                <p className="mb-4">
                  This website is supported by ads served by Google AdSense.
                </p>
                <ul className="list-disc list-inside space-y-2">
                  <li>Third-party vendors, including Google, use cookies to serve ads based on a user's prior visits to this website or other websites.</li>
                  <li>Google's use of advertising cookies enables it and its partners to serve ads to users based on their visit to this site and/or other sites on the Internet.</li>
                  <li>Users may opt out of personalized advertising by visiting <a href="https://www.google.com/settings/ads" target="_blank" rel="noopener noreferrer" className="text-cyan-400 hover:underline">Google's Ads Settings</a>. Alternatively, you can opt out of a third-party vendor's use of cookies by visiting <a href="http://www.aboutads.info/choices/" target="_blank" rel="noopener noreferrer" className="text-cyan-400 hover:underline">www.aboutads.info</a>.</li>
                </ul>
              </div>

              <div className="bg-gray-900/90 p-8 rounded-lg border border-cyan-500/20 cyber-border">
                <h2 className="text-2xl font-bold mb-4 text-cyan-400">5. Data Security</h2>
                <p>
                  I take data security seriously. This website uses SSL (Secure Sockets Layer) encryption to protect the data transmitted between your browser and my server. However, no method of transmission over the Internet is 100% secure, so I cannot guarantee absolute security.
                </p>
              </div>

              <div className="bg-gray-900/90 p-8 rounded-lg border border-cyan-500/20 cyber-border">
                <h2 className="text-2xl font-bold mb-4 text-cyan-400">6. Your Rights</h2>
                <p className="mb-4">
                  You have the right to understand how your data is used and to control it. If you have any questions or requests regarding your privacy, please don't hesitate to contact me.
                </p>
                <p>
                  Email me at: <a href='mailto:ai.support.creation@gmail.com' className="text-cyan-400 hover:underline">ai.support.creation@gmail.com</a>.
                </p>
              </div>

              <div className="bg-gray-900/90 p-8 rounded-lg border border-cyan-500/20 cyber-border">
                <h2 className="text-2xl font-bold mb-4 text-cyan-400">7. Changes to This Policy</h2>
                <p>
                  I may update this Privacy Policy from time to time. If I make changes, I will update the "last updated" date at the top of this page.
                </p>
              </div>
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
};