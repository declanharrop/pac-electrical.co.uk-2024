import { getClient } from '@/Lib/client';
import { NEWS_STORY } from '@/Lib/queries';
import NewsArticleTemplate from '@/Templates/NewsArticleTemplate';

export default async function NewsArticle({ params }) {
  const client = getClient();
  const pathname = params.slug[0];

  const { data: article } = await client.query({
    query: NEWS_STORY,
    variables: {
      slug: pathname,
    },
  });
  return <NewsArticleTemplate data={article.articles[0]} />;
}
