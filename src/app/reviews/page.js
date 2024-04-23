import ReviewSearch from '@/Components/Reviews/ReviewSearch';
import { ReviewStyles } from '@/Components/Reviews/Reviews.styles';

export const metadata = {
  title: '',
  description: '',
  url: 'https://pac-electrical.co.uk/',
  image: '/images/page-images/renewables/pac-24-barn.webp',
  openGraph: {
    title: '',
    description: '',
    url: 'https://pac-electrical.co.uk/',
    type: 'website',
    images: [
      {
        url: '/images/page-images/renewables/pac-24-barn.webp',
      },
    ],
  },
};
export default function Reviews() {
  return (
    <>
      <ReviewStyles>
        <h1>Our Reviews</h1>
        <ReviewSearch />
      </ReviewStyles>
    </>
  );
}
