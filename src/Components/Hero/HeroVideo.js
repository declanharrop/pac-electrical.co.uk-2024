import React from 'react';
import Div100vh from 'react-div-100vh';
import { Link } from '@mui/material';
import Button from '../../Elements/ColorButton';
import { HeroVideoStyles } from './HeroVideo.styles.js';

export default function HeroVideo({
  children,
  videowebm = 'pac-evcharging.webm',
  videomp4 = 'pac-evcharging.mp4',
  overlayColor = 'var(--neon-50)',
}) {
  return (
    <Div100vh>
      <HeroVideoStyles>
        <div className="overlay" style={{ backgroundColor: `${overlayColor}` }}>
          {children ? (
            <div className="overlay-content">{children}</div>
          ) : (
            <div className="overlay-content">
              <img
                src="/logo/pac-logo-evcharging-reverse.svg"
                alt="Power and Control - EV Charging experts"
              />
              <h1 style={{ marginBottom: '0px' }} className="header">
                Power and Control
              </h1>
              <h2 style={{ marginBottom: '20px' }}>Ev Charging experts</h2>
              <Link href="/get-a-quote-ev">
                <Button
                  name="Get a quote today"
                  backgroundColor="white"
                  color="var(--navy)"
                  classlabel="recharge-getaquote"
                />
              </Link>
              <div className="lower-buttons">
                <h3>Find out more</h3>
                <div className="btns">
                  <Link href="/ev-charging/home-ev-charging">
                    <Button name="Domestic" className="domestic-install" />
                  </Link>
                  <Link href="/ev-charging/workplace-ev-charging">
                    <Button name="Commercial" className="commercial-install" />
                  </Link>
                </div>
              </div>
            </div>
          )}
        </div>
        <div
          className="video"
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
      </HeroVideoStyles>
    </Div100vh>
  );
}
