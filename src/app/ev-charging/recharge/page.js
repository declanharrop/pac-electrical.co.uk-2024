import HeroVideo from '../../Components/Hero/HeroVideo';
import Head from '../../Elements/Head';
import RechargePageStyles from '../../styles/RechargePage.styles';

export default function RechargePage() {
  return (
    <>
      <Head
        title="EV Charger Installers | Power and Control - EV Charging experts"
        description="Power up your electric vehicle with convenient EV charging solutions. Explore our comprehensive range of EV charging installs designed to meet your needs. Power and Control. We install a large range of EV Chargers. We install Domestic EV Chargers and Commercial EV Chargers."
        url="https://pac-electrical.co.uk/ev-charging/recharge"
      />
      <RechargePageStyles>
        <HeroVideo />
      </RechargePageStyles>
    </>
  );
}
