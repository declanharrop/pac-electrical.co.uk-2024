'use client';

import styled from 'styled-components';

const RecruitmentTemplateStyles = styled.div`
  max-width: 1200px;
  padding: 0 10px;
  text-align: left;
  margin: 0 auto;
  .content {
    max-width: 1000px;
    margin: 0 auto 50px;
    padding: 10px;
    p {
      margin: 20px 0;
    }
    h2 {
      margin: 20px 0 10px 0;
    }
    h4 {
      margin-top: 30px;
      color: var(--green);
    }
    img {
      width: calc(100% - 20px);
      height: auto;
      max-height: 600px;
      margin: 20px 10px;
      text-align: center;
      object-fit: cover;
      object-position: 'center center';
    }
    li {
        position: relative;
        list-style: none;
        border-left: var(--green) 3px solid;
        padding-left: 12px;
        margin: 20px 0;
        text-transform: none;
        div {
          line-height: 1.6;
        }
      }
    }
  }
  .detail-section {
    margin: 50px 0;
    padding: 10px;
    display: grid;
    gap: 10px;
    grid-template-columns: repeat(4, 1fr);
    .detail {
      h5 {
        letter-spacing: 0.05rem;
        font-size: 1.6rem;
        transform-text: uppercase;
        color: var(--green);
      }
      h4 {
        font-weight: 600;
        letter-spacing: 0.1rem;
      }
    }
    .products {
      grid-column: span 2;
    }
  }
  @media screen and (max-width: 1000px) {
    .detail-section {
      grid-template-columns: repeat(2, 1fr);
    }
  }
`;

export default RecruitmentTemplateStyles;
