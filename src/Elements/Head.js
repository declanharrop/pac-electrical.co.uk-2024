/* eslint-disable react/destructuring-assignment */
import NextHead from 'next/head';

const defaultDescription =
  'Power and Control is the number on Solar installer accross Derbyshire & the Midlands. We are leading electrical and renewable contractors, supplying domestic and commercial properties with low emission solutions.';
const defaultOGURL = 'https://pac-electrical.co.uk';
const defaultOGImage = 'https://pac-electrical.co.uk/images/headers/home.webp';
const defaultOGType = 'website';

const Head = (props) => (
  <NextHead>
    <meta charSet="UTF-8" />
    {props.title ? (
      <title>{props.title}</title>
    ) : (
      <title>
        Power & Control | Derbyshire Solar Experts | Commercial Contractors
      </title>
    )}
    <meta
      name="description"
      content={props.description || defaultDescription}
    />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <link rel="icon" sizes="192x192" href="/favicon.ico" />
    <link rel="apple-touch-icon" href="/static/favicon.ico" />
    <link rel="mask-icon" href="/static/favicon.ico" color="var(--navy)" />
    <link rel="icon" href="/favicon.ico" />
    <meta property="og:url" content={props.url || defaultOGURL} />
    {props.title ? (
      <meta property="og:title" content={props.title} />
    ) : (
      <meta
        property="og:title"
        content="Power & Control | Derbyshire Solar Experts | Commercial Contractors"
      />
    )}
    <meta
      property="og:description"
      content={props.description || defaultDescription}
    />
    <meta name="twitter:site" content={props.url || defaultOGURL} />
    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:image" content={props.ogImage || defaultOGImage} />
    <meta property="og:image" content={props.ogImage || defaultOGImage} />
    <meta property="og:type" content={props.ogType || defaultOGType} />
    <meta property="og:image:width" content="1200" />
    <meta property="og:image:height" content="630" />
  </NextHead>
);

export default Head;
