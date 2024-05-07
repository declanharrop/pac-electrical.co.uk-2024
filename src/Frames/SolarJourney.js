import VideoSideBlock from '@/Components/Blocks/VideoSideBlock';
import './styles/solar-journey.css';
import StandardHeroVideo from '@/Components/Hero/StandardHeroVideo';

export default function SolarJourney({ data }) {
  return (
    <div className="solar-journey">
      <StandardHeroVideo
        videomp4="pac-home-video-new.mp4"
        videowebm="pac-solarpage-video.webm"
        overlayColor="var(--green-50)"
        height="40vh"
      >
        <div className="decorated-header">
          <h1>{data.title}</h1>
          <p>{data.subtitle}</p>
        </div>
      </StandardHeroVideo>
      {data.journeySections.map((section, index) => (
        <VideoSideBlock key={index} data={section} />
      ))}
    </div>
  );
}
