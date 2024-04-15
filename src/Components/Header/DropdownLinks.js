import Link from 'next/link';
import { useContext } from 'react';
import { MenuContext } from '../../Context/MenuContext';

export default function DropdownLinks() {
  const { toggleDropdown } = useContext(MenuContext);
  return (
    <>
      <div className="dropdown-section electrical">
        <h3>Electrical Services</h3>
        <div className="divider" />
        <ul>
          <li onClick={() => toggleDropdown('')}>
            <Link href="/electrical">Electrical Explained</Link>
          </li>
          <li onClick={() => toggleDropdown('')}>
            <Link href="/electrical/commercial-electrical-contractors">
              Commercial Electrical Contractors
            </Link>
          </li>
          <li onClick={() => toggleDropdown('')}>
            <Link href="/electrical/larger-domestic-electrical-installations">
              Larger Domestic Electrical Installations
            </Link>
          </li>
          <li onClick={() => toggleDropdown('')}>
            <Link href="/electrical/led-lighting-systems">
              LED Lighting Systems
            </Link>
          </li>
          <li onClick={() => toggleDropdown('')}>
            <Link href="/electrical/heating-systems">
              Infrared Heating Panel Systems
            </Link>
          </li>
          <li onClick={() => toggleDropdown('')}>
            <Link href="/electrical/testing-and-inspections">
              Testing & Inspections
            </Link>
          </li>
          <li onClick={() => toggleDropdown('')}>
            <Link href="/electrical/fault-finding-repair-and-maintenance">
              Fault Finding Repair & Maintenance
            </Link>
          </li>
          <li onClick={() => toggleDropdown('')}>
            <Link href="/electrical/data-communication">
              Data Communication
            </Link>
          </li>
          <li
            onClick={() => {
              toggleDropdown('');
            }}
          >
            <Link href="/electrical/certificates-and-accreditations">
              Certificates & Accreditations
            </Link>
          </li>
        </ul>
      </div>
      <div className="dropdown-section renewable">
        <h3>Renewables</h3>
        <div className="divider" />
        <ul>
          <li onClick={() => toggleDropdown('')}>
            <Link href="/renewables">Renewables Explained</Link>
          </li>
          <li onClick={() => toggleDropdown('')}>
            <Link href="/renewables/commercial-solar-pv-installation">
              Commercial Solar PV Installation
            </Link>
          </li>
          <li onClick={() => toggleDropdown('')}>
            <Link href="/renewables/domestic-solar-pv-installation">
              Domestic Solar PV Installation
            </Link>
          </li>
          <li onClick={() => toggleDropdown('')}>
            <Link href="/renewables/battery-storage">Battery Storage</Link>
          </li>
          <li
            onClick={() => {
              toggleDropdown('');
            }}
          >
            <Link href="/renewables/mcs">MCS Accreditation</Link>
          </li>
          <li
            onClick={() => {
              toggleDropdown('');
            }}
          >
            <Link href="/electrical/certificates-and-accreditations">
              Certificates & Accreditations
            </Link>
          </li>
        </ul>
      </div>
      <div className="dropdown-section evcharging">
        <h3>EV Charging</h3>
        <div className="divider" />
        <ul>
          <li onClick={() => toggleDropdown('')}>
            <Link href="/ev-charging">EV Charging Explained</Link>
          </li>
          <li onClick={() => toggleDropdown('')}>
            <Link href="/ev-charging/home-ev-charging">Home EV Charging</Link>
          </li>
          <li onClick={() => toggleDropdown('')}>
            <Link href="/ev-charging/workplace-ev-charging">
              Workplace EV Charging
            </Link>
          </li>
          <li onClick={() => toggleDropdown('')}>
            <Link href="/ev-charging/grants">Grants</Link>
          </li>
          <li
            onClick={() => {
              toggleDropdown('');
            }}
          >
            <Link href="/electrical/certificates-and-accreditations">
              Certificates & Accreditations
            </Link>
          </li>
        </ul>
      </div>
    </>
  );
}
