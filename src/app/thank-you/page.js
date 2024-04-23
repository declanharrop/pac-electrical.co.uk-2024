import Hero from '@/Components/Hero/Hero';

export const metadata = {
  title: 'Thank You - Power & Control Ltd',
  description:
    'Thank you for requesting a callback - Lets continue your journey towards a more sustainable future',
  url: 'https://pac-electrical.co.uk/thank-you',
  image: '/images/page-images/renewables/pac-24-barn.webp',
  openGraph: {
    title: 'Thank You - Power & Control Ltd',
    description:
      'Thank you for requesting a callback - Lets continue your journey towards a more sustainable future',
    url: 'https://pac-electrical.co.uk/thank-you',
    type: 'website',
    images: [
      {
        url: '/images/page-images/renewables/pac-24-barn.webp',
      },
    ],
  },
};
export default function ThankYou() {
  return (
    <Hero height="40vh" src="/images/page-images/renewables/pac-24-barn.webp">
      <div className="decorated-title">
        <h1>Thank You</h1>
        <p>
          Thank you for requesting a callback - Lets continue your journey
          towards a more sustainable future
        </p>
      </div>
    </Hero>
  );
}
