import { useContext, useState, useEffect } from 'react';
import Link from 'next/link';
import { APIDataContext } from '../../Context/APIDataContext';
import { LatestStoryStudyStyles } from './Footer.styles';

export default function LatestStoryStudy() {
  const { data } = useContext(APIDataContext);

  const [LatestStory, setLatestStory] = useState();
  const [LatestStudy, setLatestStudy] = useState();
  useEffect(() => {
    if (data.length !== 0) {
      setLatestStory(data.articles[0]);
      setLatestStudy(data.caseStudies[0]);
    }
  }, [data]);
  return (
    <LatestStoryStudyStyles>
      <div className="content">
        <div className="study">
          <h3>Latest Case Study</h3>
          {LatestStudy !== undefined && (
            <Link href={`/case-studies/${LatestStudy.slug}`}>
              <div className="story-content">
                <img src={LatestStudy.hero.url} alt={LatestStudy.title} />
                <div className="overlay">
                  <div className="title">
                    <h1>
                      <span>{LatestStudy.title}</span>
                    </h1>
                  </div>
                </div>
              </div>
            </Link>
          )}
        </div>
        <div className="story">
          <h3>Latest News</h3>
          {LatestStory !== undefined && (
            <Link href={`/news/${LatestStory.slug}`}>
              <div className="story-content">
                <img src={LatestStory.hero.url} alt={LatestStory.title} />
                <div className="overlay">
                  <div className="title">
                    <h1>
                      <span>{LatestStory.title}</span>
                    </h1>
                  </div>
                </div>
              </div>
            </Link>
          )}
        </div>
      </div>
    </LatestStoryStudyStyles>
  );
}
