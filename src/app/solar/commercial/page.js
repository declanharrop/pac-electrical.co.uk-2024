import React from 'react';
import Link from 'next/link';
import StandardHeroVideo from '@/Components/Hero/StandardHeroVideo';
import ExploreBlock from '@/Components/Blocks/Explore';
import VideoContentBlock from '@/Components/Blocks/VideoContentBlock';
import BenefitsBlock from '@/Components/Blocks/BenefitsBlock';
import { CommercialSolarData } from '@/Lib/data/commercial-solar';
import SliderBlock from '@/Components/Blocks/SliderBlock';
import Accordian from '@/Components/Accordian/Accordian';

export const metadata = {
  title: 'Commercial Solar Installer Derbyshire - Power & Control',
  description:
    'Commercial solar panels UK, cut energy bills, enhance green credentials, MCS-accredited. Power & Control Ltd. – your trusted partner in renewable solutions.',
  url: 'https://pac-electrical.co.uk/solar/commercial',
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
          <h1>Commercial Solar</h1>
          <p>This is the perfect time to invest in solar energy.</p>
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
            <Link href="/solar/our-process">
              <button
                aria-label="Get a quote"
                type="button"
                className="home-getaquote secondary-button"
              >
                Our Solar Process
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
          From planning to implementation, witness how we transform workplaces
          into eco-friendly energy havens. Discover advanced technologies like
          the Solis hybrid inverter and Puredrive battery system, and learn
          about our user-friendly smart monitoring system.
        </p>
      </VideoContentBlock>
      {/* <ExploreBlock /> */}
      <BenefitsBlock data={CommercialSolarData[0]} />
      <SliderBlock />
      <Accordian data={CommercialSolarData[1].content} color="var(--green)" />
    </>
  );
}
