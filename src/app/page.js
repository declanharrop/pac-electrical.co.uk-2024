// import Version from '@/Components/Version';
import Link from 'next/link';
import Skew from '@/Components/ContentSections/Skew';
import ThreeImageSection from '@/Components/ContentSections/ThreeImageSection';
import HeroVideoHome from '@/Components/Hero/HeroVideoHome';
import Head from '@/Elements/Head';

export default function Page() {
  return (
    <div>
      <Head />
      <HeroVideoHome />
      <ThreeImageSection />
      {/* <LatestNewsHome /> */}
      <Skew background="var(--navy)">
        <div className="contractor-section">
          <h2>Experienced Electrical Contractors</h2>
          <p>
            At Power and Control, we are committed to providing innovative and
            top-quality results to our clients. Specialising in renewables, EV
            charging solutions and energy efficient electrical installations, we
            can help you reduce energy bills in your home or workspace.{' '}
          </p>
          <p>
            Whether you need fault finding, repairs, or a large-scale solar PV
            installation, providing a trusted and reliable service to meet the
            highest standards. We provide a turnkey solution from design to
            installation, managing the project from start to finish.{' '}
          </p>
          <p>
            Based in the East Midlands, we are perfectly placed to carry out
            commercial contracting works across the country.{' '}
          </p>
        </div>
        <div className="buttons-flex">
          <Link href="/about">
            <button type="button" style={{ color: `var(--navy)` }}>
              About Us
            </button>
          </Link>
          <Link href="/case-studies">
            <button type="button" style={{ color: `var(--navy)` }}>
              Case Studies
            </button>
          </Link>
          <Link href="/news">
            <button type="button" style={{ color: `var(--navy)` }}>
              Latest News
            </button>
          </Link>
        </div>
      </Skew>
    </div>
  );
}
