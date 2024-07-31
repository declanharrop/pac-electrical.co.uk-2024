import VideoSideBlock from '@/Components/Blocks/VideoSideBlock';
import './styles/solar-journey.css';
import StandardHeroVideo from '@/Components/Hero/StandardHeroVideo';

export default function SolarJourney({ children, title, subtitle }) {
  return (
    <div className="solar-journey">
      <StandardHeroVideo
        videomp4="pac-home-video-new.mp4"
        videowebm="pac-solarpage-video.webm"
        overlayColor="var(--green-50)"
        height="40vh"
      >
        <div className="decorated-header">
          <h1>{title}</h1>
          <p>{subtitle}</p>
        </div>
      </StandardHeroVideo>
      <div className="solar-journey-content">
        <h3
          style={{
            textAlign: 'center',
            maxWidth: '1000px',
            margin: '80px auto 30px',
            padding: '0 10px',
          }}
        >
          This video provides an in-depth look at the steps involved in
          transitioning to solar energy with Power & Control
        </h3>
        <iframe
          style={{
            width: '90vw',
            height: 'auto',
            maxWidth: '1000px',
            minHeight: '500px',
            marginBottom: '100px',
          }}
          src="https://www.youtube.com/embed/4nzZQbuXQGc?si=0UWw1a7pPKj1a3uJ"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        />
      </div>
    </div>
  );
}
