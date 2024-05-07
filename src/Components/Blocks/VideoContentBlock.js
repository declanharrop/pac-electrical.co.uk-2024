import './blocks.css';

export default function VideoContentBlock({
  backgroundColor = 'var(--green)',
}) {
  return (
    <div className="video-content-block" style={{ backgroundColor }}>
      <div className="video-content-container">
        <h4>
          Want us to guide you through the inner workings of a Solar PV &
          Battery system?
        </h4>
        <p>
          From planning to implementation, witness how we transform homes into
          eco-friendly energy havens. Discover advanced technologies like the
          Solis hybrid inverter and Puredrive battery system, and learn about
          our user-friendly smart monitoring system.
        </p>
        <iframe
          src="https://www.youtube.com/embed/AVxSuKksEmU?si=CEO7dcH1vTc1p2Oj"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        />
      </div>
      <div className="background-logo">
        <img
          src="/logo/pac-logo-renewable-reverse.svg"
          alt="Power & Control - Solar PV & Battery Experts"
        />
      </div>
    </div>
  );
}
