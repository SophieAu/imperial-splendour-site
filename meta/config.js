/* eslint-disable @typescript-eslint/no-var-requires */
/* eslint-disable @typescript-eslint/camelcase */
const { createSlug } = require('./util');

const hiddenPages = ['/download/*', '/404'];

const renderCard = ({ title, author = [] }) => {
  const authorPortraits = author
    .map(
      auth =>
        `<img src="../../data/img/about/${auth}_portrait.png" style="padding-left:20px;width:150px;height:100%;"/>`
    )
    .join('');

  return `<head><link href="https://fonts.googleapis.com/css?family=IM+Fell+English&display=swap" rel="stylesheet" /><link href="https://fonts.googleapis.com/css?family=IM+Fell+English+SC&display=swap" rel="stylesheet" /></head><body style="margin:0"><div style="background-image: url(../../data/img/texture_bg.webp);width:1080px;height:510px;padding:60px;display: flex;flex-direction: column;justify-content: space-between;"><div style="display: flex;flex-direction: row;justify-content: space-between;"><img src="../../data/img/index/hero_logo.png" style="width:540px;"/><div>${authorPortraits}</div></div><p style="font-family: IM Fell English;font-size: 64px;height: 245px;margin:0;">${title}</p></div></body>`;
};

exports.siteMetadata = {
  title: `Imperial Splendour`,
  description: `Imperial Splendour attempts to create the best Empire: Total War experience possible without destroying the essence of the game.`,
  author: `Sophie Au`,
  siteUrl: `https://imperialsplendour.com`,
};

exports.feedOptions = {
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

exports.manifestOptions = {
  name: `imperial-splendour-site`,
  short_name: `imp-splen`,
  start_url: `/`,
  background_color: `#B19776`,
  theme_color: `#B19776`,
  display: `minimal-ui`,
  icon: `favicon.png`, // This path is relative to the root of the site.
};

exports.transformerRemarkOptions = {
  plugins: [
    { resolve: 'gatsby-remark-images', options: { maxWidth: 970, quality: 90, withWebp: true } },
  ],
};

exports.reactSVGOptions = { rule: { include: /\.inline\.svg$/ } };

exports.robotsTxtOptions = {
  policy: [{ userAgent: '*', disallow: hiddenPages, noindex: hiddenPages }],
};

exports.sitemapOptions = { exclude: hiddenPages };

exports.filesystemContentOptions = { name: 'content', path: `${__dirname}/../data/content/` };
exports.filesystemImageOptions = { name: 'img', path: `${__dirname}/../data/img/` };

exports.socialImageOptions = { design: renderCard };
