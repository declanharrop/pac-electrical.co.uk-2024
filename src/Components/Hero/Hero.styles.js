import styled from 'styled-components';

const HeroStyles = styled.div`
  position: relative;
  min-height: 500px;
  max-height: 700px;
  .hero-image {
    position: relative;
    width: 100vw;
    height: 100%;
    background: lightgray;
    overflow: hidden;
  }
  .overlay {
    min-height: 500px;
    max-height: 700px;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    .hero-content {
      padding: 120px 10px 10px;
      height: 100%;
      width: 100%;
      align-items: center;
      justify-content: flex-start;
      display: flex;
      max-width: 1400px;
      text-align: left;
      margin: 0 auto;
      .standard-title {
        button {
          margin-top: 20px;
        }
        h1 {
          margin-top: -11px;
          max-width: 900px;
        }
        h5 {
          font-weight: 600;
          text-transform: none;
          max-width: 800px;
          letter-spacing: 0.1rem;
        }
        border-left: 3px solid white;
        padding-left: 20px;
      }
    }
  }
`;

export default HeroStyles;
