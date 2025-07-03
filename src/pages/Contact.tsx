import React from 'react';
import { Layout } from '../components/Layout';
import { Mail, MessageSquare } from 'lucide-react';
import { Helmet } from 'react-helmet-async';
import logoAi from '../constants/images/logo-ai.png';


export const Contact = () => {
  const SITE_URL = import.meta.env.VITE_FRONT_URL
  return (
    <>
      <Helmet>
            <title>Contact Me - AI Creative Recipe Generator</title>
            <meta name="description" content="Have a question, feedback, or a feature idea for AI Creative? Contact me directly. I read every message and am here to help." />
            <meta property="og:title" content="Contact Me - AI Creative Recipe Generator" />
            <meta property="og:description" content="Have a question, feedback, or a feature idea for AI Creative? Contact me directly." />
            <meta property="og:image" content={logoAi} />
            <meta property="og:url" content={SITE_URL} />
            <meta name="robots" content="index, follow" />
      </Helmet>
      <Layout
        title="Contact Me - AI Creative"
        description="Get in touch for support, feedback, or inquiries about the AI Recipe Generator."
      >
        <div className="container mx-auto px-4 py-16">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <div className="text-center lg:text-left mb-16">
                <Mail className="w-16 h-16 text-cyan-400 mx-auto lg:mx-0 mb-6" />
                <h1 className="text-4xl font-bold mb-6 text-cyan-400 cyber-glow">Get in Touch</h1>
                <p className="text-lg text-cyan-300">
                  I'd love to hear from you. As the creator of this project, I read every message personally.
                </p>
              </div>

              <div className="grid gap-8 md:grid-cols-2 mb-12">
                <div className="bg-gray-900/90 p-8 rounded-lg border border-cyan-500/20 cyber-border">
                  <h2 className="text-2xl font-bold mb-4 text-cyan-400">Send Me a Message</h2>
                  <p className="text-cyan-300 mb-4">
                    Have a question, suggestion, or a feature idea? I’m here to help! Whether you have feedback on the AI recipe generator or just want to share your thoughts, feel free to reach out.
                  </p>
                  <p className="text-cyan-300 mb-4">
                    Email me anytime at:
                  </p>
                  <p className="text-cyan-300 mb-4">
                    <a href='mailto:ai.supprot.creation@gmail.com'>ai.supprot.creation@gmail.com</a>
                  </p>
                </div>
              </div>

              <div className="bg-gray-900/90 p-8 rounded-lg border border-cyan-500/20 cyber-border">
              <h2 className="text-2xl font-bold mb-4 text-cyan-400">Frequently Asked Questions (FAQ)</h2>
              <h3 className="space-y-2 text-cyan-300 font-bold">
                Is AI Creative really free to use?
              </h3>
              <p className="space-y-2 text-cyan-300">
                Yes! AI Creative is completely free—no subscriptions, no hidden fees. My goal is to make my AI cooking tools accessible to everyone, forever.
              </p><br></br>
              <h3 className="space-y-2 text-cyan-300 font-bold">
                How does the AI recipe generator work?
              </h3>
              <p className="space-y-2 text-cyan-300">
                My system analyzes the ingredients you enter and uses artificial intelligence to create personalized recipes based on dietary needs, allergies, meal type, and cuisine origin.
              </p><br></br>
              <h3 className="space-y-2 text-cyan-300 font-bold">
                    Can I request specific features or improvements?
              </h3>
              <p className="space-y-2 text-cyan-300">
                Absolutely! I welcome feedback and suggestions. Just email me at the address above I read every message.
              </p><br></br>
              <h3 className="space-y-2 text-cyan-300 font-bold">
                Is my data or input stored or shared?
              </h3>
              <p className="space-y-2 text-cyan-300">
                I respect your privacy. I don’t store personal data or share your inputs. Everything happens in real-time, and your session stays private.
              </p><br></br>
              <h3 className="space-y-2 text-cyan-300 font-bold">
                    What types of diets or cuisines are supported?
              </h3>
              <p className="space-y-2 text-cyan-300">
                  I support a wide range of dietary preferences (like vegan, gluten-free, keto) and various international cuisines. My AI is constantly improving to provide more accurate, diverse recipes.
              </p>
              </div>
            </div>

            {/* Sidebar AdSense */}
            <div className="space-y-8">
              <div className="bg-gray-900/90 p-4 rounded-lg border border-cyan-500/20 h-[300px] flex items-center justify-center text-cyan-300">
                Ad Space
              </div>
              <div className="bg-gray-900/90 p-4 rounded-lg border border-cyan-500/20 h-[600px] flex items-center justify-center text-cyan-300">
                Ad Space
              </div>
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
};