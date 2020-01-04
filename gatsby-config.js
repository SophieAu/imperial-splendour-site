/* eslint-disable @typescript-eslint/camelcase */
module.exports = {
  siteMetadata: {
    title: `Imperial Splendour`,
    description: `Imperial Splendour attempts to create the best Empire: Total War experience possible without destroying the essence of the game.`,
    author: `Sophie Au`,
    siteUrl: `https://imperialsplendour.com`,
  },
  plugins: [
    `gatsby-plugin-feed`,
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-sass`,
    `gatsby-plugin-sitemap`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-typescript`,
    `gatsby-transformer-sharp`,
    'gatsby-transformer-yaml',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'comments',
        path: `${__dirname}/data/comments/`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `blog-posts`,
        path: `${__dirname}/src/pages/blog/`,
        ignore: [`index.(tsx|scss)`],
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          `gatsby-remark-prismjs`,
          {
            resolve: 'gatsby-remark-images',
            options: { maxWidth: 970 },
          },
        ],
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `imperial-splendour-site`,
        short_name: `imp-splen`,
        start_url: `/`,
        background_color: `#B19776`,
        theme_color: `#B19776`,
        display: `minimal-ui`,
        icon: `favicon.png`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: `gatsby-plugin-csp`,
      options: {
        disableOnDev: true,
        mergeStyleHashes: false,
        directives: {
          'default-src': "'none'",
          'img-src': "'self' https://*",
          'worker-src': "'none'",
          'frame-src':
            "'self' https://sketchfab.com/models/ https://www.youtube-nocookie.com/embed/",
          'script-src': "'self' https://static.sketchfab.com/static/",
          'style-src': "'self' 'unsafe-inline' blob:https://fonts.googleapis.com/css",
          'font-src': "'self' https://fonts.gstatic.com/s/",
        },
      },
    },
  ],
};
