import React from 'react';
import Link from 'next/link';
import StandardHeroVideo from '@/Components/Hero/StandardHeroVideo';
import ExploreBlock from '@/Components/Blocks/Explore';
import VideoContentBlock from '@/Components/Blocks/VideoContentBlock';
import BenefitsBlock from '@/Components/Blocks/BenefitsBlock';
import { DomesticSolarData } from '@/Lib/data/domestic-solar';
import SliderBlock from '@/Components/Blocks/SliderBlock';
import Accordian from '@/Components/Accordian/Accordian';

export const metadata = {
  title: 'Home Solar PV Installer Derbyshire - Power & Control',
  description:
    'Solar panels for homes UK, cut energy bills, go green with confidence. Derbyshire Solar Installer. MCS-accredited installations by Power & Control Ltd.',
  url: 'https://pac-electrical.co.uk/solar/domestic',
};
export default function DomesticSolarPage() {
  return (
    <>
      <StandardHeroVideo
        videomp4="pac-home-video-new.mp4"
        videowebm="pac-solarpage-video.webm"
        overlayColor="var(--green-50)"
      >
        <div className="decorated-header">
          <h1>Domestic Solar</h1>
          <p>This is the perfect time to invest in solar energy.</p>
          <div className="buttons">
            <Link href="/request-callback">
              <button
                aria-label="Request a callback"
                type="button"
                className="home-callback secondary-button"
              >
                Request a callback
              </button>
            </Link>
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
      </StandardHeroVideo>
      <VideoContentBlock>
        <h4>
          Let us take you through the inner workings or a Solar PV & Battery
          system
        </h4>
        <p>
          From planning to implementation, witness how we transform homes into
          eco-friendly energy havens. Discover advanced technologies like the
          Solis hybrid inverter and Puredrive battery system, and learn about
          our user-friendly smart monitoring system.
        </p>
      </VideoContentBlock>
      {/* <ExploreBlock /> */}
      <BenefitsBlock data={DomesticSolarData[0]} />
      <SliderBlock />
      <Accordian data={DomesticSolarData[1].content} color="var(--green)" />
    </>
  );
}
