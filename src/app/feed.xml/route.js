import RSS from 'rss';

import { getClient } from '@/Lib/client';
import { ALL_NEWS_DATA, ALL_STUDIES_DATA } from '@/Lib/queries';

export async function GET() {
  const client = getClient();
  const { data: newsPages } = await client.query({
    query: ALL_NEWS_DATA,
  });
  const { data: caseStudyPages } = await client.query({
    query: ALL_STUDIES_DATA,
  });

  const studies = caseStudyPages.caseStudies.map((studies) => ({
    url: `${URL}/news/${studies.slug}`,
    lastModified: studies.date,
  }));

  const feed = new RSS({
    title: 'Power & Control - Solar Experts News Feed',
    site_url: 'https://pac-electrical.co.uk',
    feed_url: 'https://pac-electrical.co.uk/feed.xml',
    copyright: `${new Date().getFullYear()} Power & Control Ltd`,
    language: 'en',
    pubDate: new Date(),
  });

  newsPages.articles.map((article) => {
    feed.item({
      title: article.title,
      guid: `https://pac-electrical.co.uk/news/${article.slug}`,
      url: `https://pac-electrical.co.uk/news/${article.slug}`,
      date: article.date,
    });
  });

  caseStudyPages.caseStudies.map((studies) => {
    feed.item({
      title: studies.title,
      guid: `https://pac-electrical.co.uk/news/${studies.slug}`,
      url: `https://pac-electrical.co.uk/news/${studies.slug}`,
      date: studies.date,
    });
  });

  return new Response(feed.xml({ indent: true }), {
    headers: {
      'Content-Type': 'application/atom+xml; charset=utf-8',
    },
  });
}
