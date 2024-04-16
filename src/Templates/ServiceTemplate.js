'use client';

import { useEffect, useState, useContext } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import Skew from '@/Components/ContentSections/Skew';
import Head from '@/Elements/Head';
import Hero from '@/Components/Hero/Hero';
import FlexImageTextSection from '@/Components/ContentSections/FlexImageTextSection';
import ServiceTemplateStyles from './styles/ServiceTemplate.styles';
import ColorButton from '@/Elements/ColorButton';
import Accordian from '@/Components/Accordian/Accordian';
import Modal from '@/Elements/Modal/Modal';
import { MenuContext } from '@/Context/MenuContext';
import ModalButton from '@/Elements/Modal/ModalButton';
import Accreds from '@/Components/Footer/Accreds';
import VideoSection from '@/Components/ContentSections/VideoSection';

export default function ServiceTemplate({
  data,
  mainColor = 'var(--green)',
  borderColor = 'var(--navy)',
}) {
  const pageData = data[0];

  // eslint-disable-next-line no-unused-vars
  const [width, setWidth] = useState();
  const { isModalOpen } = useContext(MenuContext);
  const pathname = usePathname();
  useEffect(() => {
    setWidth(window.innerWidth);
    window.addEventListener('resize', () => setWidth(window.innerWidth));
    return () =>
      window.removeEventListener('resize', () => setWidth(window.innerWidth));
  }, []);
  return (
    <ServiceTemplateStyles>
      <Head
        url={`https://pac-electrical.co.uk${pageData.slug}`}
        title={`${pageData.page} - Power and Control`}
        description={pageData.intro[0]}
        ogImage={`https://pac-electrical.co.uk/images/page-images${pageData.slug}${pageData.heroImage}`}
      />
      <Hero
        src={`/images/page-images${pageData.slug}${pageData.heroImage}`}
        alt={pageData.page}
        overlayColor={pageData.overlayColor}
        textColor={pageData.textColor}
        height="70vh"
        objectPosition={pageData.heroPosition}
        overlayPadding="0"
      >
        <div className="standard-title">
          <h1>{pageData.page}</h1>
          <div className="buttons">
            <Link href="/request-callback">
              <button
                aria-label="Request a callback"
                type="button"
                className="home-callback secondary-button"
              >
                Request a callback
              </button>
            </Link>
            <Link href="/get-a-quote">
              <button
                aria-label="Get a quote"
                type="button"
                className="home-getaquote focus-button"
              >
                Get a quote
              </button>
            </Link>
          </div>
        </div>
      </Hero>
      <Accreds />
      <Skew background={mainColor} padding="80px 10px">
        {pathname === '/renewables' ? (
          <VideoSection />
        ) : (
          <FlexImageTextSection
            image={`/images/page-images${pageData.slug}${pageData.introImage}`}
            title=""
            intro={pageData.intro}
            text=""
          />
        )}
      </Skew>
      <Skew
        background="white"
        margin="0"
        padding="100px 10px"
        color={mainColor}
      >
        {/* <FlexImageTextSection
          image={`/images/page-images${pageData.slug}${pageData.list.image}`}
          title=""
          text=""
          imagePosition={width <= 800 ? 'ltr' : 'rtl'}
          textAlign={width <= 800 ? 'left' : 'right'}
          borderLeft={width <= 800 ? `${mainColor} 2px solid` : 'none'}
          borderRight={width <= 800 ? 'none' : `${mainColor} 2px solid`}
          textPadding={width <= 800 ? '0 0px 0 30px' : '0 30px 0 0px'}
        >
        <h3>{pageData.list.title}</h3>
          <ul style={width <= 800 ? { direction: 'ltr' } : {}}>
            {pageData.list.items.map((item, i) => (
              <li key={i}>
                <p style={{ marginBottom: '2px' }}>
                <b>{item.title}</b>
                </p>
                <p>{item.text}</p>
                </li>
            ))}
            </ul>
        </FlexImageTextSection> */}
        {pageData.list && (
          <div className="benefits-grid">
            <div className="benefits-grid-inner">
              <h3>{pageData.list.title}</h3>
              {pageData.list.items && (
                <div className="grid">
                  {pageData.list.items.map((item, i) => (
                    <div
                      key={i}
                      className="item"
                      style={{
                        backgroundColor: `${mainColor}`,
                        borderBottom: `4px solid ${borderColor}`,
                        height: `${item.list ? '500px' : '100%'}`,
                      }}
                    >
                      <img src={`/images/chargers/${item.image}`} alt="" />
                      <h3>{item.title}</h3>
                      <p>{item.text}</p>
                      {item.list && (
                        <>
                          <ModalButton id={item.title} buttonTitle="Benefits" />

                          <Modal
                            key={item.title}
                            show={isModalOpen}
                            id={item.title}
                            backgroundColor={mainColor}
                            textColor="white"
                          >
                            <div
                              className="benefits-list"
                              style={{
                                backgroundColor: `${mainColor}`,
                              }}
                            >
                              <h2>{item.title}</h2>
                              <h5
                                style={{
                                  borderBottom: `3px solid ${borderColor}`,
                                }}
                              >
                                Benefits
                              </h5>
                              <ul>
                                {item.list.map((listItem, a) => (
                                  <li key={a}>{listItem}</li>
                                ))}
                              </ul>
                            </div>
                          </Modal>
                        </>
                      )}
                    </div>
                  ))}
                </div>
              )}
              {pageData.list.para && (
                <div className="cont">
                  {pageData.list.para.map((para, y) => (
                    <p key={y}>{para}</p>
                  ))}
                </div>
              )}
            </div>
          </div>
        )}
      </Skew>
      {pageData.faqsImage && (
        <div
          className="full-width-image"
          style={{ borderTop: `6px solid ${mainColor}` }}
        >
          <Image
            src={`/images/page-images${pageData.slug}${pageData.faqsImage}`}
            alt={pageData.page}
            style={{
              objectFit: 'cover',
              objectPosition: 'center center',
            }}
            fill
          />
        </div>
      )}
      {pageData.faqs.length > 0 && (
        <Skew margin="0" background={mainColor} padding="100px 10px">
          {pageData.faqTitle ? (
            <h3>{pageData.faqTitle}</h3>
          ) : (
            <h3>Frequently Asked Questions</h3>
          )}
          <Accordian data={pageData.faqs} color={mainColor} />
        </Skew>
      )}
      <div className="why-us">
        <div className="why-us-inner" style={{ color: `${mainColor}` }}>
          <h2>Why choose Power and Control?</h2>
          {pageData.whyChoose.map((item, i) => (
            <p key={i}>{item}</p>
          ))}
          <div className="buttons">
            <a href="tel:+441332552320">
              <button type="button" className="">
                Call
              </button>
            </a>
            <a href="mailto:enquiries@pac-electrical.co.uk">
              <button type="button" className="">
                Email
              </button>
            </a>
            <Link href={pageData.buttonLink}>
              <button type="button" className="">
                Get a quote
              </button>
            </Link>
          </div>
        </div>
      </div>
    </ServiceTemplateStyles>
  );
}
