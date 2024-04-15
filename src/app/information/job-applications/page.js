'use client';

import styled from 'styled-components';
import Script from 'next/script';
import Head from '@/Elements/Head';
import Hero from '@/Components/Hero/Hero';

const JobApplicationStyles = styled.div`
  h3 {
    margin: 40px auto 0;
    max-width: 800px;
  }
  iframe {
    border: none;
  }
`;
export default function JobApplications() {
  return (
    <>
      <Head
        title="Job Application | Power and Control"
        description="Job Application Form"
        url="https://pac-electrical.co.uk/information/job-applications"
      />
      <Script src="https://app-cdn.clickup.com/assets/js/forms-embed/v1.js" />
      <JobApplicationStyles>
        <Hero height="20vh">
          <div className="decorated-title">
            <h1>Apply Today</h1>
          </div>
        </Hero>
        <iframe
          className="clickup-embed clickup-dynamic-height"
          title="Job Application Form"
          src="https://forms.clickup.com/9006129973/f/8ccx8tn-1528/0KHV8MEK3FP66COPXA"
          onWheel=""
          width="100%"
          height="100%"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        >
          Loading…
        </iframe>
      </JobApplicationStyles>
    </>
  );
}
