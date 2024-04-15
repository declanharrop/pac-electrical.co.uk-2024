import styled from 'styled-components';

const AccordianStyles = styled.div`
  max-width: 1200px;
  padding: 20px;
  margin: 6px auto;
  .section {
    margin: 10px 0;
    .question {
      position: relative;
      cursor: pointer;
      background: white;
      color: white;
      border-radius: 4px;
      padding: 10px 30px 10px 20px;
      transition: all 0.2s ease;
      h5 {
        font-size: 2rem;
        letter-spacing: 0.2rem;
      }
      &:hover {
        background: var(--light-grey);
      }
      .arrow {
        position: absolute;
        right: 14px;
        top: calc(50% - 8px);
        .inactive {
          transition: all 0.7s ease-out;
          rotate: 90deg;
        }
        .active {
          transition: all 0.7s ease-out;
          rotate: 0deg;
        }
        img {
          height: 16px;
        }
      }
    }
    .answer {
      background: var(--light-grey);
      color: var(--navy);
      overflow: hidden;
      padding: 0;
      .inner {
        padding: 10px 20px;
        ul {
          padding-left: 10px;
          text-align: left;
          li {
            list-style-type: disc;
            text-transform: none;
            margin: 6px 0;
            font-weight: 400;
          }
          color: var(--navy);
        }
        p {
          margin: 10px;
          font-weight: 400;
        }
      }
    }
  }
`;

export default AccordianStyles;
