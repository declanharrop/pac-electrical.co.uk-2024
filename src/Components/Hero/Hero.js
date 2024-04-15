import Image from 'next/image';
import HeroStyles from './Hero.styles';

export default function Hero({
  src = '/images/headers/home.webp',
  alt = 'the Power and Control Team',
  height = '60vh',
  objectPosition = 'center right',
  children,
  overlayColor = 'var(--navy-50)',
  textColor = 'white',
  overlayPadding = '20px',
}) {
  return (
    <HeroStyles style={{ height: `${height}` }}>
      <div className="hero-image">
        <Image
          alt={`${alt}`}
          src={`${src}`}
          priority
          style={{
            objectFit: 'cover',
            objectPosition: `${objectPosition}`,
          }}
          fill
        />
      </div>
      <div
        className="overlay"
        style={{
          backgroundColor: `${overlayColor}`,
          padding: `${overlayPadding}`,
          height: `${height}`,
        }}
      >
        <div className="hero-content" style={{ color: `${textColor}` }}>
          {children}
        </div>
      </div>
    </HeroStyles>
  );
}
