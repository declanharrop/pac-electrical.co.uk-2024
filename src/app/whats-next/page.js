import Link from 'next/link';
import StandardHeroVideo from '@/Components/Hero/StandardHeroVideo';

export const metadata = {
  title: 'What happens now? - Power & Control Ltd',
  description:
    'What happens now? We will take you through what the next steps are on your journey to a Solar future.',
  url: 'https://pac-electrical.co.uk/whats-next',
  image: '/images/page-images/renewables/pac-24-barn.webp',
  openGraph: {
    title: 'What happens now? - Power & Control Ltd',
    description:
      'What happens now? We will take you through what the next steps are on your journey to a Solar future.',
    url: 'https://pac-electrical.co.uk/whats-next',
    type: 'website',
    images: [
      {
        url: '/images/page-images/renewables/pac-24-barn.webp',
      },
    ],
  },
};

export default function WhatHappensNext() {
  return (
    <StandardHeroVideo
      videomp4="pac-home-video-new.mp4"
      videowebm="pac-solarpage-video.webm"
      overlayColor="var(--green-50)"
      height="80vh"
    >
      <div className="decorated-header">
        <h1>What happens now?</h1>
        <p>Let us run you through our quote procedure</p>
        <Link href="/solar/our-process">
          <button
            style={{ marginTop: '30px' }}
            aria-label="Request a callback"
            type="button"
            className="home-callback secondary-button"
          >
            Explore our process
          </button>
        </Link>
      </div>
    </StandardHeroVideo>
  );
}
