import ReviewsDisplay from './ReviewsDisplay';
import { getClient } from '@/Lib/client';
import { ALL_REVIEWS } from '@/Lib/queries';

export default async function ReviewSearch() {
  const client = getClient();

  const { data: allReviews } = await client.query({
    query: ALL_REVIEWS,
  });

  // const [searchReviews, { data, error, loading }] = useLazyQuery(
  //   SEARCH_REVIEWS,
  //   {
  //     variables: {
  //       sector: filterState.sector,
  //       name: filterState.name,
  //       stars: filterState.stars,
  //     },
  //   },
  // );
  return <ReviewsDisplay data={allReviews} sector="All Reviews" />;
}
