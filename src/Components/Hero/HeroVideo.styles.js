'use client';

import styled from 'styled-components';

export const HeroVideoStyles = styled.div`
  position: absolute;
  min-height: 100%;
  width: 100%;
  .overlay-content {
    padding: 20px;
    img {
      max-width: 140px;
      width: 60vw;
      margin-bottom: 20px;
    }
    h1 {
      color: white;
    }
    h4 {
      margin-top: 30px;
      font-weight: 500;
    }
  }
  .overlay {
    height: 100%;
    width: 100%;
    position: absolute;
    background: var(--neon-50);
    z-index: 10;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .video {
    background-repeat: no-repeat;
    background-attachment: fixed;
    background-position: center;
    background-size: cover;
    display: flex;
    justify-content: center;
    overflow: hidden;
    z-index: -10;
    top: 0;
    height: 100%;
    width: 100%;
    video {
      position: absolute;
      height: 100%;
      width: 100%;
      object-fit: cover;
    }
  }
`;

export const HeroVideoHomeStyles = styled.div`
  position: relative;
  height: 70vh;
  min-height: 500px;
  max-height: 800px;
  width: 100%;
  .overlay {
    height: 100%;
    width: 100%;
    position: absolute;
    top: 0;
    left: 0;
    padding: 100px 20px 10px;
    text-align: left;
    margin: 0 auto;
    background: var(--neon-50);
    z-index: 10;
    .max-width {
      margin: 0 auto;
      max-width: 1200px;
      height: 100%;
      display: flex;
      align-items: center;
      justify-content: flex-start;
    }
    .standard-title {
      button {
        margin-top: 0px;
      }
      h1 {
        color: white;
        margin-top: -11px;
        max-width: 800px;
      }
      h5 {
        color: white;
        font-weight: 600;
        text-transform: none;
        max-width: 800px;
        letter-spacing: 0.1rem;
      }
      border-left: 3px solid white;
      padding-left: 20px;
    }
    .header {
      font-size: 5rem;
    }
  }

  @media screen and (max-width: 500px) {
    .lower-buttons {
      .btns {
        gap: 0;
      }
    }
  }
  .video {
    position: relative;
    background-repeat: no-repeat;
    background-attachment: fixed;
    background-position: center;
    background-size: cover;
    display: flex;
    justify-content: center;
    overflow: hidden;
    z-index: -10;
    top: 0;
    height: 100%;
    width: 100%;
    video {
      position: absolute;
      height: 100%;
      width: 100%;
      object-fit: cover;
    }
  }
`;
