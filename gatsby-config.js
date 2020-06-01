/* eslint-disable @typescript-eslint/no-var-requires */
const {
  siteMetadata,
  feedOptions,
  manifestOptions,
  reactSVGOptions,
  robotsTxtOptions,
  sitemapOptions,
  filesystemContentOptions,
  filesystemImageOptions,
  transformerRemarkOptions,
  socialImageOptions,
} = require('./meta/config');

const pageCreatorOptions = { path: `${__dirname}/src/pages`, ignore: [`**/*.styles.ts`] };

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
    { resolve: `gatsby-plugin-feed`, options: feedOptions },
    { resolve: `gatsby-plugin-manifest`, options: manifestOptions },
    { resolve: `gatsby-plugin-page-creator`, options: pageCreatorOptions },
    { resolve: `gatsby-plugin-react-svg`, options: reactSVGOptions },
    { resolve: 'gatsby-plugin-robots-txt', options: robotsTxtOptions },
    { resolve: `gatsby-plugin-sitemap`, options: sitemapOptions },
    { resolve: 'gatsby-source-filesystem', options: filesystemContentOptions },
    { resolve: 'gatsby-source-filesystem', options: filesystemImageOptions },
    { resolve: `gatsby-transformer-remark`, options: transformerRemarkOptions },
    { resolve: `gatsby-remark-social-image`, options: socialImageOptions },
  ],
};
