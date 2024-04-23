import Hero from '@/Components/Hero/Hero';

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
    <Hero height="40vh" src="/images/page-images/renewables/pac-24-barn.webp">
      <div className="decorated-title">
        <h1>What happens now?</h1>
        <p>Let us run you through our quote procedure</p>
      </div>
    </Hero>
  );
}
