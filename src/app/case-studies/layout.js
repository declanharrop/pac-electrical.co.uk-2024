export const metadata = {
  title: 'Case Studies - Power & Control Ltd',
  description:
    'Explore case studies showcasing our solar installations, energy storage, and EV charger projects. Learn how we help homeowners and businesses save money and reduce their environmental impact.',
  url: 'https://pac-electrical.co.uk/case-studies',
  image: '/images/page-images/renewables/pac-24-barn.webp',
  openGraph: {
    title: 'Case Studies - Power & Control Ltd',
    description:
      'Explore case studies showcasing our solar installations, energy storage, and EV charger projects. Learn how we help homeowners and businesses save money and reduce their environmental impact.',
    url: 'https://pac-electrical.co.uk/case-studies',
    type: 'website',
    images: [
      {
        url: '/images/page-images/renewables/pac-24-barn.webp',
      },
    ],
  },
};

export default function CaseStudiesLayout({ children }) {
  return <section>{children}</section>;
}
