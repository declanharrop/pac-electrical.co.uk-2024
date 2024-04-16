import { getClient } from '@/Lib/client';
import CaseStudyTemplate from '../../../Templates/CaseStudyTemplate';
import { CASE_STUDY } from '@/Lib/queries';

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
