'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';
import Head from '@/Elements/Head';
import ServiceTemplateStyles from '@/Templates/styles/ServiceTemplate.styles';
import Hero from '@/Components/Hero/Hero';
import Skew from '@/Components/ContentSections/Skew';
import FlexImageTextSection from '@/Components/ContentSections/FlexImageTextSection';

export default function Grants() {
  const [width, setWidth] = useState();

  useEffect(() => {
    setWidth(window.innerWidth);
    window.addEventListener('resize', () => setWidth(window.innerWidth));
    return () =>
      window.removeEventListener('resize', () => setWidth(window.innerWidth));
  }, []);
  return (
    <ServiceTemplateStyles>
      <Head
        title="Grants for EV Charging Stations |  Power and Control - Electrical Contractors"
        description="There are several grants for EV charging stations available to help you with the upfront cost of your investment. Find out more online today."
        ogImage="/images/page-images/ev-charging/grants/grants4.jpg"
      />
      <Hero src="/images/page-images/ev-charging/grants/grants1.jpg">
        <div className="standard-title">
          <h1>Grants</h1>
          <Link href="/get-a-quote">
            <button type="button">Get a Quote</button>
          </Link>
        </div>
      </Hero>
      <Skew background="var(--neon)">
        <FlexImageTextSection
          image="/images/page-images/ev-charging/grants/grants4.jpg"
          title=""
          intro={[
            'With a push to switch to electric vehicles, the Office for Zero Emission Vehicles (OZEV) is offering grants to help ease the process and make it more cost-effective.',
            'At Power and Control, we want to make sure you get the best deal possible, so we’ve put together a guide with all the current information about available EV grants. ',
          ]}
          text=""
        />
      </Skew>
      <Skew
        background="white"
        margin="0"
        padding="100px 10px"
        color="var(--navy)"
      >
        <FlexImageTextSection
          image="/images/page-images/ev-charging/grants/grants3.jpg"
          title=""
          text=""
          imagePosition={width <= 800 ? 'ltr' : 'rtl'}
          textAlign={width <= 800 ? 'left' : 'right'}
          borderLeft={width <= 800 ? `var(--neon) 2px solid` : 'none'}
          borderRight={width <= 800 ? 'none' : `var(--neon) 2px solid`}
          textPadding={width <= 800 ? '0 0px 0 30px' : '0 30px 0 0px'}
        >
          <h3>EV Chargepoint grant for tenants and flat owners</h3>
          <p>
            The EV chargepoint grant offers funding of up to 75% towards the
            cost of installing electric vehicle chargepoints at properties
            across the UK.
          </p>
          <p style={{ paddingTop: '20px' }}>
            <b>Eligibility:</b>
          </p>
          <ul style={width <= 800 ? { direction: 'ltr' } : {}}>
            <li>
              <p>
                You must own and live in a flat or rent any residential
                property.
              </p>
            </li>
            <li>
              <p>You must have a private off-street parking space.</p>
            </li>
            <li>
              <p>You must own an eligible vehicle.</p>
            </li>
          </ul>
          <p style={{ paddingTop: '20px' }}>
            Currently this grant does not apply to those who own a house, have
            previously claimed for the grant or its predecessors, or are moving
            or planning to move. If you already have an EV chargepoint and want
            a new one, you cannot apply for this grant. For more information
            about eligibility, check the government website.
          </p>
          <p style={{ paddingTop: '20px' }}>
            Before applying, check your vehicle is on the list of Office for
            Zero Emission Vehicles (OZEV)-approved electric vehicles, and check
            your chosen chargepoint is on the list of OZEV-approved chargepoint
            models. Power and Control is an OZEV-approved installer so contact
            us for a quote and we can get started on your claim.
          </p>
        </FlexImageTextSection>
      </Skew>
      <Skew background="var(--neon)">
        <FlexImageTextSection
          image="/images/page-images/ev-charging/grants/grants2.jpg"
          title=""
          text=""
        >
          <h3>
            EV chargepoint and infrastructure grant for residential and
            commercial landlords
          </h3>
          <p>
            There are two grants available for installing EV chargepoints for
            landlords. These can be used in conjunction with each other.
          </p>
          <ul>
            <li>
              <p>
                The EV chargepoint grant – You can either get £350 or 75% off
                the cost to buy and install an electric vehicle chargepoint
                socket, whichever is lower. Each financial year, you can get up
                to 200 grants for residential properties, and up to 100 grants
                for commercial properties.
              </p>
            </li>
            <li>
              <p>
                The EV infrastructure grant – This grant gives you money off the
                cost of wider building and installation work that’s needed to
                install multiple chargepoint sockets. You can get up to £30,000
                or 75% off the cost of the work. You can get up to 30 each
                financial year and they must be used for a different property.
              </p>
            </li>
          </ul>
          <p style={{ paddingTop: '20px' }}>
            <b>Eligibility:</b>
          </p>
          <ul>
            <li>
              <p>You must be a landlord with a property to let.</p>
            </li>
            <li>
              <p>You must have a clearly defined, off-street parking space.</p>
            </li>
          </ul>
          <p style={{ paddingTop: '20px' }}>
            Currently this grant does not apply to those living in the property,
            renting out the property as a holiday rental, or renting the parking
            spaces from someone else. If you’re letting out a commercial
            property, the chargepoint can only be used by the building’s staff
            and vehicles. For further information about eligibility, check the
            government website.
          </p>
          <p style={{ paddingTop: '20px' }}>
            Power and Control is an OZEV-approved installer so contact us for a
            quote and we can get started on your claim.
          </p>
        </FlexImageTextSection>
      </Skew>
      <Skew
        background="white"
        margin="0"
        padding="100px 10px"
        color="var(--navy)"
      >
        <FlexImageTextSection
          image="/images/page-images/ev-charging/grants/grants5.jpg"
          title=""
          text=""
          imagePosition={width <= 800 ? 'ltr' : 'rtl'}
          textAlign={width <= 800 ? 'left' : 'right'}
          borderLeft={width <= 800 ? `var(--neon) 2px solid` : 'none'}
          borderRight={width <= 800 ? 'none' : `var(--neon) 2px solid`}
          textPadding={width <= 800 ? '0 0px 0 30px' : '0 30px 0 0px'}
        >
          <h3>Workplace Charging Scheme</h3>
          <p>
            The Workplace Charging Scheme (WCS) is a voucher-based scheme open
            to businesses, charities and public sector organisations meeting the
            eligibility criteria. The grant covers up to 75% of the total costs
            of the purchase and installation of EV chargepoints, capped at a
            maximum of £350 per socket and 40 sockets per applicant. These
            sockets can be used at one site or up to 40.
          </p>
          <p style={{ paddingTop: '20px' }}>
            <b>Eligibility:</b>
          </p>
          <ul style={width <= 800 ? { direction: 'ltr' } : {}}>
            <li>
              <p>
                You must be a registered business, charity, or public sector
                organisation.
              </p>
            </li>
            <li>
              <p>
                You must have dedicated off-street parking that’s clearly
                associated with the applicant premises.
              </p>
            </li>
            <li>
              <p>
                You must own the property or have consent from the landlord.
              </p>
            </li>
            <li>
              <p>
                You must meet one of the three criteria’s on the government
                website.
              </p>
            </li>
            <li>
              <p>Your site must be for fleet or staff use.</p>
            </li>
          </ul>
          <p style={{ paddingTop: '20px' }}>
            Check the government website for more information about your
            eligibility. For some sites, this can be used in conjunction with
            the EV infrastructure grant.
          </p>
          <p style={{ paddingTop: '20px' }}>
            To apply for a voucher, you must fill out an application form on the
            government website. Power and Control is an OZEV-approved commercial
            installer so once you have your voucher, contact us for a quote and
            we can get started on your claim.
          </p>
        </FlexImageTextSection>
      </Skew>
      <Skew background="var(--neon)">
        <FlexImageTextSection
          image="/images/page-images/ev-charging/grants/grants1.jpg"
          title=""
          text=""
        >
          <h3>On-Street Residential Chargepoint Scheme</h3>
          <p>
            The On-Street Residential Chargepoint Scheme gives local authorities
            access to funding that can be used to purchase and install on-street
            EV charging infrastructure for residential needs. Funding is for up
            to 60% of eligible capital costs and will not exceed £7,500 per
            chargepoint, unless electrical connection costs are exceptionally
            high.
          </p>

          <p style={{ paddingTop: '20px' }}>
            <b>Eligibility:</b>
          </p>
          <ul>
            <li>
              <p>You must be a relevant local authority within the UK.</p>
            </li>
            <li>
              <p>
                You must have the explicit support of the relevant highway
                authority (or landowner).
              </p>
            </li>
            <li>
              <p>
                You must inform us of any other funding received for EV charging
                infrastructure.
              </p>
            </li>
          </ul>
          <p style={{ paddingTop: '20px' }}>
            Check out the government website for more information about this
            scheme.
          </p>
        </FlexImageTextSection>
      </Skew>
      <div className="why-us">
        <div className="why-us-inner" style={{ color: `var(--neon)` }}>
          <h2>Why choose Power and Control?</h2>
          <p>
            Power and Control are an NICEIC-certified business. We are committed
            to providing the best result to our customers. We are an
            OZEV-approved installer and will carry out your EV installation to
            the highest standards.
          </p>
          <p>
            EV chargers make a great addition to the home or workplace. If you
            want to get started on your project or have any further questions
            about which grant is best for you, give us a call or email us.
          </p>
          <div className="buttons">
            <a href="tel:+441332552320">
              <ColorButton
                backgroundColor="var(--neon)"
                name="call"
                boxShadow="var(--neon) 0px 2px 12px 2px"
              />
            </a>
            <a href="mailto:enquiries@pac-electrical.co.uk">
              <ColorButton
                backgroundColor="var(--neon)"
                name="Email"
                boxShadow="var(--neon) 0px 2px 12px 2px"
              />
            </a>
          </div>
        </div>
      </div>
    </ServiceTemplateStyles>
  );
}
