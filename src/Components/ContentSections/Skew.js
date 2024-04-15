'use client';

import styled from 'styled-components';

const SkewStyles = styled.div`
  /* transform: skewY(-3deg); */
  .content {
    /* transform: skewY(3deg); */
    max-width: 1200px;
    margin: 0 auto;
  }
`;

export default function Skew({
  children,
  background = 'var(--green)',
  color = 'white',
  margin = '0 0 0 0',
  padding = '150px 10px',
}) {
  return (
    <SkewStyles
      style={{
        backgroundColor: `${background}`,
        padding: `${padding}`,
        margin: `${margin}`,
      }}
    >
      <div className="content" style={{ color: `${color}` }}>
        {children}
      </div>
    </SkewStyles>
  );
}
