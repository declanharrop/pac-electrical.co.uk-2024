import React from 'react';
import { VideoSectionStyles } from './Section.styles';

export default function VideoSection() {
  return (
    <VideoSectionStyles>
      <h3>
        Let us take you through the inner details of a Solar PV & Battery System
      </h3>
      <p>
        From planning to implementation, witness how we transform homes into
        eco-friendly energy havens. Discover advanced technologies like the
        Solis hybrid inverter and Puredrive battery system, and learn about our
        user-friendly smart monitoring system.
      </p>
      <iframe
        src="https://www.youtube.com/embed/AVxSuKksEmU?si=CEO7dcH1vTc1p2Oj"
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowfullscreen
      />
    </VideoSectionStyles>
  );
}
