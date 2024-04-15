import Link from 'next/link';
import { SitemapStyles } from './Footer.styles';

export default function Sitemap() {
  return (
    <SitemapStyles>
      <h3>Sitemap</h3>
      <div className="sitemap-grid">
        <div className="section">
          <div className="title">
            <h5>Power and Control</h5>
          </div>
          <div className="links">
            <Link href="/">Home</Link>
            <Link href="/about">About Us</Link>
            <Link href="/news">News</Link>
            <Link href="/case-studies">Case Studies</Link>
            <Link href="/recruitment">Recruitment</Link>
            <Link href="/reviews">Reviews</Link>
            <Link href="/get-a-quote">Get a Quote</Link>
            <Link href="/information/privacy-policy">Privacy Policy</Link>
            <Link href="/information/terms-and-conditions">
              Terms & Conditions
            </Link>
          </div>
        </div>
        <div className="section">
          <div className="title">
            <h5>Electrical</h5>
          </div>
          <div className="links">
            <Link href="/electrical">Electrical Explained</Link>
            <Link href="/electrical/commercial-electrical-contractors">
              Commercial Electrical Contractors
            </Link>
            <Link href="/electrical/larger-domestic-electrical-installations">
              Larger Domestic Electrical Installations
            </Link>
            <Link href="/electrical/led-lighting-systems">
              Led Lighting Systems
            </Link>
            <Link href="/electrical/heating-systems">Heating Systems</Link>
            <Link href="/electrical/testing-and-inspections">
              Testing and Inspections
            </Link>
            <Link href="/electrical/fault-finding-repair-and-maintenance">
              Fault Finding, Repair and Maintenance
            </Link>
            <Link href="/electrical/data-communication">
              Data Communication
            </Link>
          </div>
        </div>
        <div className="section">
          <div className="title">
            <h5>Renewable</h5>
          </div>
          <div className="links">
            <Link href="/renewables">Renewables Explained</Link>
            <Link href="/renewables/commercial-solar-pv-installation">
              Commercial Solar PV Installation
            </Link>
            <Link href="/renewables/domestic-solar-pv-installation">
              Domestic Solar PV Installation
            </Link>
            <Link href="/renewables/battery-storage">Battery Storage</Link>
          </div>
        </div>
        <div className="section">
          <div className="title">
            <h5>EV Charging</h5>
          </div>
          <div className="links">
            <Link href="/ev-charging">EV Charging Explained</Link>
            <Link href="/ev-charging/home-ev-charging">Home EV Charging</Link>
            <Link href="/ev-charging/workplace-ev-charging">
              Workplace EV Charging
            </Link>
            <Link href="/ev-charging/grants">Grants</Link>
          </div>
        </div>
      </div>
    </SitemapStyles>
  );
}
