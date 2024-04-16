import ReviewSearch from '@/Components/Reviews/ReviewSearch';
import { ReviewStyles } from '@/Components/Reviews/Reviews.styles';

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
