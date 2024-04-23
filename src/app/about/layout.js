export const metadata = {
  title: 'About - Power & Control Ltd',
  description:
    'Power & Control Ltd: Solar installations that save you money, boost sustainability, and power a brighter future. Get to know us and our values on our About page.',
  url: 'https://pac-electrical.co.uk/about',
  image: '/images/page-images/ev-charging/evchex1a.jpg',
  openGraph: {
    title: 'About - Power & Control Ltd',
    description:
      'Power & Control Ltd: Solar installations that save you money, boost sustainability, and power a brighter future. Get to know us and our values on our About page.',
    url: 'https://pac-electrical.co.uk/about',
    type: 'website',
    images: [
      {
        url: '/images/page-images/ev-charging/evchex1a.jpg',
      },
    ],
  },
};

export default function AboutLayout({ children }) {
  return <section>{children}</section>;
}
