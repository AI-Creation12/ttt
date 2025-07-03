import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link, useLocation } from 'react-router-dom';
import { Terminal } from 'lucide-react';
import { defaultSEO } from '../utils/seo';

interface LayoutProps {
  children: React.ReactNode;
  title?: string;
  description?: string;
}

export const Layout: React.FC<LayoutProps> = ({ 
  children, 
  title = defaultSEO.title,
  description = defaultSEO.description 
}) => {
  const location = useLocation();
  
  const navigation = [
    { name: 'Home', href: '/' },
    { name: 'How It Works', href: '/how-it-works' },
    { name: 'Generate Recipe', href: '/generate' },
    { name: 'Inspiration', href: '/inspiration' },
    { name: 'About', href: '/about' },
  ];

  const legalLinks = [
    { name: 'Terms of Use', href: '/terms' },
    { name: 'Privacy Policy', href: '/privacy' },
    { name: 'Contact', href: '/contact' },
  ];

  return (
    <>
      <Helmet>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="keywords" content={defaultSEO.keywords} />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:image" content={defaultSEO.ogImage} />
        <meta name="twitter:card" content={defaultSEO.twitterCard} />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={description} />
        <meta name="twitter:image" content={defaultSEO.ogImage} />
      </Helmet>

      <div className="min-h-screen bg-black/50 text-cyan-500">
        <nav className="bg-gray-900/90 border-b border-cyan-500/20">
          <div className="container mx-auto px-4 py-4">
            <div className="flex items-center justify-between">
              <Link to="/" className="flex items-center gap-2">
                <Terminal className="w-8 h-8" />
                <span className="text-2xl font-bold cyber-glow">AI Creative</span>
              </Link>
              
              <div className="hidden md:flex items-center gap-6">
                {navigation.map((item) => (
                  <Link
                    key={item.name}
                    to={item.href}
                    className={`text-sm font-medium transition-colors hover:text-cyan-400 ${
                      location.pathname === item.href ? 'text-cyan-400' : 'text-cyan-500'
                    }`}
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </nav>

        <main>{children}</main>

        <footer className="bg-gray-900/90 border-t border-cyan-500/20 py-8">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              <div>
                <Link to="/" className="flex items-center gap-2">
                  <Terminal className="w-6 h-6" />
                  <span className="text-xl font-bold">AI Creative</span>
                </Link>
                <p className="mt-2 text-sm text-cyan-300">
                  Transform your ingredients into delicious recipes with our AI-powered kitchen assistant.
                </p>
              </div>
              
              <div>
                <h3 className="text-lg font-semibold mb-4">Navigation</h3>
                <ul className="space-y-2">
                  {navigation.map((item) => (
                    <li key={item.name}>
                      <Link
                        to={item.href}
                        className="text-sm hover:text-cyan-400 transition-colors"
                      >
                        {item.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
              
              <div>
                <h3 className="text-lg font-semibold mb-4">Legal</h3>
                <ul className="space-y-2">
                  {legalLinks.map((item) => (
                    <li key={item.name}>
                      <Link
                        to={item.href}
                        className="text-sm hover:text-cyan-400 transition-colors"
                      >
                        {item.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
              
              <div>
                <h3 className="text-lg font-semibold mb-4">Connect</h3>
                <p className="text-sm text-cyan-300">
                  Follow us on social media for the latest updates and cooking inspiration.
                </p>
              </div>
            </div>
            
            <div className="mt-8 pt-8 border-t border-cyan-500/20 text-center text-sm text-cyan-300">
              <p>&copy; {new Date().getFullYear()} AI Creative. All rights reserved.</p>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
};