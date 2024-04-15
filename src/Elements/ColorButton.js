'use client';

import { useState } from 'react';
import styled from 'styled-components';

const ColorButtonStyles = styled.button``;

export default function ColorButton({
  name = 'define Name',
  backgroundColor = 'var(--navy)',
  color = 'white',
  boxShadow = 'var(--navy-25) 0px 2px 10px 2px',
  classlabel,
}) {
  const [colors, setColors] = useState({
    bgColor: backgroundColor,
    textColor: color,
  });

  const handleHover = () => {
    setColors({
      bgColor: color,
    });
  };
  const handleUnHover = () => {
    setColors({
      bgColor: backgroundColor,
    });
  };

  return (
    <ColorButtonStyles
      onMouseEnter={() => handleHover()}
      onMouseLeave={() => handleUnHover()}
      className={classlabel}
      style={{
        color: `${colors.textColor}`,
        backgroundColor: `${colors.bgColor}`,
        boxShadow: `${boxShadow}`,
      }}
    >
      {name}
    </ColorButtonStyles>
  );
}
