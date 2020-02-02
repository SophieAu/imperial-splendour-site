/* eslint-disable @typescript-eslint/no-var-requires */
/* eslint-disable @typescript-eslint/camelcase */
const { createSlug } = require('./gatsby-helper');

const hiddenPages = ['/download/*'];

const cspOptions = {
  disableOnDev: true,
  mergeStyleHashes: false,
  directives: {
    'default-src': "'self'",
    'img-src': "'self' data: https://*",
    'worker-src': "'none'",
    'frame-src': "'self' https://sketchfab.com/models/ https://www.youtube-nocookie.com/embed/",
    'script-src': "'self' https://static.sketchfab.com/static/",
    'style-src': "'self' 'unsafe-inline' https://fonts.googleapis.com/",
    'font-src': "'self' https://fonts.gstatic.com/s/",
  },
};

const feedOptions = {
  query: `
  {
    site {
      siteMetadata {
        title
        description
        siteUrl
        site_url: siteUrl
      }
    }
  }
`,
  feeds: [
    {
      serialize: ({ query: { site, allMarkdownRemark } }) =>
        allMarkdownRemark.edges.map(edge => {
          const { frontmatter, html } = edge.node;
          const slug = createSlug(frontmatter.title, frontmatter.formattedDate);

          return Object.assign({}, frontmatter, {
            description: frontmatter.excerpt,
            date: frontmatter.date,
            author: frontmatter.author,
            excerpt: frontmatter.excerpt,
            url: site.siteMetadata.siteUrl + '/blog/' + slug,
            guid: site.siteMetadata.siteUrl + '/blog/' + slug,
            custom_elements: [{ 'content:encoded': html }],
          });
        }),
      query: `
      {
        allMarkdownRemark(
          sort: { order: DESC, fields: [frontmatter___date] },
          filter: {fileAbsolutePath: {regex: "/data\/content\/posts/"}}
        ) {
          edges {
            node {
              html
              frontmatter {
                author
                excerpt
                title
                date
                formattedDate: date(formatString: "YYYY-MM-DD")
              }
            }
          }
        }
      }
    `,
      output: '/rss.xml',
      title: "Imperial Splendour's RSS Feed",
    },
  ],
};

const manifestOptions = {
  name: `imperial-splendour-site`,
  short_name: `imp-splen`,
  start_url: `/`,
  background_color: `#B19776`,
  theme_color: `#B19776`,
  display: `minimal-ui`,
  icon: `favicon.png`, // This path is relative to the root of the site.
};

const transformerRemarkOptions = {
  plugins: [
    `gatsby-remark-prismjs`,
    {
      resolve: 'gatsby-remark-images',
      options: { maxWidth: 970, quality: 90, withWebp: true },
    },
  ],
};

module.exports = {
  siteMetadata: {
    title: `Imperial Splendour`,
    description: `Imperial Splendour attempts to create the best Empire: Total War experience possible without destroying the essence of the game.`,
    author: `Sophie Au`,
    siteUrl: `https://imperialsplendour.com`,
  },
  plugins: [
    `gatsby-plugin-netlify-cms`,
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-sass`,
    `gatsby-plugin-sitemap`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-typescript`,
    `gatsby-transformer-sharp`,
    'gatsby-transformer-yaml',
    {
      resolve: `gatsby-plugin-csp`,
      options: cspOptions,
    },
    {
      resolve: `gatsby-plugin-feed`,
      options: feedOptions,
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: manifestOptions,
    },
    {
      resolve: 'gatsby-plugin-robots-txt',
      options: { policy: [{ userAgent: '*', disallow: hiddenPages, noindex: hiddenPages }] },
    },
    {
      resolve: `gatsby-plugin-sitemap`,
      options: { exclude: hiddenPages },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: { name: 'comments', path: `${__dirname}/data/content/comments/` },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: { name: `blog-posts`, path: `${__dirname}/data/content/posts/` },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: { name: `factions`, path: `${__dirname}/data/content/factions/` },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: { name: `terms-of-service`, path: `${__dirname}/data/content/terms-of-service/` },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: { name: `images`, path: `${__dirname}/data/img/` },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: transformerRemarkOptions,
    },
  ],
};
