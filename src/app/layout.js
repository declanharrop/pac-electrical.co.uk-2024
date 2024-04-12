import NextTopLoader from 'nextjs-toploader';
import { ApolloWrapper } from '../Utils/ApolloWrapper';
import StyledComponentsRegistry from '../Utils/registry';
import GlobalStyles from '../Styles/global.styles';
import Typography from '../Styles/typography.styles';
import { APIDataProvider } from '../Context/APIDataContext';
import { MenuProvider } from '../Context/MenuContext';
import Header from '@/Components/Header/Header';

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
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="true"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Manrope:wght@200..800&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        <NextTopLoader color="#74b570" />
        <StyledComponentsRegistry>
          <GlobalStyles />
          <Typography />
          <ApolloWrapper>
            <MenuProvider>
              <Header />
              <APIDataProvider>{children}</APIDataProvider>
            </MenuProvider>
          </ApolloWrapper>
        </StyledComponentsRegistry>
      </body>
    </html>
  );
}
