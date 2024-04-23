export const metadata = {
  title: 'News - Power & Control Ltd',
  description:
    'Derby solar news, solar grants UK, solar project updates, solar installers near me.  Stay informed with Power & Control Ltd.',
  url: 'https://pac-electrical.co.uk/news',
  image: '/images/page-images/renewables/pac-24-barn.webp',
  openGraph: {
    title: 'News - Power & Control Ltd',
    description:
      'Derby solar news, solar grants UK, solar project updates, solar installers near me.  Stay informed with Power & Control Ltd.',
    url: 'https://pac-electrical.co.uk/news',
    type: 'website',
    images: [
      {
        url: '/images/page-images/renewables/pac-24-barn.webp',
      },
    ],
  },
};

export default function NewsLayout({ children }) {
  return <section>{children}</section>;
}
