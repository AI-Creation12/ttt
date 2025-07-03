import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { Layout } from './components/Layout';
import { Home } from './pages/Home';
import { HowItWorks } from './pages/HowItWorks';
import { Generate } from './pages/Generate';
import { Inspiration } from './pages/Inspiration';
import { About } from './pages/About';
import { Terms } from './pages/Terms';
import { Privacy } from './pages/Privacy';
import { Cookies } from './pages/Cookies';
import { Contact } from './pages/Contact';
import { RecipeCategory } from './pages/RecipeCategory';
import { RecipeDetail } from './pages/RecipeDetail';
import { CookieManager } from 'react-cookie-manager';
import 'react-cookie-manager/style.css';
import ReactGA from 'react-ga4';
import axios from 'axios';

// Stałe
const GA_MEASUREMENT_ID = import.meta.env.VITE_GOOGLE_ANALITICS_ID;
const GOOGLE_ADS = import.meta.env.VITE_GOOGLE_ADS_ID;
const API_URL_COOKIES = import.meta.env.VITE_API_URL_COOKIES;

// Typy
interface CookiePreferences {
  analytics?: boolean;
  marketing?: boolean;
  necessary: boolean;
  [key: string]: boolean | undefined;
}

interface ConsentData {
  consentGiven: boolean;
  preferences: Record<string, 'granted' | 'denied'>;
  gcd?: string;
  technicalData: {
    timestamp: string;
    userAgent: string;
    language: string;
    screenResolution: string;
    pageUrl: string;
  };
}

type ConsentState = Record<string, 'granted' | 'denied'>;

const DEFAULT_CONSENT_STATE: ConsentState = {
  ad_storage: 'denied',
  analytics_storage: 'denied',
  ad_user_data: 'denied',
  ad_personalization: 'denied',
  functionality_storage: 'denied',
  personalization_storage: 'denied',
};

// Pomocnicze funkcje
const updateGtagConsent = (state: ConsentState) => {
  if (window.gtag) {
    window.gtag('consent', 'update', state);
  }
};

const initializeGA = () => {
  ReactGA.initialize(GA_MEASUREMENT_ID);
  ReactGA.send({ hitType: 'pageview', page: window.location.pathname });
  console.log('Google Analytics initialized');
};

const initializeGoogleAds = () => {
  const script = document.createElement('script');
  script.async = true;
  script.src = `https://www.googletagmanager.com/gtag/js?id=${GOOGLE_ADS}`;
  document.head.appendChild(script);

  window.dataLayer = window.dataLayer || [];
  function gtag(...args: any[]) {
    window.dataLayer.push(arguments);
  }

  gtag('js', new Date());
  gtag('config', GOOGLE_ADS);
  gtag('set', 'allow_ad_personalization_signals', true);

  console.log('Google Ads initialized');
};

const getGCDParameter = (): string | null => {
  const script = Array.from(document.getElementsByTagName('script')).find((s) =>
    s.src.includes('googletagmanager.com/gtag/js')
  );
  return script ? new URL(script.src).searchParams.get('gcd') : null;
};

const sendConsentToBackend = async (
  consentGiven: boolean,
  preferences: CookiePreferences
) => {
  const consentData: ConsentData = {
    consentGiven,
    preferences: {
      ad_storage: preferences.marketing ? 'granted' : 'denied',
      analytics_storage: preferences.analytics ? 'granted' : 'denied',
      ad_user_data: preferences.marketing ? 'granted' : 'denied',
      ad_personalization: preferences.marketing ? 'granted' : 'denied',
      consent_update: true,
      consent_default: 'denied',
    },
    gcd: getGCDParameter() ?? undefined,
    technicalData: {
      timestamp: new Date().toISOString(),
      userAgent: navigator.userAgent,
      language: navigator.language,
      screenResolution: `${window.screen.width}x${window.screen.height}`,
      pageUrl: window.location.href,
    },
  };


    try {
      const response = await fetch(API_URL_COOKIES, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(consentData)
      });
      } catch (error) {
    console.error('Error sending consent:', error);
      }
};

