import { getClient } from '@/Lib/client';
import CaseStudyTemplate from '../../../Templates/CaseStudyTemplate';
import { CASE_STUDY } from '@/Lib/queries';

export async function generateMetadata({ params }) {
  const client = getClient();
  const pathname = params.slug[0];
  const { data: caseStudy } = await client.query({
    query: CASE_STUDY,
    variables: {
      slug: pathname,
    },
  });

  const study = caseStudy.caseStudies[0];
  return {
    title: `${study.title} - Power & Control Ltd`,
    description: study.metaDesc.substring(0, 160),
    url: `https://pac-electrical.co.uk/case-studies/${study.slug}`,
    type: 'article',
    image: study.hero.url,
    openGraph: {
      title: `${study.title} - Power & Control Ltd`,
      description: study.metaDesc.substring(0, 160),
      url: `https://pac-electrical.co.uk/case-studies/${study.slug}`,
      type: 'article',
      article: {
        publishedTime: study.date,
        section: study.sector,
      },
      images: [
        {
          url: study.hero.url,
        },
      ],
    },
  };
}
export default async function CaseStudy({ params }) {
  const client = getClient();
  const pathname = params.slug[0];

  const { data: study } = await client.query({
    query: CASE_STUDY,
    variables: {
      slug: pathname,
    },
  });
  return <CaseStudyTemplate study={study.caseStudies[0]} />;
}
