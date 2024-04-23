export const metadata = {
  title: 'Request a callback - Power & Control Ltd',
  description:
    'Request a callback - Lets continue your journey towards a more sustainable future',
  url: 'https://pac-electrical.co.uk/request-callback',
  image: '/images/page-images/renewables/pac-24-barn.webp',
  openGraph: {
    title: 'Request a callback - Power & Control Ltd',
    description:
      'Request a callback - Lets continue your journey towards a more sustainable future',
    url: 'https://pac-electrical.co.uk/request-callback',
    type: 'website',
    images: [
      {
        url: '/images/page-images/renewables/pac-24-barn.webp',
      },
    ],
  },
};

export default function CallbackLayout({ children }) {
  return <section>{children}</section>;
}
