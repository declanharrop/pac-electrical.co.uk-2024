import SolarJourney from '@/Frames/SolarJourney';
import OurProcessData from '@/Lib/data/our-process';

export const metadata = {
  title: 'Our Process',
  description:
    'Our process is a simple, we guide you through every step of the process making it simple an easy to go Solar today.',
  url: 'https://pac-electrical.co.uk/solar/our-process',
};
export default function OurProcess() {
  return (
    <SolarJourney title="Our Process" subtitle="Our Process">
      <h1>Solar</h1>
    </SolarJourney>
  );
}
