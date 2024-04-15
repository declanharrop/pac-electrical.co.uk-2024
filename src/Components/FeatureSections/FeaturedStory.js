import Image from 'next/image';
import Link from 'next/link';
import { FeaturedStoryStyles } from './FeatureSections.styled';

export default function FeaturedStory({
  data,
  type = 'Case Study',
  link = 'case-studies',
}) {
  const story = data[0];
  return (
    <FeaturedStoryStyles>
      <div className="container">
        <div className="content">
          <div className="inner">
            <Link href={`/${link}/${story.slug}`}>
              <div className="header-image">
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
              <div className="overlay">
                <div className="date">
                  <p>{/* <span>{formatDate(story.date)}</span> */}</p>
                </div>
                {/* <div className="divider" /> */}
                <div className="text">
                  <h3>
                    <span>LATEST | {type}</span>
                  </h3>
                  <h1>
                    <span>{story.title}</span>
                  </h1>
                  {/* <p>{story.subtitle}</p */}
                </div>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </FeaturedStoryStyles>
  );
}
