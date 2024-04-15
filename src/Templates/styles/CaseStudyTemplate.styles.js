'use client';

import styled from 'styled-components';

const CaseStudyTemplateStyles = styled.div`
  max-width: 1200px;
  padding: 0 10px;
  text-align: left;
  margin: 0 auto;
  .iframe-section {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0 auto;
    iframe {
      min-height: 400px;
      width: 100%;
      max-width: 800px;
    }
    @media screen and (max-width: 600px) {
      iframe {
        min-height: 300px;
      }
    }
  }
  .content {
    max-width: 1000px;
    margin: 0 auto 50px;
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
    a {
      color: var(--green);
      text-decoration: underline;
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

export default CaseStudyTemplateStyles;
