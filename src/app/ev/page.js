import React from 'react';
import Link from 'next/link';
import HeroFullHeight from '@/Components/Hero/HeroFullHeight';

export default function page() {
  return (
    <div>
      <HeroFullHeight
        src="/images/2025/ev-header.webp"
        alt="EV Charging"
        height="100vh"
      >
        <h1>EV Charge Point</h1>
        <h3 style={{ marginBottom: '30px' }}>Installation Experts</h3>
        <Link href="/get-a-quote">
          <button type="button" className="secondary-button">
            Get a Quote Nows
          </button>
        </Link>
      </HeroFullHeight>
    </div>
  );
}
