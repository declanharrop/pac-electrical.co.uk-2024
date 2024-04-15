import Image from 'next/image';
import Link from 'next/link';
import { GeneralStorySectionStyles } from './FeatureSections.styled';

export default function GeneralStorySection({ data, link = 'case-studies' }) {
  return (
    <GeneralStorySectionStyles>
      <div className="container">
        {data.map((story) => (
          <Link href={`/${link}/${story.slug}`} key={story.id}>
            <div className="story">
              <div className="left">
                <div className="image">
                  <Image
                    alt={`${story.title}`}
                    src={`${story.hero.url}`}
                    priority
                    style={{
                      objectFit: 'cover',
                    }}
                    fill
                  />
                </div>
              </div>
              <div className="right">
                <div className="text">
                  <h4>{story.tag}</h4>
                  <h3>{story.title}</h3>
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </GeneralStorySectionStyles>
  );
}
