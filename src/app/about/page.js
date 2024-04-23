'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';
import Hero from '../../Components/Hero/Hero';
import ServiceTemplateStyles from '../../Templates/styles/ServiceTemplate.styles';
import Skew from '../../Components/ContentSections/Skew';
import FlexImageTextSection from '../../Components/ContentSections/FlexImageTextSection';
import ColorButton from '../../Elements/ColorButton';

export default function About() {
  const [width, setWidth] = useState();

  useEffect(() => {
    setWidth(window.innerWidth);
    window.addEventListener('resize', () => setWidth(window.innerWidth));
    return () =>
      window.removeEventListener('resize', () => setWidth(window.innerWidth));
  }, []);
  return (
    <ServiceTemplateStyles>
      <Hero
        src="/images/page-images/ev-charging/evchex1a.jpg"
        alt="Power and Control Head Office"
      >
        <div className="standard-title">
          <h1>About Us</h1>
          <Link href="/get-a-quote">
            <button className="about-getaquote light-button" type="button">
              Get a Quote
            </button>
          </Link>
        </div>
      </Hero>
      <Skew background="var(--navy)">
        <FlexImageTextSection
          image="/images/page-images/about/about4.webp"
          title=""
          intro={[
            'Power and Control electrical contractors specialise in design, installation, and maintenance across domestic, commercial, and industrial sectors. Our team of highly qualified electricians have many years of experience and a vast knowledge of working within different environments. Whether you need LED lighting, infrared heating, or maintenance work carried out, Power and Control are here to help.',
          ]}
          text=""
        />
      </Skew>
      <Skew
        background="white"
        margin="0"
        padding="100px 10px"
        color="var(--navy)"
      >
        <FlexImageTextSection
          image="/images/page-images/about/about2.jpeg"
          title=""
          text=""
          imagePosition={width <= 800 ? 'ltr' : 'rtl'}
          textAlign={width <= 800 ? 'left' : 'right'}
          borderLeft={width <= 800 ? `var(--navy) 2px solid` : 'none'}
          borderRight={width <= 800 ? 'none' : `var(--navy) 2px solid`}
          textPadding={width <= 800 ? '0 0px 0 30px' : '0 30px 0 0px'}
        >
          <p>
            We know how valuable renewable energy sources are, which is why we
            specialise in solar PV installation for both domestic and commercial
            properties. We are an OZEV-approved installer, enabling us to work
            with the government grant scheme for the installation of electric
            vehicle charging infrastructure. We install EV chargers in
            commercial and domestic properties to help your home and businesses
            become more sustainable.
          </p>
          <p style={{ paddingTop: '20px' }}>
            At Power and Control, we aim to provide our customers with a fast
            and reliable service. From design to installation, we offer a
            complete solution for your project, providing everything you need
            from start to finish.
          </p>
        </FlexImageTextSection>
      </Skew>
      <Skew background="var(--navy)">
        <h3>Join the Power and Control Team!</h3>
        <p style={{ marginTop: '40px' }}>
          At Power and Control, we firmly believe in the tremendous potential of
          talent and innovation to drive our mission of creating a sustainable
          energy future. Our Recruitment Page serves as your gateway to
          discovering exciting opportunities to become an integral part of our
          dynamic team, which is at the forefront of the renewable energy
          revolution.
        </p>
        <div style={{ marginTop: '40px' }}>
          <Link href="/recruitment">
            <ColorButton
              name="Find out more"
              backgroundColor="white"
              color="var(--navy)"
            />
          </Link>
        </div>
      </Skew>
    </ServiceTemplateStyles>
  );
}
