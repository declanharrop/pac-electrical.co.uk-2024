import { gql, useLazyQuery, useQuery } from '@apollo/client';
import { useState } from 'react';
import ReviewsDisplay from './ReviewsDisplay';

export const ALL_REVIEWS = gql`
  query Reviews {
    reviews {
      id
      name
      sector
      source
      stars
      content
    }
  }
`;
export const SEARCH_REVIEWS = gql`
  query Reviews($sector: Tag) {
    reviews(where: { sector: $sector }, first: 30) {
      id
      name
      sector
      source
      stars
      content
    }
  }
`;
export default function ReviewSearch() {
  // const [reviewData, setReviewData] = useState(null);

  const [filterState, setFilterState] = useState({
    sector: '',
    name: '',
    stars: '',
  });

  const [searchReviews, { data, error, loading }] = useLazyQuery(
    SEARCH_REVIEWS,
    {
      variables: {
        sector: filterState.sector,
        name: filterState.name,
        stars: filterState.stars,
      },
    }
  );

  const {
    data: allReviews,
    error: allError,
    loading: allLoading,
  } = useQuery(ALL_REVIEWS);

  const runFilterChange = (e) => {
    setFilterState({ ...filterState, sector: e.target.value });
    searchReviews();
  };

  const ReviewDisplay = () => {
    if (loading) return <p>Loading...</p>;
    if (allLoading) return <p>Loading...</p>;
    if (error) return <p>Error: {error.message}</p>;
    if (allError) return <p>Error: {allError.message}</p>;
    if (data) return <ReviewsDisplay data={data} sector={filterState.sector} />;
    if (allReviews)
      return <ReviewsDisplay data={allReviews} sector="All Reviews" />;
    if (!data) return <p>No Reviews Found</p>;
  };

  return (
    <>
      <div className="review-search">
        <h4>Select a Sector to see specific reviews</h4>
        <form
          style={{ margin: '20px 20px 0', padding: '0' }}
          onSubmit={(e) => {
            e.preventDefault();
          }}
        >
          <select
            id="sector"
            name="sector"
            onChange={(e) => {
              runFilterChange(e);
            }}
          >
            <option value="" disabled selected>
              Sector?
            </option>
            <option value="Electrical">Electrical</option>
            <option value="Renewable">Renewables</option>
            <option value="EVCharging">EV Charging</option>
          </select>
        </form>
      </div>
      <ReviewDisplay />
    </>
  );
}
