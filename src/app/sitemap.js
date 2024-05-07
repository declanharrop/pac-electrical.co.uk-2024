import { getClient } from '@/Lib/client';
import { ALL_NEWS_DATA, ALL_STUDIES_DATA } from '@/Lib/queries';

const URL = 'https://pac-electrical.co.uk';

export default async function sitemap() {
  const client = getClient();

  const { data: newsPages } = await client.query({
    query: ALL_NEWS_DATA,
  });
  const { data: caseStudyPages } = await client.query({
    query: ALL_STUDIES_DATA,
  });

  const news = newsPages.articles.map((article) => ({
    url: `${URL}/news/${article.slug}`,
    lastModified: article.date,
  }));

  const studies = caseStudyPages.caseStudies.map((studies) => ({
    url: `${URL}/news/${studies.slug}`,
    lastModified: studies.date,
  }));

  const routes = [
    '',
    '/solar',
    '/solar/commercial',
    '/solar/domestic',
    '/solar/about-solar',
    '/solar/our-process',
    '/about',
    '/case-studies',
    '/electrical',
    '/electrical/certificates-and-accreditations',
    '/electrical/data-communication',
    '/electrical/fault-finding-repair-and-maintenance',
    '/electrical/heating-systems',
    '/electrical/larger-domestic-electrical-installations',
    '/electrical/led-lighting-systems',
    '/electrical/testing-and-inspections',
    '/ev-charging',
    '/ev-charging/grants',
    '/ev-charging/home-ev-charging',
    '/ev-charging/recharge',
    '/ev-charging/workplace-ev-charging',
    '/get-a-quote',
    '/information/job-applications',
    '/information/privacy-policy',
    '/information/success',
    '/information/terms-and-conditions',
    '/news',
    '/recruitment',
    '/renewables',
    '/renewables/battery-storage',
    '/renewables/commercial-solar-pv-installation',
    '/renewables/domestic-solar-pv-installation',
    '/renewables/mcs',
    '/renewables/solar',
    '/request-callback',
    '/reviews',
    '/thank-you',
    '/whats-next',
  ].map((route) => ({
    url: `${URL}${route}`,
    lastModified: new Date().toISOString(),
  }));

  return [...routes, ...news, ...studies];
}
