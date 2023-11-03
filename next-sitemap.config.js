const siteMetadata = require("./src/utils/site-meta-data");

/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: siteMetadata.siteUrl,
  generateRobotsTxt: true,
};
