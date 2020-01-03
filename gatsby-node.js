/* eslint-disable @typescript-eslint/no-var-requires */
const path = require(`path`);
const { getSlug } = require(`./src/helpers`);

const QUERY = `
  {
    allMarkdownRemark {
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
  }
`;

exports.createPages = ({ graphql, actions }) =>
  new Promise((resolve, _) => {
    const postTemplate = path.resolve(`./src/templates/post.tsx`);
    console.log('Creating Blog Pages:');

    graphql(QUERY).then(result => {
      result.data.allMarkdownRemark.edges.forEach(({ node }) => {
        const slug = getSlug(node.title, node.date);

        actions.createPage({
          path: `blog/${slug}`,
          component: postTemplate,
          context: { slug, id: node.id },
        });

        console.log(slug);
      });

      console.log();
      resolve();
    });
  });
