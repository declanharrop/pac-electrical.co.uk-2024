'use client';

import styled from 'styled-components';
import Script from 'next/script';
import Hero from '@/Components/Hero/Hero';
import Head from '@/Elements/Head';

const GetAQuoteStyles = styled.div`
  h3 {
    margin: 40px auto 0;
    max-width: 800px;
  }
  .quote-form {
    margin: 20px auto 0;
    padding: 0 10px 40px;
    width: 100%;
    max-width: 1000px;
    height: 1500px;
  }
  .interest-form {
    margin-bottom: 50px;
    min-height: 300px;
    width: 100%;
  }
  iframe {
    width: 100%;
  }
`;
export default function GetAQuoteRenewable() {
  return (
    <>
      <Head
        title="Solar PV & Battery Storage Quote | Power and Control - Derby Solar and Battery Storage experts"
        description="Contact us for a free Solar and Battery Storage, no-obligation quote today. Derby's Solar and Battery Storage experts"
        url="https://pac-electrical.co.uk/get-a-quote/renewable"
      />
      <GetAQuoteStyles>
        <Hero
          height="20vh"
          src="/images/page-images/renewables/solar7.jpg"
          alt="Get a Solar Quote today from Derby's Solar and Battery Storage experts"
        >
          <div className="decorated-title">
            <h1>Solar PV & Battery Storage Quote</h1>
          </div>
        </Hero>
        <iframe
          title="Get a Quote - Renewable"
          className="clickup-embed clickup-dynamic-height"
          src="https://forms.clickup.com/9006129973/f/8ccx8tn-1068/486HCHH0N0HNKEQMOO"
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
