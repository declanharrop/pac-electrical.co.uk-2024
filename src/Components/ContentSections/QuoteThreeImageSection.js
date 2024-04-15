import Link from 'next/link';
import styled from 'styled-components';

const ThreeImageSectionStyles = styled.div`
  display: grid;
  grid-gap: 20px;
  grid-template-columns: 1fr 1fr 1fr;
  max-width: 1200px;
  margin: 50px auto;
  padding: 10px;
  .image-section {
    color: white;
    position: relative;
    height: auto;
    transition: 0.2s ease-in-out;
    &:hover {
      transform: scale(0.99);
    }
    .video {
      position: relative;
      background-repeat: no-repeat;
      background-attachment: fixed;
      background-position: center;
      background-size: cover;
      overflow: hidden;
      height: 100%;
      video {
        position: relative;
        width: 100%;
        height: 560px;
        overflow: hidden;
        object-fit: cover;
      }
    }
    .overlay {
      padding: 20px 10px;
      position: absolute;
      width: 100%;
      top: 0;
      left: 0;
      height: 100%;
    }
    img {
      margin: 30px 0;
      height: 200px;
      width: 200px;
    }
    p {
      margin: 20px 0;
    }
    button {
      margin-top: 40px;
    }
  }
  @media screen and (max-width: 800px) {
    grid-template-columns: 1fr;
  }
`;

const ImageSection = ({ data }) => (
  <div className="image-section" style={{ backgroundColor: `${data.color}` }}>
    <div className="video">
      <video autoPlay loop muted playsInline>
        <source src={data.webm} type="video/webm" />
        <source src={data.mp4} type="video/mp4" />
      </video>
    </div>
    <div className="overlay" style={{ background: `${data.background}` }}>
      <img src={`/logo/${data.logo}`} alt="" />
      <h3>{data.title}</h3>
      <p>{data.text}</p>
      <Link href={data.link}>
        <button
          type="button"
          className="sm-btn"
          style={{ color: `${data.color}` }}
        >
          Get a Quote
        </button>
      </Link>
    </div>
  </div>
);
export default function QuoteThreeImageSection() {
  return (
    <ThreeImageSectionStyles>
      <ImageSection
        data={{
          title: 'Solar and Battery Storage',
          color: 'var(--green)',
          background: 'var(--green-75)',
          logo: 'pac-logo-renewable-reverse.svg',
          text: '',
          link: '/get-a-quote/renewable',
          webm: '/video/pac-renewable2.webm',
          mp4: '/video/pac-renewable2.mp4',
        }}
      />
      <ImageSection
        data={{
          title: 'EV Charging Solutions',
          color: 'var(--neon)',
          background: 'var(--neon-75)',
          logo: 'pac-logo-evcharging-reverse.svg',
          text: '',
          link: '/get-a-quote/ev-charger',
          webm: '/video/pac-evchargingsmall.webm',
          mp4: '/video/pac-evchargingsmall.mp4',
        }}
      />
      <ImageSection
        data={{
          title: 'Electrical Services',
          color: 'var(--navy)',
          background: 'var(--navy-75)',
          logo: 'pac-logo-electrical-reverse.svg',
          text: '',
          link: '/get-a-quote/electrical',
          webm: '/video/pac-electrical.webm',
          mp4: '/video/pac-electrical.mp4',
        }}
      />
    </ThreeImageSectionStyles>
  );
}
