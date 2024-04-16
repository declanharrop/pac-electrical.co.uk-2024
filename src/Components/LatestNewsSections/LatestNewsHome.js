'use client';

import React, { useContext, useEffect, useState } from 'react';
import Link from 'next/link';
import { LatestNewsHomeStyles } from './LatestNews.styles';
import ThreeStorySection from '../FeatureSections/ThreeStorySection';

export default function LatestNewsHome({ data }) {
  const [FirstArticle, setFirstArticle] = useState();
  const [PreviousThreeArticles, setPreviousThreeArticles] = useState();

  useEffect(() => {
    if (data.length !== 0) {
      setFirstArticle(data.articles[0]);
      setPreviousThreeArticles(data.articles.slice(1, 4));
    }
  }, [data]);

  return (
    <>
      <LatestNewsHomeStyles>
        <h2>Latest News</h2>
        {FirstArticle !== undefined && (
          <div className="feature-section">
            <Link href={`/news/${FirstArticle?.slug}`}>
              <div className="image">
                <img src={FirstArticle?.hero.url} alt="" />
              </div>
              <div className="overlay">
                <div className="text">
                  <h3>
                    <span>LATEST | {FirstArticle?.tag}</span>
                  </h3>
                  <h1>
                    <span>{FirstArticle?.title}</span>
                  </h1>
                  {/* <p>{story.subtitle}</p */}
                </div>
              </div>
            </Link>
          </div>
        )}
        {PreviousThreeArticles !== undefined && (
          <ThreeStorySection data={PreviousThreeArticles} />
        )}
      </LatestNewsHomeStyles>
    </>
  );
}
