import styled from 'styled-components';

const HeaderStyles = styled.header`
  .mobile-social-bar {
    position: absolute;
    top: 0;
    left: 0;
    width: 100vw;
    height: 60px;
    padding: 0 10px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    z-index: 190;
    background-color: var(--navy);
    /* color: white; */
    .social-links {
      display: flex;
      align-items: center;
      flex-direction: row;
      gap: 0px;
      img {
        height: 28px;
      }
    }
    .contact-links {
      display: flex;
      align-items: flex-end;
      flex-direction: column;
      /* justify-content: flex-end; */
      a {
        font-weight: 600;
        letter-spacing: 0rem;
        color: white;
        display: flex;
        font-size: 1.4rem;
        align-items: center;
        gap: 4px;
        &:hover {
          color: var(--green);
        }
      }
    }
  }
  .mobile-bar {
    position: absolute;
    top: 60px;
    padding: 0 20px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-direction: row-reverse;
    z-index: 190;
    color: white;
    height: 60px;
    width: 100vw;
    background: rgb(37, 70, 110);
    background: linear-gradient(
      180deg,
      rgba(37, 70, 110, 1) 0%,
      rgba(37, 70, 110, 0.6) 70%,
      rgba(37, 70, 110, 0) 100%
    );
    .menuIcon {
      position: absolute;
      top: 5px;
      z-index: 200;
    }
    .drawer {
      position: fixed;
      box-shadow: 0 0 10px var(--navy);
      top: 0;
      left: 0;
      background: var(--navy);
      width: 280px;
      height: 100vh;
      overflow: scroll;

      .mobile-dropdown {
        .services-li {
          .icon {
            transform: rotate(180deg);
          }
        }
        position: relative;
        width: 100%;
        background: white;
        top: 0;
        overflow: hidden;
        margin: 0 0 100px 0;
        .dropdown-content {
          position: relative;
          max-width: 100%;
          grid-template-columns: 1fr;
          gap: 0;
          .electrical {
            h3 {
              color: var(--navy);
            }
          }
          .dropdown-section {
            .divider {
              margin: 10px 0 0;
            }
            margin: 0;
            h3 {
              /* color: var(--navy) */
              font-size: 1.6rem;
            }
          }
          ul {
            margin: 10px 0 24px;
            li {
              margin: 6px;
              a {
                font-size: 1.5rem;
                /* font-family: graphie, -apple-system, BlinkMacSystemFont,
                  'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans',
                  'Helvetica Neue', sans-serif; */
              }
            }
          }
        }
      }
      .links {
        margin: 130px 0 20px;
        ul {
          display: flex;
          flex-direction: column-reverse;
          li {
            font-family: good-times;
            a {
              font-family: good-times;
              /* color: var(--navy); */
            }
          }
          .services-li {
            a {
            }
          }
        }
      }
    }
    .logo {
      img {
        width: 50px;
        height: 50px;
      }
    }
  }

  //
  //
  //
  //
  //
  //
  //
  //

  .social-bar {
    position: absolute;
    top: 0;
    left: 0;
    width: 100vw;
    height: 30px;
    padding: 0 20px;
    display: flex;
    z-index: 190;
    background-color: var(--navy);
    justify-content: space-between;
    align-items: center;
    color: white;
    .social-links {
      display: flex;
      align-items: center;
      flex-direction: row;
      gap: 6px;
      img {
        height: 28px;
      }
    }
    .contact-links {
      display: flex;
      align-items: center;
      flex-direction: row;
      gap: 14px;
      a {
        font-weight: 600;
        letter-spacing: 0.05rem;
        color: white;
        display: flex;
        align-items: center;
        gap: 4px;
        &:hover {
          color: var(--green);
        }
      }
    }
  }
  .bar {
    position: absolute;
    top: 30px;
    padding: 0 30px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    z-index: 190;
    color: white;
    height: 100px;
    width: 100vw;
    background: rgb(37, 70, 110);
    background: linear-gradient(
      180deg,
      rgba(37, 70, 110, 1) 0%,
      rgba(37, 70, 110, 0.6) 70%,
      rgba(37, 70, 110, 0) 100%
    );
  }
  .links {
    ul {
      display: flex;
      align-items: center;
      gap: 20px;
    }
  }
  .services-li {
    display: flex;
    align-items: center;
    gap: 4px;
    margin-right: -10px;
  }
  li {
    /* font-family: good-times; */
    font-size: 1.7rem;
    cursor: pointer;
    a {
      cursor: pointer;
      /* font-family: good-times; */
      color: white;
      font-size: 1.9rem;
      &:hover {
        color: var(--green);
      }
    }
  }
  .header-link {
    font-family: good-times;
    a {
      font-family: good-times;
      font-size: 1.7rem;
    }
  }
  .logo {
    img {
      height: 80px;
      width: 80px;
    }
  }
  .dropdown {
    position: absolute;
    background-color: white;
    box-shadow: 0px 0px 20px 0px rgba(0, 0, 0, 0.1);
    top: 30px;
    z-index: 200;
    width: 100vw;
    overflow: hidden;
    .header-link {
      font-family: good-times;
      a {
        font-family: good-times;
        font-size: 1.7rem;
      }
    }
    .services-li {
      .icon {
        transform: rotate(180deg);
      }
    }
    li {
      a {
        /* font-family: good-times; */
        color: var(--navy);
      }
    }
  }
  .dropdown-inner {
  }
  .dropdown-menu {
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 100px;
    padding: 0 30px;
    .links {
      margin: 0;
    }
  }
  .dropdown-content {
    max-width: 1200px;
    margin: 0 auto;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-gap: 50px;
    padding: 20px;
    .electrical {
      .divider {
        background-color: var(--navy);
      }
      li {
        a {
          color: var(--navy);
          &:hover {
            color: var(--green);
          }
        }
      }
    }
    .renewable {
      h3 {
        color: var(--green);
      }
      .divider {
        background-color: var(--green);
      }
      li {
        a {
          color: var(--green);
          &:hover {
            color: var(--navy);
          }
        }
      }
    }
    .evcharging {
      h3 {
        color: var(--neon);
      }
      .divider {
        background-color: var(--neon);
      }
      li {
        a {
          color: var(--neon);
          &:hover {
            color: var(--navy);
          }
        }
      }
    }
    .dropdown-section {
      ul {
        margin: 20px 0;
        li {
          margin: 14px 4px;
          a {
            /* font-size: 1.6rem; */
            letter-spacing: 0.05rem;
          }
        }
      }
      text-align: left;
      h3 {
        font-weight: 500;
        font-size: 2rem;
      }
      .divider {
        margin: 10px 0;
        width: 100%;
        height: 2px;
      }
    }
  }
`;

export default HeaderStyles;
