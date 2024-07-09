import React from 'react';

import Link from 'next/link.js';
import { HeroVideoHomeStyles } from './HeroVideo.styles.js';

export default function HeroVideoHome({
  videowebm = 'Solar-pac.webm',
  videomp4 = 'pac-home-video-new.mp4',
  overlayColor = 'var(--green-50)',
}) {
  return (
    <HeroVideoHomeStyles>
      <div className="overlay" style={{ backgroundColor: `${overlayColor}` }}>
        <div className="max-width">
          <div className="standard-title">
            <h1 style={{ marginBottom: '20px' }}>
              Start Your Solar Journey Today
            </h1>
            <div className="buttons">
              <Link href="/get-a-quote">
                <button
                  aria-label="Get a quote"
                  type="button"
                  className="home-getaquote focus-button"
                >
                  Get a quote
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div
        className="video"
        style={{
          backgroundImage:
            'url(../../images/page-images/ev-charging/evchex1.webp)',
        }}
      >
        <video autoPlay loop muted playsInline>
          <source src={`/video/${videomp4}`} type="video/mp4" />
          {/* <source src={`/video/${videowebm}`} type="video/webm" /> */}
        </video>
      </div>
    </HeroVideoHomeStyles>
  );
}
