// next-sitemap.config.js

/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: 'https://pac-electrical.co.uk/',
  generateRobotsTxt: true,
  robotsTxtOptions: {
    additionalSitemaps: [
      'https://pac-electrical.co.uk/server-sitemap-index.xml',
    ],
  },
};
