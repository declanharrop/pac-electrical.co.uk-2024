'use client';

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
    height: 100%;
    border-radius: 14px;
    overflow: hidden;
    .video {
      position: absolute;
      top: 0;
      left: 0;
      height: 100%;
      width: 100%;
      background-repeat: no-repeat;
      background-attachment: fixed;
      background-position: center;
      background-size: cover;
      overflow: hidden;
      video {
        overflow: hidden;
        object-fit: cover;
        height: 100%;
        width: 100%;
      }
    }
    .overlay {
      padding: 30px 10px;
      position: relative;
    }
    img {
      height: 160px;
      width: 160px;
      margin-bottom: 10px;
    }
    p {
      margin: 20px 0;
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
          Explore
        </button>
      </Link>
    </div>
  </div>
);
export default function ThreeImageSection() {
  return (
    <ThreeImageSectionStyles>
      <ImageSection
        data={{
          title: 'Solar',
          color: 'var(--green)',
          background: 'var(--green-75)',
          logo: 'pac-logo-renewable-reverse.svg',
          text: 'We are experienced solar PV installers helping you make the most of renewable energy to reduce costs and improve your carbon footprint.',
          link: '/renewables',
          webm: '/video/pac-renewable2.webm',
          mp4: '/video/pac-renewable2.mp4',
        }}
      />
      <ImageSection
        data={{
          title: 'EV Charging',
          color: 'var(--neon)',
          background: 'var(--neon-75)',
          logo: 'pac-logo-evcharging-reverse.svg',
          text: 'We supply and install a wide range of EV charging solutions from the country’s leading brands, ideal for commercial and domestic settings.',
          link: '/ev-charging',
          webm: '/video/pac-evchargingsmall.webm',
          mp4: '/video/pac-evchargingsmall.mp4',
        }}
      />
      <ImageSection
        data={{
          title: 'Electrical',
          color: 'var(--navy)',
          background: 'var(--navy-75)',
          logo: 'pac-logo-electrical-reverse.svg',
          text: 'From electrical installations to repair and maintenance services, we can provide electrical solutions for both commercial and domestic properties',
          link: '/electrical',
          webm: '/video/pac-electrical.webm',
          mp4: '/video/pac-electrical.mp4',
        }}
      />
    </ThreeImageSectionStyles>
  );
}
