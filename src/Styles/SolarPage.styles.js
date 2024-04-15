'use client';

import styled from 'styled-components';

const SolarPageStyles = styled.div`
  .lower-buttons {
    button {
      font-size: 1.6rem;
      margin: 4px 10px;
    }
  }
  .ev-buttons {
    margin-top: 20px;
    button {
      font-size: 1.5rem;
    }
  }
  .overlay-content {
    h2 {
      margin-bottom: 20px;
    }
  }

  @media screen and (max-width: 600px) {
    .overlay-content {
      img {
        max-width: 140px;
      }
      h1,
      .header {
        font-size: 3rem;
      }
      h2 {
        font-size: 2rem;
        margin-bottom: 0px;
      }
    }
    .lower-buttons {
      .btns {
        margin-top: 10px;
      }
      margin-top: 10px;
      h3 {
        margin: 20px 0 0;
        padding: 0;
      }
      button {
        letter-spacing: 0.15rem;
      }
    }
    .ev-buttons {
      button {
        line-height: 2rem;
        letter-spacing: 0.15rem;
      }
    }
  }
`;

export default SolarPageStyles;
