import Link from 'next/link';
import HeroVideo from '../../Components/Hero/HeroVideo';
import Head from '../../Elements/Head';
import SolarPageStyles from '../../styles/SolarPage.styles';
import Button from '../../Elements/ColorButton';

export default function SolarPage() {
  return (
    <>
      <Head
        title="Solar & Battery Storage, Derby Solar Installer - Power & Control"
        description=""
        url="https://pac-electrical.co.uk/renewables/Solar"
      />
      <SolarPageStyles>
        <HeroVideo
          videowebm="Solar-pac.webm"
          videomp4="Solar-pac.mp4"
          overlayColor="var(--green-50)"
        >
          <div className="overlay-content">
            <img
              src="/logo/pac-logo-renewable-reverse.svg"
              alt="Power and Control - Solar PV & Battery Experts"
            />
            <h1 style={{ marginBottom: '0px' }} className="header">
              Power and Control
            </h1>
            <h2 style={{ color: 'white' }}>Solar PV & Battery Experts</h2>
            <Link href="/get-a-quote/renewable">
              <Button
                name="Get a quote today"
                backgroundColor="var(--green)"
                color="white"
                classlabel="solar-getaquote"
              />
            </Link>
            <div className="lower-buttons">
              <h3 style={{ color: 'white' }}>Find out more</h3>
              <div className="btns">
                <Link href="/renewables/domestic-solar-pv-installation">
                  <Button
                    name="Domestic Solar"
                    className="domestic-install"
                    backgroundColor="var(--green)"
                    color="white"
                  />
                </Link>
                <Link href="/renewables/commercial-solar-pv-installation">
                  <Button
                    name="Commercial Solar"
                    className="commercial-install"
                    backgroundColor="var(--green)"
                    color="white"
                  />
                </Link>
                <Link href="/renewables/battery-storage">
                  <Button
                    name="Battery Storage"
                    className="battery-install"
                    backgroundColor="var(--green)"
                    color="white"
                  />
                </Link>
              </div>
            </div>
            <div className="ev-buttons">
              <Link href="/ev-charging">
                <Button
                  name="Learn About our EV Charging Soultions"
                  className="ev-charging-solar-solutions"
                  backgroundColor="var(--neon)"
                  color="white"
                />
              </Link>
            </div>
          </div>
        </HeroVideo>
      </SolarPageStyles>
    </>
  );
}
