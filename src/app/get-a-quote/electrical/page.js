'use client';

import styled from 'styled-components';
import Hero from '@/Components/Hero/Hero';
import QuoteForm from '@/Elements/Forms/QuoteForm';
import Head from '@/Elements/Head';

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
export default function GetAQuoteElectrical() {
  return (
    <>
      <Head
        title="Get a Quote - Electrical | Power and Control"
        description="Contact us for a free Electrical, no-obligation quote today."
        url="https://pac-electrical.co.uk/get-a-quote/electrical"
      />
      <GetAQuoteStyles>
        <Hero height="20vh">
          <div className="decorated-title">
            <h1>Get a Quote</h1>
          </div>
        </Hero>
        <QuoteForm />
      </GetAQuoteStyles>
    </>
  );
}
