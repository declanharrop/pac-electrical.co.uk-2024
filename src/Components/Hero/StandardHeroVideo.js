import './standard-hero-video.css';

export default function StandardHeroVideo({
  children,
  height = '60vh',
  videomp4,
  videowebm,
  overlayColor = 'var(--green-50)',
}) {
  return (
    <div className="hero-video-home" style={{ height: `${height}` }}>
      <div className="background">
        <div
          className="video-container"
          style={{
            backgroundImage:
              'url(../../images/page-images/ev-charging/evchex1.jpg)',
          }}
        >
          <video autoPlay loop muted playsInline>
            <source src={`/video/${videomp4}`} type="video/mp4" />
            <source src={`/video/${videowebm}`} type="video/webm" />
          </video>
        </div>
      </div>
      <div className="overlay" style={{ background: `${overlayColor}` }}>
        <div className="content">{children}</div>
      </div>
    </div>
  );
}
