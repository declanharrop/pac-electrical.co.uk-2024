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

    window.gtag('consent', 'update', {
      analytics_storage: newValue,
    });

    setLocalStorage('cookie_consent', cookieConsent);
  }, [cookieConsent]);

  return (
    <div className={`${cookieConsent != null ? 'hidden' : 'cookie-banner'}`}>
      <div className="">
        <Link href="/info/cookies">
          <p>
            We use <span className="">cookies</span> on our site.
          </p>
        </Link>
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
