'use client';

import { usePathname } from 'next/navigation';
import { use, useState, useEffect } from 'react';
import Script from 'next/script';
import { FooterStyles } from './Footer.styles';
import LogoSection from './LogoSection';
import Contact from './Contact';
import Sitemap from './Sitemap';
import LatestStoryStudy from './LatestStoryStudy';
import Reviews from './Reviews';

export default function Footer({ data }) {
  const [active, setActive] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    if (
      pathname === '/' ||
      pathname === '/case-studies' ||
      pathname === '/news'
    ) {
      setActive(false);
    } else {
      setActive(true);
    }
  }, [pathname]);
  return (
    <>
      {active && <LatestStoryStudy data={data} />}
      <FooterStyles>
        <Reviews />
        <div className="stripe">
          <svg height="100%" width="100%">
            <defs>
              <linearGradient id="grad3">
                <stop
                  offset="0%"
                  style={{ stopColor: 'var(--navy)', stopOpacity: '1' }}
                />
                <stop
                  offset="20%"
                  style={{ stopColor: 'var(--navy)', stopOpacity: '1' }}
                />
                <stop
                  offset="40%"
                  style={{ stopColor: 'var(--green)', stopOpacity: '1' }}
                />
                <stop
                  offset="60%"
                  style={{ stopColor: 'var(--green)', stopOpacity: '1' }}
                />
                <stop
                  offset="80%"
                  style={{ stopColor: 'var(--neon)', stopOpacity: '1' }}
                />
                <stop
                  offset="100%"
                  style={{ stopColor: 'var(--neon)', stopOpacity: '1' }}
                />
              </linearGradient>
            </defs>
            <rect width="100%" height="100%" fill="url(#grad3)" />
          </svg>
        </div>
        <LogoSection />
        <div className="stripe">
          <svg height="100%" width="100%">
            <defs>
              <linearGradient id="grad3">
                <stop
                  offset="0%"
                  style={{ stopColor: 'var(--navy)', stopOpacity: '1' }}
                />
                <stop
                  offset="20%"
                  style={{ stopColor: 'var(--navy)', stopOpacity: '1' }}
                />
                <stop
                  offset="40%"
                  style={{ stopColor: 'var(--green)', stopOpacity: '1' }}
                />
                <stop
                  offset="60%"
                  style={{ stopColor: 'var(--green)', stopOpacity: '1' }}
                />
                <stop
                  offset="80%"
                  style={{ stopColor: 'var(--neon)', stopOpacity: '1' }}
                />
                <stop
                  offset="100%"
                  style={{ stopColor: 'var(--neon)', stopOpacity: '1' }}
                />
              </linearGradient>
            </defs>
            <rect width="100%" height="100%" fill="url(#grad3)" />
          </svg>
        </div>
        <Contact />
        <Sitemap />
        <div className="lower">
          <div className="copyright">
            <p>
              © {new Date().getFullYear()} Power and Control Ltd. Use of this
              site constitutes acceptance of our Privacy Policy. The material on
              this site may not be reproduced, distributed, transmitted, cached
              or otherwise used, except with prior written permission of Power
              and Control Ltd.
            </p>
            <div className="dhweblogo">
              <a href="https://dhweb.dev" target="_blank" rel="noreferrer">
                <img src="/logo/dhwebdev.svg" alt="DH Web Logo" />
              </a>
            </div>
          </div>
        </div>
        <Script
          afterInteractive
          dangerouslySetInnerHTML={{
            __html: `
              window.addEventListener('load',function(){
                jQuery('body').on('click','[href="tel:+441332552320"]',function(){
                  gtag("event", "Tel_Click", {
                })
                jQuery('body').on('click','[href="mailto:enquiries@pac-electrical.co.uk"]',function(){
                  gtag("event", "Mail_Click", {
                })
              })`,
          }}
        />
      </FooterStyles>
    </>
  );
}
