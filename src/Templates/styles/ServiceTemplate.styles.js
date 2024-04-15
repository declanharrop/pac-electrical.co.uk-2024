'use client';

import styled from 'styled-components';

const ServiceTemplateStyles = styled.div`
  .accreds {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    gap: 20px;
    margin: 20px auto;
    img {
      max-width: 100px;
    }
  }
  .benefits-grid-inner {
    h3 {
      margin: 0 0 30px;
    }
    .item {
      position: relative;
      padding: 20px;
      border-radius: 2px;

      img {
        height: 250px;
      }
      h3,
      p {
        color: white;
      }
      h3 {
        margin: 20px 0 10px;
        font-size: 2rem;
      }
      .modal-button {
        position: absolute;
        width: calc(100% - 40px);
        bottom: 20px;
        margin: 20px 0 0;
        /* background: green; */
      }
      .benefits-list {
        color: white;
        padding: 30px;
        h5 {
          font-size: 2rem;
          font-weight: 500;
          padding-bottom: 5px;
          margin-bottom: 20px;
        }
        li {
          margin-bottom: 5px;
          list-style-type: disc;
          list-style-position: inside;
          text-transform: none;
          line-height: 2rem;
        }
      }
    }
  }
  @media screen and (max-width: 700px) {
    .benefits-grid-inner {
      .item {
        height: 100%;
        .benefits-list {
          position: relative;
          top: 0;
          width: 100%;
        }
      }
    }
  }
  .full-width-image {
    position: relative;
    height: 60vh;
    min-height: 500px;
    max-height: 600px;
    width: 100%;
  }
  .why-us {
    padding: 150px 10px 50px;
    .why-us-inner {
      h2 {
        margin-bottom: 30px;
      }
      p {
        margin-bottom: 10px;
      }
      .buttons {
        margin-top: 30px;
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        align-items: center;
        gap: 30px;
      }
      margin: 0 auto;
      max-width: 1000px;
      padding: 0 20px;
    }
  }
`;

export default ServiceTemplateStyles;