// Główna aplikacja
function App() {
  const handleAcceptAll = () => {
    console.log('User accepted all cookies');

    const allPreferences: CookiePreferences = {
      necessary: true,
      analytics: true,
      marketing: true,
    };

    updateGtagConsent({
      ...DEFAULT_CONSENT_STATE,
      ad_storage: 'granted',
      analytics_storage: 'granted',
      ad_user_data: 'granted',
      ad_personalization: 'granted',
    });

    initializeGA();
    initializeGoogleAds();
    sendConsentToBackend(true, allPreferences);
  };

  const handleDeclineAll = () => {
    console.log('User declined all cookies');

    const preferences: CookiePreferences = {
      necessary: true,
      analytics: false,
      marketing: false,
    };

    updateGtagConsent(DEFAULT_CONSENT_STATE);
    sendConsentToBackend(false, preferences);
  };

  const handleManageCookies = (preferences: CookiePreferences | null) => {
    if (!preferences) return;

    console.log('User updated cookie preferences:', preferences);

    const consentState: ConsentState = {
      ad_storage: preferences.marketing ? 'granted' : 'denied',
      analytics_storage: preferences.analytics ? 'granted' : 'denied',
      ad_user_data: preferences.marketing ? 'granted' : 'denied',
      ad_personalization: preferences.marketing ? 'granted' : 'denied',
      functionality_storage: 'denied',
      personalization_storage: 'denied',
    };

    updateGtagConsent(consentState);

    if (preferences.analytics) initializeGA();
    if (preferences.marketing) {
      initializeGoogleAds();
    } else if (window.gtag) {
      window.gtag('set', 'allow_ad_personalization_signals', false);
    }

    sendConsentToBackend(true, preferences);
  };

  return (
    <CookieManager
      translations={{
        title: 'Would You Like A Cookie? 🍪',
        message:
          'We value your privacy. Choose which cookies you want to allow. Essential cookies are always enabled.',
        buttonText: 'Accept All',
        declineButtonText: 'Decline All',
        manageButtonText: 'Manage Cookies',
        privacyPolicyText: 'Privacy Policy',
      }}
      showManageButton={true}
      privacyPolicyUrl="/privacy"
      theme="light"
      displayType="modal"
      cookieKitId=""
      onManage={handleManageCookies}
      onAccept={handleAcceptAll}
      onDecline={handleDeclineAll}
    >
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/how-it-works" element={<HowItWorks />} />
        <Route path="/generate" element={<Generate />} />
        <Route path="/inspiration" element={<Inspiration />} />
        <Route path="/about" element={<About />} />
        <Route path="/terms" element={<Terms />} />
        <Route path="/privacy" element={<Privacy />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/category/:id" element={<RecipeCategory />} />
        <Route path="/inspiration/:category/:slug" element={<RecipeDetail />} />
      </Routes>
    </CookieManager>
  );
}

// Deklaracje globalne
declare global {
  interface Window {
    dataLayer: any[];
    gtag: (...args: any[]) => void;
  }
}

export default App;

















































// import React from 'react';
// import { Routes, Route } from 'react-router-dom';
// import { Layout } from './components/Layout';
// import { Home } from './pages/Home';
// import { HowItWorks } from './pages/HowItWorks';
// import { Generate } from './pages/Generate';
// import { Inspiration } from './pages/Inspiration';
// import { About } from './pages/About';
// import { Terms } from './pages/Terms';
// import { Privacy } from './pages/Privacy';
// import { Cookies } from './pages/Cookies';
// import { Contact } from './pages/Contact';
// import { RecipeCategory } from './pages/RecipeCategory';
// import { RecipeDetail } from './pages/RecipeDetail';
// import { CookieManager } from 'react-cookie-manager';
// import "react-cookie-manager/style.css";

// function App() {
//   return (
//     <CookieManager
//       translations={{
//         title: "Would You Like A Cookie? 🍪",
//         message:
//           "We value your privacy. Choose which cookies you want to allow. Essential cookies are always enabled as they are necessary for the website to function properly.",
//         buttonText: "Accept All",
//         declineButtonText: "Decline All",
//         manageButtonText: "Manage Cookies",
//         privacyPolicyText: "Privacy Policy",
//       }}
//       showManageButton={true}
//       privacyPolicyUrl="/privacy"
//       theme="light"
//       displayType="modal"
//       cookieKitId="" // Optional: Enable CookieKit.io integration
//       onManage={(preferences) => {
//         if (preferences) {
//           console.log("Cookie preferences updated:", preferences);
//         }
//       }}
//       onAccept={() => {
//         console.log("User accepted all cookies");
//         // Analytics tracking can be initialized here
//       }}
//       onDecline={() => {
//         console.log("User declined all cookies");
//         // Handle declined state if needed
//       }}
//     >
//       <Routes>
//         <Route path="/" element={<Home />} />
//         <Route path="/how-it-works" element={<HowItWorks />} />
//         <Route path="/generate" element={<Generate />} />
//         <Route path="/inspiration" element={<Inspiration />} />
//         <Route path="/about" element={<About />} />
//         <Route path="/terms" element={<Terms />} />
//         <Route path="/privacy" element={<Privacy />} />
//         <Route path="/cookies" element={<Cookies />} />
//         <Route path="/contact" element={<Contact />} />
//         <Route path="/category/:id" element={<RecipeCategory />} />
//         <Route path="/inspiration/:category/:slug" element={<RecipeDetail />} />
//       </Routes>
//     </CookieManager>
//   );
// }

// export default App;