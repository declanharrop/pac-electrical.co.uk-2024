import Link from 'next/link';
import HeroVideo from '@/Components/Hero/HeroVideo';
import Head from '@/Elements/Head';
import SolarPageStyles from '@/Styles/SolarPage.styles';

export const metadata = {
  title: 'Solar Panel Installers Derbyshire - Power & Control',
  description:
    'MSC accredited Solar installer Derby, energy savings, renewable energy solutions. Discover the benefits of solar power with Power & Control Ltd.',
  url: 'https://pac-electrical.co.uk/solar',
};
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
          videomp4="pac-solarpage-video.mp4"
          videowebm="pac-solarpage-video.webm"
          overlayColor="var(--green-50)"
        >
          <div className="overlay-content">
            <img
              src="/logo/pac-logo-renewable-reverse.svg"
              alt="Power and Control - Solar PV & Battery Experts"
            />
            <h1 style={{ marginBottom: '0px' }} className="header">
              It's time to power your world with solar
            </h1>
            {/* <div className="flex">
              <Link href="/request-callback">
                <button type="button" className="secondary-button">
                  Request a callback
                </button>
              </Link>
              <Link href="/get-a-quote">
                <button type="button" className="focus-button">
                  Get a quote
                </button>
              </Link>
            </div> */}
            <div className="lower-buttons">
              <h4 style={{ color: 'white' }}>Select your sector</h4>
              <div className="btns">
                <Link href="/solar/domestic">
                  <button type="button" className="focus-button">
                    Domestic
                  </button>
                </Link>
                <Link href="/solar/commercial">
                  <button type="button" className="secondary-button">
                    Commercial
                  </button>
                </Link>
              </div>
            </div>
            <div className="ev-buttons" />
          </div>
        </HeroVideo>
      </SolarPageStyles>
    </>
  );
}
