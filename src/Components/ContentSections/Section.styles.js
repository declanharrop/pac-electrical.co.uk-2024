'use client';

import styled from 'styled-components';

export const TextOverlapSectionStyles = styled.section`
  padding: 100px 10px;
  p {
    margin-top: 10px;
  }
  h2 {
    margin-bottom: 20px;
  }
  .to-section {
    max-width: 1400px;
    display: grid;
    grid-template-columns: repeat(10, 1fr);
    margin: 0 auto;
  }
  .first {
    grid-column: 1 / 7;
    grid-row: 1 / 2;
    img {
      width: 100%;
      min-height: 440px;
      object-fit: cover;
    }
  }
  .second {
    grid-column: 6 / 11;
    grid-row: 1 / 2;
    display: flex;
    justify-content: center;
    align-items: center;
    .second-content {
      background: white;
      padding: 30px;
    }
  }
  @media screen and (max-width: 1120px) {
    .first {
      grid-column: 1 / 6;
    }
    .second {
      grid-column: 5 / 11;
    }
  }
  @media screen and (max-width: 950px) {
    .first {
      grid-column: 1 / 5;
    }
    .second {
      grid-column: 4 / 11;
    }
  }
  @media screen and (max-width: 750px) {
    padding: 50px 10px;
    .to-section {
      grid-template-columns: 1fr;
      grid-template-rows: repeat(10 1fr);
    }
    .first {
      grid-column: 1 / 2;
      grid-row: 1 / 6;
    }
    .second {
      grid-column: 1 /2;
      grid-row: 5 / 11;
      padding: 10px;
    }
  }
`;
export const ReverseTextOverlapSectionStyles = styled.section`
  padding: 100px 10px;
  p {
    margin-top: 10px;
  }
  h2 {
    margin-bottom: 20px;
  }
  .to-section {
    max-width: 1400px;
    display: grid;
    grid-template-columns: repeat(10, 1fr);
    margin: 0 auto;
  }
  .first {
    grid-column: 5 / 11;
    grid-row: 1 / 2;
    img {
      width: 100%;
      min-height: 440px;
      object-fit: cover;
    }
  }
  .second {
    grid-column: 1 / 6;
    grid-row: 1 / 2;
    display: flex;
    justify-content: center;
    align-items: center;
    .second-content {
      background: white;
      padding: 30px;
    }
  }
  @media screen and (max-width: 1120px) {
    .first {
      grid-column: 5 / 11;
    }
    .second {
      grid-column: 1 / 6;
    }
  }
  @media screen and (max-width: 950px) {
    .first {
      grid-column: 4 / 11;
    }
    .second {
      grid-column: 1 / 5;
    }
  }
  @media screen and (max-width: 750px) {
    padding: 50px 10px;
    .to-section {
      grid-template-columns: 1fr;
      grid-template-rows: repeat(10 1fr);
    }
    .first {
      grid-column: 1 / 2;
      grid-row: 1 / 6;
    }
    .second {
      grid-row: 5 / 11;
      grid-column: 1 /2;
      padding: 10px;
    }
  }
`;

export const VideoSectionStyles = styled.section`
  p {
    margin-top: 10px;
  }
  iframe {
    margin: 30px auto;
    width: 90vw;
    max-width: 700px;
    height: 400px;
  }
  @media screen and (max-width: 600px) {
    iframe {
      height: 300px;
    }
  }
  @media screen and (max-width: 450px) {
    iframe {
      height: 200px;
    }
  }
`;
