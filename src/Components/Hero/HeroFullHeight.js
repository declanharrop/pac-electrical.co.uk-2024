import Image from 'next/image';
import Styles from './Hero.module.css';

export default function HeroFullHeight({
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
    <div className={Styles.HeroFullHeight} style={{ height: `${height}` }}>
      <div className={Styles.HeroFullHeight_Image}>
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
        className={Styles.HeroFullHeight_Overlay}
        style={{
          backgroundColor: `${overlayColor}`,
          padding: `${overlayPadding}`,
          height: `${height}`,
        }}
      >
        <div
          className={Styles.HeroFullHeight_Overlay_Content}
          style={{ color: `${textColor}` }}
        >
          <span className={Styles.HeroFullHeight_Overlay_Content_Span} />
          <span className={Styles.HeroFullHeight_Overlay_Content_Span} />
          <span className={Styles.HeroFullHeight_Overlay_Content_Span} />
          <span className={Styles.HeroFullHeight_Overlay_Content_Span} />
          {children}
        </div>
      </div>
    </div>
  );
}
