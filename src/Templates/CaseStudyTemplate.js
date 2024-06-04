'use client';

import Link from 'next/link';
import CaseStudyTemplateStyles from './styles/CaseStudyTemplate.styles';
import formatDate from '../Lib/formatDate';
import Head from '../Elements/Head';
import Hero from '../Components/Hero/Hero';
import CaseStudySlider from '../Components/Sliders/CaseStudySlider';
import ColorButton from '../Elements/ColorButton';
import SliderBlock from '@/Components/Blocks/SliderBlock';

export default function CaseStudyTemplate({ study }) {
  return (
    <>
      <Head
        title={`${study.title} - Power and Control`}
        description={study.metaDesc.substring(0, 160)}
        ogImage={study.hero.url}
        ogType="article"
        url={`https://pac-electrical.co.uk/news/${study.slug}`}
      />
      <Hero
        src={study.hero.url}
        alt={`Power and Control - ${study.title} Case Study`}
        height="60vh"
      >
        <div className="decorated-title">
          <h1>{study.title}</h1>
          <p>{study.introduction}</p>
        </div>
      </Hero>
      <CaseStudyTemplateStyles>
        <div className="detail-section">
          {study.client && (
            <div className="detail">
              <h5>Client</h5>
              <h4>{study.client}</h4>
            </div>
          )}
          {study.sector && (
            <div className="detail">
              <h5>Sector</h5>
              <h4>{study.sector}</h4>
            </div>
          )}
          {study.technology && (
            <div className="detail">
              <h5>Technology</h5>
              <h4>{study.technology}</h4>
            </div>
          )}
          {study.systemSize && (
            <div className="detail">
              <h5>System Size</h5>
              <h4>{study.systemSize}</h4>
            </div>
          )}
          {study.paybackPeriod && (
            <div className="detail">
              <h5>Payback Period</h5>
              <h4>{study.paybackPeriod}</h4>
            </div>
          )}
          {study.savings && (
            <div className="detail">
              <h5>25-YEAR SAVINGS</h5>
              <h4>{study.savings}</h4>
            </div>
          )}
          {study.annualOutput && (
            <div className="detail">
              <h5>ESTIMATED ANNUAL OUTPUT</h5>
              <h4>{study.annualOutput}</h4>
            </div>
          )}
          {study.co2Savings && (
            <div className="detail">
              <h5>ANNUAL CO2 SAVINGS</h5>
              <h4>{study.co2Savings}</h4>
            </div>
          )}
          {study.installed && (
            <div className="detail products">
              <h5>Products</h5>
              <h4>{study.installed}</h4>
            </div>
          )}
        </div>
      </CaseStudyTemplateStyles>
      <CaseStudyTemplateStyles>
        {study.ytVideo && (
          <div className="iframe-section">
            <iframe
              src={study.ytVideo}
              title="Power and Control YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowfullscreen
            />
          </div>
        )}
        <div className="content">
          <p className="sm-grey">{formatDate(study.date)}</p>
          {/* eslint-disable-next-line react/no-danger */}
          <div dangerouslySetInnerHTML={{ __html: study.content.html }} />
        </div>
      </CaseStudyTemplateStyles>
      {study.slideshow.length >= 1 && (
        <>
          <SliderBlock images={study.slideshow} />
          <div className="spacer-md" />
        </>
      )}
      <div
        className="buttons"
        style={{ justifyContent: 'center', margin: '40px 0 0' }}
      >
        <Link href="/request-callback">
          <button type="button" className="focus-button">
            Request a callback
          </button>
        </Link>
        <Link href="/get-a-quote">
          <button type="button" className="secondary-button-alternate">
            Get a quote
          </button>
        </Link>
      </div>
      <div style={{ marginBottom: '40px' }} />
    </>
  );
}
