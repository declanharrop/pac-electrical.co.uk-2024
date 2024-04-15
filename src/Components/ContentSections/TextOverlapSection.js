import {
  ReverseTextOverlapSectionStyles,
  TextOverlapSectionStyles,
} from './Section.styles';

export default function TextOverlapSection({
  backgroundColor = 'var(--green)',
  src = '/images/headers/powerandcontrolmcs.jpg',
  alt = 'About MCS at Power and Control',
  reverse,
  children,
}) {
  return (
    <div>
      {reverse ? (
        <ReverseTextOverlapSectionStyles
          style={{ background: `${backgroundColor}` }}
        >
          <div className="to-section">
            <div className="first">
              <img src={src} alt={alt} />
            </div>
            <div className="second">
              <div
                className="second-content"
                style={{ color: `${backgroundColor}` }}
              >
                {children}
              </div>
            </div>
          </div>
        </ReverseTextOverlapSectionStyles>
      ) : (
        <TextOverlapSectionStyles style={{ background: `${backgroundColor}` }}>
          <div className="to-section">
            <div className="first">
              <img src={src} alt={alt} />
            </div>
            <div className="second">
              <div
                className="second-content"
                style={{ color: `${backgroundColor}` }}
              >
                {children}
              </div>
            </div>
          </div>
        </TextOverlapSectionStyles>
      )}
    </div>
  );
}
