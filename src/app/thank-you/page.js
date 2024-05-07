import ExploreBlock from '@/Components/Blocks/Explore';
import StandardHeroVideo from '@/Components/Hero/StandardHeroVideo';

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
    <>
      <StandardHeroVideo
        videomp4="pac-home-video-new.mp4"
        videowebm="pac-solarpage-video.webm"
        overlayColor="var(--green-50)"
        height="50vh"
      >
        <div className="decorated-header">
          <h1>Thank you</h1>
          <p>
            Thank you for requesting a callback - Lets continue your journey
            towards a more sustainable future.
          </p>
        </div>
      </StandardHeroVideo>
      <ExploreBlock />
    </>
  );
}
