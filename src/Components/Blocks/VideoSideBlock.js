export default function VideoSideBlock({ data }) {
  return (
    <div
      className="video-side-block"
      style={{ backgroundColor: `${data.backgroundColor}` }}
    >
      <div
        className={
          data.side === 'right' ? 'right-video-grid' : 'left-video-grid'
        }
      >
        <div className="text">
          <h4>{data.title}</h4>
          <p>{data.body}</p>
        </div>
        <div className="video">
          <iframe
            src={data.video.src}
            title={data.video.title}
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
            scrolling="no"
          />
        </div>
      </div>
    </div>
  );
}
