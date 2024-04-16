'use client';

import styled from 'styled-components';

export const ReviewStyles = styled.div`
  margin-top: 140px;
  .review-search {
    margin-top: 30px;
    select {
      padding: 6px 20px;
      border: 1px solid var(--navy);
      border-radius: 10px;
      font-size: 1.8rem;
      font-weight: 500;
      font-family: graphie;
    }
  }
  .reviews-display {
    margin: 0px auto 50px;
    max-width: 800px;
    padding: 20px;
    h2 {
      margin-bottom: 60px;
    }
    .review {
      margin: 40px 0;
      .stars-section {
        margin-top: 14px;
        .stars {
          display: flex;
          justify-content: center;
          align-items: center;
          gap: 10px;
          img {
            height: 30px;
            width: 30px;
          }
        }
      }
      .text {
        font-weight: 400;
      }
      h5 {
        font-weight: 500;
        margin-top: 10px;
        margin-bottom: -4px;
      }
    }
    .pagination {
      margin: 60px auto -30px;
      button {
        background: var(--navy);
        color: white;
        padding: 4px 14px;
        margin: 0px 16px;
        p {
          font-family: graphie;
          font-weight: 500;
        }
        .prev {
          margin-left: 0px;
          margin-right: 10px;
        }

        span {
          font-weight: 800;
          margin-left: 10px;
        }
      }
    }
  }
`;
