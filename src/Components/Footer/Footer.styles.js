import styled from 'styled-components';

export const FooterStyles = styled.div`
  position: relative;
  border-top: solid 2px var(--light-grey);
  margin-top: 30px;
  padding-top: 30px;
  .stripe {
    width: 100%;
    height: 10px;
    /* background-color: var(--navy); */
  }
  .lower {
    max-width: 600px;
    margin: 40px auto 10px;
    padding: 10px;
    color: gray;
    p {
      font-size: 1.4rem;
    }
    .dhweblogo {
      margin-top: 20px;
      img {
        width: 80px;
      }
    }
  }
  .signup-form {
  }
  .form-embed {
    width: 100%;
    padding: 0 10px;
    min-height: 300px;
    position: relative;
  }
`;

export const SitemapStyles = styled.div`
  background: var(--navy);
  padding: 50px 0;
  color: white;
  h3 {
    margin-bottom: 30px;
  }
  .sitemap-grid {
    max-width: 1000px;
    padding: 0 10px;
    grid-gap: 10px;
    margin: 0px auto;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
  }
  .section {
    text-align: left;
    margin-top: 10px;
    h5 {
      margin-bottom: 16px;
      letter-spacing: 0.1rem;
      font-size: 1.7rem;
      font-weight: 600;
      border-bottom: 2px solid white;
      display: inline-block;
    }
    .links {
      display: flex;
      flex-direction: column;
      a {
        color: white;
        font-size: 1.6rem;
        font-weight: 400;
        margin-bottom: 8px;
        &:hover {
          color: var(--green);
          text-decoration: underline;
        }
      }
    }
  }

  @media screen and (max-width: 900px) {
    .sitemap-grid {
      grid-template-columns: 1fr 1fr;
    }
  }
  @media screen and (max-width: 440px) {
    .sitemap-grid {
      grid-template-columns: 1fr;
    }
  }
`;

export const LogoSectionStyles = styled.div`
  .logo-container {
    max-width: 1200px;
    margin: 70px auto;
    padding: 10px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    gap: 20px;
  }
  img {
    width: 260px;
  }
  @media screen and (max-width: 900px) {
    img {
      width: 200px;
    }
  }
  @media screen and (max-width: 680px) {
    .logo-container {
      gap: 10px;
      margin: 40px auto;
    }
    img {
      width: 140px;
    }
  }
  @media screen and (max-width: 500px) {
    img {
      width: 90px;
    }
  }
`;

export const ContactStyles = styled.div`
  max-width: 1000px;
  margin: 50px auto 20px;
  .accreds {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    gap: 20px;
    margin-top: 50px;
    img {
      max-width: 100px;
    }
  }
  .contact-grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 20px;
    width: 100%;
    text-align: left;
    h3 {
      font-size: 2rem;
      margin-bottom: 10px;
    }
  }
  .address {
    padding: 10px;
    background: rgba(0, 0, 0, 0.03);
    border-radius: 3px;
  }
  .contact-info {
    background: rgba(0, 0, 0, 0.03);
    border-radius: 3px;
    padding: 10px;
    .title {
      font-weight: 600;
      font-size: 2.2rem;
      letter-spacing: 0.2rem;
    }
    a {
      &:hover {
        text-decoration: underline;
        color: var(--green);
      }
    }
    p {
      font-size: 2rem;
      letter-spacing: 0rem;
    }
  }
  @media screen and (max-width: 500px) {
    .contact-grid {
      grid-template-columns: 1fr;
    }
  }
`;

export const LatestStoryStudyStyles = styled.section`
  border-top: 2px solid var(--light-grey);
  padding: 0 10px;
  .content {
    margin: 20px auto;
    max-width: 1000px;
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 10px;
    h3 {
      margin-bottom: 20px;
    }
    .story,
    .study {
      .story-content,
      .study-content {
        position: relative;
      }
      img {
        position: relative;
        width: 100%;
        max-height: 260px;
        object-fit: cover;
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
      .title {
        text-align: left;
        h1 {
          position: relative;
          line-height: 3rem;
          font-size: 2rem;
          font-weight: 700;
          letter-spacing: 0.1rem;
        }
        h1 span {
          font-size: 1.8rem;
          position: relative;
          padding: 2px 4px 4px;
          background: white;
          -webkit-box-decoration-break: clone;
          box-decoration-break: clone;
        }
      }
    }
  }
  @media screen and (max-width: 675px) {
    .content {
      grid-template-columns: 1fr;
      grid-gap: 30px;
    }
  }
`;
