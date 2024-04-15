import styled from 'styled-components';

export const FeaturedStoryStyles = styled.div`
  .inner {
    box-shadow: 0 0 20px 0 rgba(0, 0, 0, 0.05);
    position: relative;
  }
  .header-image {
    position: relative;
    width: 100%;
    height: 50vh;
    min-height: 400px;
    max-height: 600px;
  }
  .overlay {
    position: absolute;
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
  .date {
    position: absolute;
    top: 10px;
    right: 10px;
    p {
      line-height: 4.2rem;
      font-size: 1.8rem;
      font-weight: 700;
      letter-spacing: 0.1rem;
      color: white;
    }
    p span {
      position: relative;
      padding: 2px 4px 4px;
      background: var(--green);
      -webkit-box-decoration-break: clone;
      box-decoration-break: clone;
    }
  }
  @media screen and (max-width: 800px) {
    .text {
      h1 {
        position: relative;
        line-height: 4.2rem;
        font-size: 2.6rem;
        font-weight: 700;
        letter-spacing: 0.1rem;
      }
      h1 span {
        position: relative;
        font-size: 2.6rem;
        padding: 0px 6px 4px;
        background: white;
        -webkit-box-decoration-break: clone;
        box-decoration-break: clone;
      }
    }
    .header-image {
      height: 60vh;
    }
  }
`;

export const ThreeStorySectionStyles = styled.div`
  .grid-container {
    margin: 0 auto;
    max-width: 1400px;
    padding: 20px;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    gap: 20px;
  }
  .story {
    .image {
      position: relative;
      width: 100%;
      height: 20vh;
      min-height: 200px;
      max-height: 260px;
      box-shadow: 0 0 20px 0 rgba(0, 0, 0, 0.05);
    }
    .text {
      margin: 10px 0;
      text-align: left;
    }
    .page {
      position: relative;
      display: flex;
      .elec {
        color: var(--navy);
        border-bottom: 3px solid var(--navy);
      }
      .ev {
        color: var(--neon);
        border-bottom: 3px solid var(--neon);
      }
      h4 {
        color: var(--green);
        font-size: 1.8rem;
        font-weight: 600;
        letter-spacing: 0.2rem;
        padding-bottom: 6px;
        border-bottom: 3px solid var(--green);
      }
    }
    .title {
      padding-top: 4px;
      h2 {
        font-size: 2rem;
        letter-spacing: 0.05rem;
      }
    }
  }
  @media screen and (max-width: 700px) {
    .grid-container {
      grid-template-columns: 1fr;
      gap: 50px;
    }
    .story {
      .image {
        height: 40vh;
      }
    }
  }
`;

export const GeneralStorySectionStyles = styled.div`
  .container {
    max-width: 1000px;
    margin: 0 auto;
    padding: 30px 10px;
    /* display: flex; */
  }
  .story {
    display: grid;
    grid-template-columns: 1fr 3fr;
    padding: 10px 0;
    gap: 8px;
  }
  .image {
    position: relative;
    width: 100%;
    height: 100%;
  }
  .text {
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: center;
    text-align: left;
    padding: 6px 0;
    min-height: 100px;
    h4 {
      font-size: 1.4rem;
      letter-spacing: 0.05rem;
    }
    h3 {
      text-transform: none;
      color: var(--blue);
      font-size: 2rem;
      font-weight: 500;
      letter-spacing: 0.05rem;
    }
  }
  @media screen and (min-width: 600px) {
    .container {
      display: grid;
      grid-template-columns: 1fr 1fr;
    }
  }
`;
