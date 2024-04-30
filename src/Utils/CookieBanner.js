'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';
import { getLocalStorage, setLocalStorage } from '@/Lib/storageHelper';

import '@/Styles/cookie-banner.css';

export default function CookieBanner() {
  const [cookieConsent, setCookieConsent] = useState(null);

  useEffect(() => {
    const storedCookieConsent = getLocalStorage('cookie_consent', null);
    setCookieConsent(storedCookieConsent);
  }, [setCookieConsent]);

  useEffect(() => {
    const newValue = cookieConsent ? 'granted' : 'denied';
    if (typeof window.gtag !== 'undefined') {
      window.gtag('consent', 'update', {
        ad_user_data: newValue,
        ad_personalization: newValue,
        ad_storage: newValue,
        analytics_storage: newValue,
      });
    }
    setLocalStorage('cookie_consent', cookieConsent);
  }, [cookieConsent]);

  return (
    <div className={`${cookieConsent != null ? 'hidden' : 'cookie-banner'}`}>
      <div className="">
        {/* <Link href="/info/cookies"> */}
        <p>We use cookies on our site.</p>
        {/* </Link> */}
      </div>

      <div className="button-placer">
        <button
          type="button"
          className="mini-button"
          onClick={() => setCookieConsent(false)}
        >
          Decline
        </button>
        <button
          type="button"
          className="accept-button"
          onClick={() => setCookieConsent(true)}
        >
          Allow Cookies
        </button>
      </div>
    </div>
  );
}
