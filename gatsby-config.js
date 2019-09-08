module.exports = {
  plugins: [
    `gatsby-plugin-feed`,
    `gatsby-plugin-sass`,
    `gatsby-plugin-react-helmet`,
    "gatsby-plugin-sharp",
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `blog-posts`,
        path: `${__dirname}/src/pages/blog-posts/`
      }
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          `gatsby-remark-prismjs`,
          {
            resolve: "gatsby-remark-images",
            options: {
              maxWidth: 970
            }
          }
        ]
      }
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
        icon: `favicon.png` // This path is relative to the root of the site.
      }
    }
  ]
};
