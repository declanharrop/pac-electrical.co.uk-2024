import React from 'react';

export default function ReviewsDisplay({ data, sector }) {
  const reviews = data?.reviews;
  return (
    <div className="reviews-display">
      <h3>
        {sector === 'Electrical' && 'Our Electrical Reviews'}
        {sector === 'EVCharging' && 'Our EV Charging Reviews'}
        {sector === 'Renewable' && 'Our Renewables Reviews'}
      </h3>
      {reviews && (
        <>
          {reviews.map((review) => (
            <div className="review" key={review.id}>
              <p className="text">"{review.content}"</p>
              <p className="text">
                <b>
                  {review.sector === 'Electrical' && 'Electrical'}
                  {review.sector === 'EVCharging' && 'EV Charging'}
                  {review.sector === 'Renewable' && 'Renewables'}
                </b>
              </p>
              {review.stars && (
                <div className="stars-section">
                  {review.stars === 'five' && (
                    <div className="stars">
                      <img
                        src="/icons/star.svg"
                        alt="Power and Control Review Star"
                      />
                      <img
                        src="/icons/star.svg"
                        alt="Power and Control Review Star"
                      />
                      <img
                        src="/icons/star.svg"
                        alt="Power and Control Review Star"
                      />
                      <img
                        src="/icons/star.svg"
                        alt="Power and Control Review Star"
                      />
                      <img
                        src="/icons/star.svg"
                        alt="Power and Control Review Star"
                      />
                    </div>
                  )}
                </div>
              )}
              <h5>{review.name}</h5>
              <p>
                <i>{review.source}</i>
              </p>
            </div>
          ))}
        </>
      )}
    </div>
  );
}
