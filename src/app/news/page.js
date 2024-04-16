import { getClient } from '@/Lib/client';
import NewsFeedTemplate from '../../Templates/NewsFeedTemplate';
import {
  FEATURED_NEWS_STORY,
  RECENT_NEWS_STORIES,
  REMAINING_NEWS_STORIES,
} from '@/Lib/queries';

export default async function index() {
  const client = getClient();

  const { data: featuredNewsData } = await client.query({
    query: FEATURED_NEWS_STORY,
  });
  const { data: recentNewsData } = await client.query({
    query: RECENT_NEWS_STORIES,
  });
  const { data: allNewsData } = await client.query({
    query: REMAINING_NEWS_STORIES,
  });

  return (
    <div>
      <NewsFeedTemplate
        featuredNewsData={featuredNewsData.articles}
        recentNewsData={recentNewsData.articles}
        allNewsData={allNewsData.articles}
      />
    </div>
  );
}
