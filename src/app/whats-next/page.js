import Hero from '@/Components/Hero/Hero';

export const metadata = {
  title: 'What happens now? - Power & Control Ltd',
  description:
    'What happens now? We will take you through what the next steps are on your journey to a Solar future.',
};

export default function WhatHappensNext() {
  return (
    <Hero height="40vh">
      <div className="decorated-title">
        <h1>What happens now?</h1>
        <p>Let us run you through our quote procedure</p>
      </div>
    </Hero>
  );
}
