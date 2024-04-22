import { getClient } from '@/Lib/client';
import { ALL_NEWS_DATA, ALL_STUDIES_DATA } from '@/Lib/queries';

export default async function generateSitemap() {
  const client = getClient();

  const { data: newsPages } = await client.query({
    query: ALL_NEWS_DATA,
  });
  const { data: caseStudyPages } = await client.query({
    query: ALL_STUDIES_DATA,
  });

  const news = newsPages.articles.map((article) => ({
    loc: `/news/${article.slug}`,
    lastmod: article.date,
  }));

  const studies = caseStudyPages.caseStudies.map((article) => ({
    loc: `/news/${article.slug}`,
    lastmod: article.date,
  }));

  return [...news, ...studies];
}
