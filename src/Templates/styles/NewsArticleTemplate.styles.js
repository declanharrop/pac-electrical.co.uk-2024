'use client';

import styled from 'styled-components';

const NewsArticleTemplateStyles = styled.div`
  margin-top: 140px;
  margin-bottom: 50px;
  .hero {
    position: relative;
    margin: 0 auto 30px;
    height: 60vh;
    min-height: 400px;
    width: 100vw;
    max-width: 1200px;
    max-height: 700px;
  }
  .article {
    max-width: 1000px;
    margin: 0 auto;
    text-align: left;
    padding: 0 10px;
    .frame-placer {
      width: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
      margin-bottom: 40px;
      iframe {
        width: 70%;
        height: 400px;
      }
    }
    @media screen and (max-width: 800px) {
      .frame-placer {
        iframe {
          height: 300px;
        }
      }
    }
    @media screen and (max-width: 600px) {
      .frame-placer {
        iframe {
          height: 300px;
          width: 100%;
        }
      }
    }
    .divider {
      background-color: var(--green);
    }
    .title {
      margin: 20px 0;
      .sm-grey {
        padding-top: 8px;
      }
      .flex {
        justify-content: flex-start;
        padding: 0;
        align-items: center;
        gap: 0 20px;
      }
      h5 {
        text-transform: none;
        font-size: 2rem;
        color: var(--grey);
      }
      .renew {
        color: var(--green);
        border-bottom: 3px solid var(--green);
      }
      .elec {
        color: var(--navy);
        border-bottom: 3px solid var(--navy);
      }
      .ev {
        color: var(--neon);
        border-bottom: 3px solid var(--neon);
      }
      h3 {
        display: inline-block;
        margin: 10px 0 0;
        font-size: 2rem;
        padding-bottom: 4px;
      }
    }
    .article-content {
      margin: 30px 0;
      h2 {
        margin: 30px 0 10px 0;
      }
      h3 {
        margin: 30px 0 10px 0;
      }
      h5 {
        margin: 30px 0 -4px 0;
        text-transform: none;
        font-weight: 700;
      }
      p {
        margin-top: 14px;
        a {
          color: var(--green);
          text-decoration: underline;
          text-underline-offset: 4px;
        }
      }
      a:hover {
        color: var(--green);
      }

      ul {
        position: relative;
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
  @media screen and (max-width: 900px) {
    .article {
      .title {
        h3 {
          font-size: 1.8rem;
        }
      }
    }
  }
`;

export default NewsArticleTemplateStyles;
