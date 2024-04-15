import Link from 'next/link';
import Hero from '@/Components/Hero/Hero';
import TextOverlapSection from '@/Components/ContentSections/TextOverlapSection';
import ColorButton from '@/Elements/ColorButton';
import { MCSPageStyles } from '@/Styles/Page.styles';
import Head from '@/Elements/Head';

export default function MCS() {
  return (
    <MCSPageStyles>
      <Head
        title="MCS Certified Installer | Power and Control"
        description=""
        url="https://pac-electrical.co.uk/renewables/mcs"
      />
      <Hero
        src="/images/headers/powerandcontrolmcs.jpg"
        alt="MCS Certification - Power and Control"
        height="70vh"
        overlayColor="var(--green-50)"
      >
        <div className="standard-title">
          <h3 style={{ marginBottom: '10px' }}>Power & Control is a</h3>
          <h1>MCS Certified Installer</h1>
          <Link href="/get-a-quote/renewable">
            <button
              className="mcs-getaquote"
              type="button"
              style={{ color: 'var(--green)' }}
            >
              Get a Solar Quote Today
            </button>
          </Link>
        </div>
      </Hero>
      <TextOverlapSection src="/images/page-images/mcs/mcs-2.webp">
        <h2>About MCS</h2>
        <p>
          MCS create and maintain standards that allows for the certification of
          products, installers and their installations. Associated with these
          standards is the certification scheme, run on behalf of MCS by
          Certification Bodies who hold UKAS accreditation to ISO 17065.
        </p>
        <p>
          MCS certifies low-carbon products and installations used to produce
          electricity and heat from renewable sources.
        </p>
        <p>
          MCS is a mark of quality. Membership of MCS demonstrates adherence to
          these recognised industry standards; highlighting quality, competency
          and compliance.
        </p>
      </TextOverlapSection>
      <img
        className="mcs-image"
        src="/images/accreditations/pac-mcs-acc.webp"
        alt=""
      />
      <TextOverlapSection reverse src="/images/page-images/mcs/mcs-1.webp">
        <p>
          Our MCS certification directly benefits our customers. It serves as a
          guarantee that when you choose Power and Control, you are investing in
          a solution that not only harnesses renewable energy efficiently but
          also does so in a manner that meets or exceeds the industry's highest
          standards.
        </p>
        <p>
          This peace of mind extends beyond the initial installation. Our
          ongoing commitment to MCS guidelines means that our products and
          services remain at the forefront of technological advancements,
          ensuring you continue to benefit from the latest in renewable energy
          innovations.
        </p>
      </TextOverlapSection>
      <section className="read-more">
        <a href="https://mcscertified.com/" target="_blank" rel="noreferrer">
          <ColorButton name="More about MCS" />
        </a>
        <Link href="/get-a-quote/renewable" className="mcs-getaquote">
          <ColorButton name="Get A Solar Quote Today" />
        </Link>
      </section>
    </MCSPageStyles>
  );
}
