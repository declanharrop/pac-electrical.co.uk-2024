import styled from 'styled-components';

export const CaseStudySliderStyles = styled.div`
  /* max-width: 1200px; */
  margin: 0 auto;
  .swiper-slide {
    width: 90vw;
    max-width: 800px;
    position: relative;
  }
  .swiper-button-prev {
    color: var(--green);
  }
  .swiper-button-next {
    color: var(--green);
  }
  img {
    height: 600px;
    width: 100%;
    max-height: 70vh;
    object-fit: cover;
  }
`;
