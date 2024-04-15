'use client';

import styled from 'styled-components';
import Script from 'next/script';
import Head from '@/Elements/Head';
import Hero from '@/Components/Hero/Hero';

const GetAQuoteStyles = styled.div`
  h3 {
    margin: 40px auto 0;
    max-width: 800px;
  }
  iframe {
    margin: 20px auto 0;
    padding: 0 10px 40px;
    width: 100%;
    max-width: 1000px;
    height: 1500px;
  }
`;
export default function GetAQuoteEVCharger() {
  return (
    <>
      <Head
        title="Get a Quote - EV Charger | Power and Control"
        description="Contact us for a free EV Charger, no-obligation quote today."
        url="https://pac-electrical.co.uk/get-a-quote/ev-charger"
      />
      <GetAQuoteStyles>
        <Hero height="20vh">
          <div className="decorated-title">
            <h1>Get a Quote</h1>
          </div>
        </Hero>
        <iframe
          title="Get a Quote - EV Charger"
          className="clickup-embed clickup-dynamic-height"
          src="https://forms.clickup.com/9006129973/f/8ccx8tn-1288/X5B1372Z2783SMG6RI"
          frameBorder={0}
          marginHeight={0}
          marginWidth={0}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        >
          Loading…
        </iframe>
        <Script src="https://app-cdn.clickup.com/assets/js/forms-embed/v1.js" />
      </GetAQuoteStyles>
    </>
  );
}
