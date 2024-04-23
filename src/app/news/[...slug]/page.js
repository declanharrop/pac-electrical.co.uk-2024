import { getClient } from '@/Lib/client';
import { NEWS_STORY } from '@/Lib/queries';
import NewsArticleTemplate from '@/Templates/NewsArticleTemplate';

export async function generateMetadata({ params }) {
  const client = getClient();
  const pathname = params.slug[0];
  const { data: newsArticle } = await client.query({
    query: NEWS_STORY,
    variables: {
      slug: pathname,
    },
  });

  const article = newsArticle.articles[0];

  return {
    title: `${article.title} - Power & Control Ltd`,
    description: article,
    url: `https://pac-electrical.co.uk/case-studies/${article.slug}`,
    type: 'article',
    image: article.hero.url,
    openGraph: {
      title: `${article.title} - Power & Control Ltd`,
      description: article,
      url: `https://pac-electrical.co.uk/case-studies/${article.slug}`,
      type: 'article',
      article: {
        publishedTime: article.date,
        section: article.sector,
      },
      images: [
        {
          url: article.hero.url,
        },
      ],
    },
  };
}
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
