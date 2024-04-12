import NextTopLoader from 'nextjs-toploader';
import { ApolloWrapper } from '../Utils/ApolloWrapper';
import StyledComponentsRegistry from '../Utils/registry';
import Globalstyle from '@/Styles/Global.styles';
import Typography from '@/Styles/Typography.styles';

// const DynamicAPIDataProvider = dynamic(
//   () => import('@/Context/APIDataContext').then((mod) => mod.APIDataProvider),
//   {
//     ssr: false,
//   },
// );

const APP_NAME = 'The Vault - Docs';
const APP_DEFAULT_TITLE = 'The Vault';
const APP_TITLE_TEMPLATE = 'The Vault';
const APP_DESCRIPTION = 'Documentation for Usage and Version Log';

export const metadata = {
  applicationName: APP_NAME,
  title: {
    default: APP_DEFAULT_TITLE,
    template: APP_TITLE_TEMPLATE,
  },
  description: APP_DESCRIPTION,
  manifest: '/manifest.json',
  appleWebApp: {
    capable: true,
    statusBarStyle: 'default',
    title: APP_DEFAULT_TITLE,
    // startUpImage: [],
  },
  formatDetection: {
    telephone: false,
  },
  openGraph: {
    type: 'website',
    siteName: APP_NAME,
    title: {
      default: APP_DEFAULT_TITLE,
      template: APP_TITLE_TEMPLATE,
    },
    description: APP_DESCRIPTION,
  },
  twitter: {
    card: 'summary',
    title: {
      default: APP_DEFAULT_TITLE,
      template: APP_TITLE_TEMPLATE,
    },
    description: APP_DESCRIPTION,
  },
};

export const viewport = {
  themeColor: '#FFFFFF',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
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
      </head>
      <body>
        <NextTopLoader color="#74b570" />
        <StyledComponentsRegistry>
          <Globalstyle />
          <Typography />
          {children}
        </StyledComponentsRegistry>
      </body>
    </html>
  );
}
