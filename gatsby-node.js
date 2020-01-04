/* eslint-disable @typescript-eslint/no-var-requires */
const path = require(`path`);

const POST_QUERY = `
  {
    posts: allMarkdownRemark(filter: {fileAbsolutePath: {regex: "/data\/posts/"}}) {
      edges {
        node {
          id
          frontmatter {
            title
            date(formatString: "YYYY-MM-DD")
          }
        }
      }
    }
  tos: allMarkdownRemark(filter: {fileAbsolutePath: {regex: "/data\/terms-of-service/"}}) {
    edges {
      node {
        id
        frontmatter {
          title
          description
        }
      }
    }
  }
}
`;

exports.createPages = ({ graphql, actions }) =>
  new Promise((resolve, _) => {
    const post = path.resolve(`./src/templates/post.tsx`);
    const termsOfService = path.resolve(`./src/templates/terms-of-service.tsx`);

    graphql(POST_QUERY).then(result => {
      // Blog Pages
      console.log('Creating Blog Pages...');
      result.data.posts.edges.forEach(({ node }) => {
        const formattedTitle = node.frontmatter.title
          .toLowerCase()
          .replace(/\s/g, '-')
          .replace(/[^\w-]/g, '')
          .replace(/(-+)/g, '-');
        const slug = `${node.frontmatter.date}-${formattedTitle}`;

        actions.createPage({
          path: `blog/${slug}`,
          component: post,
          context: { slug, id: node.id },
        });

        console.log(slug);
      });
      console.log();

      // Terms of Service
      console.log('Creating Terms of Service...');
      result.data.tos.edges.forEach(({ node }) => {
        actions.createPage({
          path: `terms-of-service`,
          component: termsOfService,
          context: { id: node.id },
        });
      });
      console.log();

      resolve();
    });
  });
