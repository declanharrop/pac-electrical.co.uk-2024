import styled from 'styled-components';

export const LatestNewsHomeStyles = styled.div`
  border-top: 2px solid var(--light-grey);
  padding: 60px 10px;
  .feature-section {
    position: relative;
    max-width: 1400px;
    margin: 20px auto;
    .image {
      img {
        width: 100%;
        height: 60vh;
        min-height: 300px;
        max-height: 600px;
        object-fit: cover;
      }
    }
    .overlay {
      position: absolute;
      cursor: pointer;
      top: 0;
      left: 0;
      display: flex;
      justify-content: flex-start;
      align-items: flex-end;
      padding: 6px 10px;
      width: 100%;
      height: 100%;
      &:hover {
        background: rgba(255, 255, 255, 0.3);
      }
    }
  }
  .text {
    text-align: left;
    h1 {
      position: relative;
      line-height: 5.2rem;
      font-size: 3.2rem;
      font-weight: 700;
      letter-spacing: 0.1rem;
    }
    h1 span {
      font-size: 3.2rem;
      position: relative;
      padding: 2px 4px 4px;
      background: white;
      -webkit-box-decoration-break: clone;
      box-decoration-break: clone;
    }
    h3 {
      line-height: 4.2rem;
      font-size: 1.8rem;
      font-weight: 700;
      letter-spacing: 0.1rem;
      color: white;
    }
    h3 span {
      position: relative;
      padding: 2px 4px 4px;
      background: var(--navy);
      -webkit-box-decoration-break: clone;
      box-decoration-break: clone;
    }
  }
  @media screen and (max-width: 800px) {
    .text {
      h1 {
        position: relative;
        line-height: 3rem;
        font-size: 2.6rem;
        font-weight: 700;
        letter-spacing: 0.1rem;
      }
      h1 span {
        position: relative;
        font-size: 2.2rem;
        padding: 0px 6px 4px;
        background: white;
        -webkit-box-decoration-break: clone;
        box-decoration-break: clone;
      }
    }
  }
`;
