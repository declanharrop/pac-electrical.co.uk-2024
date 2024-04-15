import Link from 'next/link';
import { LogoSectionStyles } from './Footer.styles';

export default function LogoSection() {
  return (
    <LogoSectionStyles>
      <div className="logo-container">
        <Link href="/electrical">
          <img
            src="/logo/pac-logo-electrical.svg"
            alt="Power and Control Logo"
          />
        </Link>
        <Link href="/renewables">
          <img
            src="/logo/pac-logo-renewable.svg"
            alt="Power and Control Logo"
          />
        </Link>
        <Link href="/ev-charging">
          <img
            src="/logo/pac-logo-evcharging.svg"
            alt="Power and Control Logo"
          />
        </Link>
      </div>
    </LogoSectionStyles>
  );
}
