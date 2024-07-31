'use client';

import Image from 'next/image';
import Link from 'next/link';
import NewsArticleTemplateStyles from './styles/NewsArticleTemplate.styles';
import Head from '../Elements/Head';
import CaseStudySlider from '../Components/Sliders/CaseStudySlider';
import formatDate from '../Lib/formatDate';
import ColorButton from '../Elements/ColorButton';
import SliderBlock from '@/Components/Blocks/SliderBlock';

export default function NewsArticleTemplate({ data }) {
  return (
    <>
      <Head
        title={`${data.title} - Power and Control`}
        description={data.metaDescription}
        ogImage={data.hero.url}
        ogType="article"
        url={`https://pac-electrical.co.uk/news/${data.slug}`}
      />
      <NewsArticleTemplateStyles>
        <div className="hero">
          <Image
            src={data.hero.url}
            alt={data.title}
            title={data.heroAlt}
            style={{
              objectFit: 'cover',
              objectPosition: 'center center',
            }}
            fill
          />
        </div>
        <div className="article">
          <div className="divider" style={{ margin: '0', width: '100%' }} />
          <div className="title">
            <h1>{data.title}</h1>
            <div className="flex">
              {data.tag === 'Renewable' && (
                <h3 className="renew">{data.tag}</h3>
              )}
              {data.tag === 'Electrical' && (
                <h3 className="elec">{data.tag}</h3>
              )}
              {data.tag === 'EVCharging' && <h3 className="ev">{data.tag}</h3>}
              <p className="sm-grey">{formatDate(data.date)}</p>
            </div>
            {data.subtitle && <h5>{data.subtitle}</h5>}
          </div>
          <div className="divider" style={{ margin: '0', width: '100%' }} />
          <div className="article-content">
            {data.ytVideo && (
              <div className="frame-placer">
                <iframe
                  src={data.ytVideo}
                  title="YouTube video player"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                />
              </div>
            )}
            {/* eslint-disable-next-line react/no-danger */}
            <div dangerouslySetInnerHTML={{ __html: data.content.html }} />
          </div>
        </div>
        {data.slideshow.length >= 1 && <SliderBlock images={data.slideshow} />}
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
      </NewsArticleTemplateStyles>
    </>
  );
}
