import Image from 'next/image';
import Link from 'next/link';
import { ThreeStorySectionStyles } from './FeatureSections.styled';

export default function ThreeStorySection({ data, link = 'case-studies' }) {
  return (
    <ThreeStorySectionStyles>
      <div className="grid-container">
        {data.map((story) => (
          <Link href={`/${link}/${story.slug}`} key={story.id}>
            <div className="story">
              <div className="image">
                <Image
                  alt={`${story.title}`}
                  src={`${story.hero.url}`}
                  priority
                  style={{
                    objectFit: 'cover',
                    objectPosition: '50% 0%',
                  }}
                  fill
                />
              </div>
              <div className="text">
                <div className="page">
                  {story.tag === 'Renewable' && (
                    <h4 className="renew">{story.tag}</h4>
                  )}
                  {story.tag === 'Electrical' && (
                    <h4 className="elec">{story.tag}</h4>
                  )}
                  {story.tag === 'EVCharging' && (
                    <h4 className="ev">{story.tag}</h4>
                  )}
                </div>
                <div className="title">
                  <h2>{story.title}</h2>
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </ThreeStorySectionStyles>
  );
}
