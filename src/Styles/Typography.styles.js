import { createGlobalStyle } from 'styled-components';

// Good Times available weights:
// 400
// 500
// 700

// Graphie available weights:
// 200
// 300
// 400
// 400i
// 500
// 600
// 700

const Typography = createGlobalStyle`
  h1 {
    font-family: 'good-times', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    font-weight: 500;
    letter-spacing: 0.3rem;
    font-size: 4rem;
    line-height: 1.2;
    text-transform: uppercase;
  }
  .decorated-title {
    max-width: 1000px;
    h1 {
      margin: -10px 0 0 20px;
    }
    p {
      font-size: 2rem; 
      margin: 10px 0 -4px 20px;
    }
    border-left: 2px solid white;
  }
  h2 {
    font-family: 'good-times', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    font-weight: 500;
    letter-spacing: 0.3rem;
    font-size: 3.6rem;
    line-height: 1.2;
    text-transform: uppercase;
  }
  h3 {
    font-family: 'good-times', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    font-weight: 400;
    letter-spacing: 0.2rem;
    font-size: 2.6rem;
    line-height: 1.2;
    text-transform: uppercase;
  }
  h4 {
    margin: 10px 0;
    font-size: 2.2rem;
    letter-spacing: 0.3rem;
    line-height: 1.4;
    font-weight: 400;
    text-transform: uppercase;
  }
  h5 {
    margin: 10px 0;
    letter-spacing: 0.2rem;
    font-size: 2rem;
    line-height: 1.4;
    font-weight:400;
    text-transform: uppercase;
  }
  a {
    font-family: 'Urbanist', sans-serif;
    letter-spacing: 0.1rem;
  }
  p {
    letter-spacing: 0.12rem;
    line-height: 1.5;
    font-size: 1.7rem;
    font-weight: 500;
  }
  ul {
    list-style-type: none;
  }
  span {
    font-size: 1.8rem;
    line-height: 1.6;
  }
  li {
    font-weight: 500;
    font-family: "Urbanist", -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    /* text-transform: uppercase; */
    list-style-type: none;
    letter-spacing: 0.1rem;
  }
  .sm-grey {
    color: var(--grey);
    font-size: 1.5rem;
    margin: 10px 0;
    letter-spacing: 0.03rem;
    font-weight: 500;
  }
  .large-text {
    font-size: 2.2rem;
    max-width: 800px;
    margin: 0 auto;
    a {
      color: var(--green);
      &:hover {
        color: var(--neon);
      }
    }
  }
  @media screen and (max-width: 900px) {
    h1 {
      font-size: 2.6rem;
      letter-spacing: 0.1rem;
    }
    h2 {
      font-size: 2.4rem;
    }
    h3 {
      font-size: 2.2rem;
    }
    h4 {
      font-size: 2rem;
    }
    h5 {
      font-size: 1.7rem;
    }
    p {
      font-size: 1.6rem;
    }
    span {
      font-size: 1.8rem;
    }
  }
`;

export default Typography;
