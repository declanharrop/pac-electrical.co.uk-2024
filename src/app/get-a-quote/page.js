'use client';

import styled from 'styled-components';
import Head from '../../Elements/Head';
import Hero from '../../Components/Hero/Hero';
import QuoteThreeImageSection from '../../Components/ContentSections/QuoteThreeImageSection';

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
    height: 1200px;
  }
`;
export default function GetAQuote() {
  return (
    <>
      <Head
        title="Get a Quote | Power and Control"
        description="Contact us for a free Electrical, EV Charger, Solar and Battery Storage, no-obligation quote today."
        url="https://pac-electrical.co.uk/get-a-quote"
      />
      <GetAQuoteStyles>
        <Hero height="20vh">
          <div className="decorated-title">
            <h1>Get a Quote</h1>
          </div>
        </Hero>
        <QuoteThreeImageSection />
      </GetAQuoteStyles>
    </>
  );
}
