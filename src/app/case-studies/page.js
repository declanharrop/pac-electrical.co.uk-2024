import { getClient } from '@/Lib/client';
import CaseStudyFeedTemplate from '../../Templates/CaseStudyFeedTemplate';
import {
  FEATURED_CASE_STUDY,
  RECENT_CASE_STUDIES,
  REMAINING_CASE_STUDIES,
} from '@/Lib/queries';

export default async function CaseStudies() {
  const client = getClient();
  const { data: featuredStudyData } = await client.query({
    query: FEATURED_CASE_STUDY,
  });
  const { data: recentStudyData } = await client.query({
    query: RECENT_CASE_STUDIES,
  });
  const { data: allStudyData } = await client.query({
    query: REMAINING_CASE_STUDIES,
  });

  return (
    <div>
      <CaseStudyFeedTemplate
        featuredStudyData={featuredStudyData.caseStudies}
        recentStudyData={recentStudyData.caseStudies}
        allStudyData={allStudyData.caseStudies}
      />
    </div>
  );
}
