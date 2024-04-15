import Image from 'next/image';
import styled from 'styled-components';

const ContentImageStyles = styled.div`
  position: relative;
  overflow: hidden;
  margin: 20px auto;
`;

export default function ContentImage({
  src = '/images/headers/home.webp',
  alt = 'the power and control team',
  height = '200px',
  width = '200px',
  maxWidth = '100%',
  objectPosition = 'center center',
}) {
  return (
    <ContentImageStyles
      style={{
        height: `${height}`,
        width: `${width}`,
        maxWidth: `${maxWidth}`,
      }}
    >
      <Image
        alt={`${alt}`}
        src={`${src}`}
        priority
        fill
        style={{
          objectFit: 'cover',
          objectPosition: `${objectPosition}`,
        }}
      />
    </ContentImageStyles>
  );
}
