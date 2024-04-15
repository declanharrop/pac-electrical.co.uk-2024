import Image from 'next/image';
import styled from 'styled-components';

const FlexImageTextSectionStyles = styled.div`
  .inner {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 30px;
  }
  .image {
    position: relative;
    margin: 0 auto;
    width: 100%;
    max-width: 584px;
    height: 30vh;
    min-height: 400px;
    max-height: 600px;
    overflow: hidden;
  }
  .text {
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;

    .innertext {
      display: inline-block;
      margin: 20px 0;
      .intro {
        margin: -6px 0 -15px;
      }
      .faq-list {
        transform: scale(0.95);
      }
      ul {
        list-style-type: disc;
        list-style-position: outisde;
        margin-bottom: -22px;
      }
      li {
        margin: 20px 0;
        list-style-type: disc;
        text-transform: none;
        p {
          direction: ltr;
          line-height: 1.3;
        }
      }
      h2 {
        margin: -10px 0 20px;
      }
      h3 {
        margin-bottom: 10px;
        font-size: 1.9rem;
        line-height: 1.3;
      }
      p {
        direction: ltr;
        margin: 0 0 10px 0;
      }
    }
  }
  @media screen and (max-width: 800px) {
    .inner {
      grid-template-columns: 1fr;
    }
    .text {
      direction: ltr;
      text-align: left;
      .innertext {
        text-align: left;
        li {
        }
        ul {
          direction: ltr;
        }
      }
    }
  }
`;

export default function FlexImageTextSection({
  image = '/images/headers/home.webp',
  title = '',
  intro = '',
  text = '',
  textAlign = 'left',
  imagePosition = 'ltr',
  borderLeft = 'white 2px solid',
  borderRight = 'none',
  textPadding = '0 0 0 20px',
  children,
}) {
  return (
    <FlexImageTextSectionStyles>
      <div className="inner" style={{ direction: `${imagePosition}` }}>
        <div className="image">
          <Image
            alt={`${title}`}
            src={`${image}`}
            priority
            style={{
              objectFit: 'cover',
              objectPosition: `center`,
            }}
            fill
          />
        </div>
        <div className="text">
          <div
            className="innertext"
            style={{
              padding: `${textPadding}`,
              textAlign: `${textAlign}`,
              borderLeft: `${borderLeft}`,
              borderRight: `${borderRight}`,
            }}
          >
            {title && <h2>{title}</h2>}
            {intro && (
              <div className="intro">
                {intro.map((item, i) => (
                  <p key={i}>{item}</p>
                ))}
              </div>
            )}
            {text && <p>{text}</p>}
            {children}
          </div>
        </div>
      </div>
    </FlexImageTextSectionStyles>
  );
}
