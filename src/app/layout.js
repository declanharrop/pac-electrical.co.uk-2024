import NextTopLoader from 'nextjs-toploader';
import { Suspense } from 'react';
import { register } from 'swiper/element/bundle';
import Script from 'next/script';
import StyledComponentsRegistry from '../Utils/registry';
import Globalstyle from '@/Styles/Global.styles';
import Typography from '@/Styles/Typography.styles';
import Footer from '@/Components/Footer/Footer';
import Header from '@/Components/Header/Header';
import { MenuProvider } from '@/Context/MenuContext';
import GoogleAnalytics from '@/Utils/GoogleAnalytics';
import CookieBanner from '@/Utils/CookieBanner';
import { getClient } from '@/Lib/client';
import { LATEST_NEWS_DATA } from '@/Lib/queries';

const METADATA = {
  Url: 'https://www.pac-electrical.co.uk',
  SiteName: 'Power & Control - Solar Experts Derbyshire',
  Description:
    'Power & Control provide solar panel installations and electrical services across Derbyshire and the East Midlands',
  Keywords:
    'solar panels, solar installers, electrical contractors, renewable energy, EV charging, solar PV, solar battery storage, solar grants, solar panel installation, solar panel installers, solar panel company, solar panel cost, solar panel system, solar panel price, solar panel installation cost, solar panel installation near me, solar panel installation companies, solar panel installation companies near me, solar panel installation cost UK, solar panel installation cost near me',
};
export const metadata = {
  title: METADATA.SiteName,
  applicationName: METADATA.SiteName,
  description: METADATA.Description,
  referrer: 'origin-when-cross-origin',
  url: METADATA.Url,
  openGraph: {
    title: METADATA.SiteName,
    description: METADATA.Description,
    url: METADATA.Url,
    images: [
      {
        url: 'https://pac-electrical.co.uk/images/headers/powerandcontrolmcs.jpg', // Must be an absolute URL
        width: 800,
        height: 600,
      },
    ],
    locale: 'en_GB',
    type: 'website',
  },
};

export const viewport = {
  themeColor: '#FFFFFF',
};

export default async function RootLayout({ children }) {
  const client = getClient();

  const { data: featuredNewsData } = await client.query({
    query: LATEST_NEWS_DATA,
  });

  register();
  return (
    <html lang="en">
      <head>
        <link rel="stylesheet" href="https://use.typekit.net/xml0rco.css" />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/icon?family=Material+Icons"
        />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="true"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Urbanist:ital,wght@0,100..900;1,100..900&display=swap"
          rel="stylesheet"
        />
        {/* <Script
          afterInteractive
          src="https://cdn.jsdelivr.net/npm/swiper@11/swiper-element-bundle.min.js"
        /> */}
      </head>
      <body>
        <Script id="gtm" strategy="beforeInteractive">
          {`(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
          new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
          j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
          'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
        })(window,document,'script','dataLayer','GTM-KG2WZ9N');`}
        </Script>
        <Suspense>
          <GoogleAnalytics GA_MEASUREMENT_ID="G-07HW5JDB5D" />
        </Suspense>
        <NextTopLoader color="#74b570" />
        <StyledComponentsRegistry>
          <Globalstyle />
          <Typography />
          <MenuProvider>
            <Header />
            {children}
            <Footer data={featuredNewsData} />
          </MenuProvider>
          <CookieBanner />
        </StyledComponentsRegistry>
        <div id="modal-root" />
      </body>
    </html>
  );
}
