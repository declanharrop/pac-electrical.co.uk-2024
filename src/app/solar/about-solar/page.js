import SolarJourney from '@/Frames/SolarJourney';
import AboutSolarData from '@/Lib/data/about-solar';

export const metadata = {
  title: 'About Solar',
  description:
    'Solar PV Roof Systems & Solar PV Installers UK. We offer Solar PV solutions from design through to installation and maintenance. Discover our Solar PV Services!',
  url: 'https://pac-electrical.co.uk/solar/about-solar',
};

export default function AboutSolar() {
  return <SolarJourney data={AboutSolarData} />;
}
