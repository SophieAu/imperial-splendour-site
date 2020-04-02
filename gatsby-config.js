/* eslint-disable @typescript-eslint/no-var-requires */
const {
  siteMetadata,
  cspOptions,
  feedOptions,
  manifestOptions,
  robotsTxtOptions,
  sitemapOptions,
  filesystemContentOptions,
  filesystemImageOptions,
  transformerRemarkOptions,
} = require('./meta/config');

module.exports = {
  siteMetadata,
  plugins: [
    `gatsby-plugin-typescript`,
    `gatsby-plugin-linaria`,
    `gatsby-plugin-netlify-cms`,
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-sitemap`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    'gatsby-transformer-yaml',
    { resolve: `gatsby-plugin-csp`, options: cspOptions },
    { resolve: `gatsby-plugin-feed`, options: feedOptions },
    { resolve: `gatsby-plugin-manifest`, options: manifestOptions },
    { resolve: 'gatsby-plugin-robots-txt', options: robotsTxtOptions },
    { resolve: `gatsby-plugin-sitemap`, options: sitemapOptions },
    { resolve: 'gatsby-source-filesystem', options: filesystemContentOptions },
    { resolve: 'gatsby-source-filesystem', options: filesystemImageOptions },
    { resolve: `gatsby-transformer-remark`, options: transformerRemarkOptions },
  ],
};
