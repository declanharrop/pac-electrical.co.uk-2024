import NextTopLoader from 'nextjs-toploader';
import { Suspense } from 'react';
import { register } from 'swiper/element/bundle';
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

const APP_NAME = 'Power & Control - Solar Experts';

export const metadata = {
  applicationName: APP_NAME,
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
      <Suspense>
        <GoogleAnalytics GA_MEASUREMENT_ID="G-JN7204204E" />
      </Suspense>
      <head>
        <title>{metadata.applicationName}</title>
        <link rel="stylesheet" href="https://use.typekit.net/xml0rco.css" />
        <link
          rel="icon"
          sizes="192x192"
          href="/logo/pac-logo-electrical-reverse.svg"
        />
        <link
          rel="apple-touch-icon"
          href="/logo/pac-logo-electrical-reverse.svg"
        />
        <link
          rel="mask-icon"
          href="/logo/pac-logo-electrical-reverse.svg"
          color="var(--navy)"
        />
        <link rel="icon" href="/favicon.ico" />
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
        <script src="https://cdn.jsdelivr.net/npm/swiper@11/swiper-element-bundle.min.js" />
      </head>
      <body>
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
