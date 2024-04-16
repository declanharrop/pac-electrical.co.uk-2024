import { getClient } from '@/Lib/client';
import { ALL_JOBS, RECENT_JOBS } from '@/Lib/queries';
import RecruitmentFeedTemplate from '@/Templates/RecruitmentFeedTemplate';

export default async function index() {
  const client = getClient();

  const { data: recentJobsData } = await client.query({
    query: RECENT_JOBS,
  });
  const { data: allJobsData } = await client.query({
    query: ALL_JOBS,
  });

  console.log(recentJobsData.jobs);

  return (
    <div>
      <RecruitmentFeedTemplate
        recentJobsData={recentJobsData.jobs}
        allJobsData={allJobsData.jobs}
      />
    </div>
  );
}
