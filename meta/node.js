/* eslint-disable @typescript-eslint/no-var-requires */
const { resolve } = require(`path`);
const { createSlug } = require('./util');

const POSTS_PER_PAGE = 6;

exports.PAGES_QUERY = `
  {
    posts: allMarkdownRemark(filter: {fileAbsolutePath: {regex: "/data\/content\/posts/"}}) {
      edges {
        node {
          internal {
            type
          }
          id
          frontmatter {
            title
            date(formatString: "YYYY-MM-DD")
          }
        }
      }
    }
    factions: allMarkdownRemark(filter: {fileAbsolutePath: {regex: "/data\/content\/factions/"}}) {
      edges {
        node {
          id
          frontmatter {
            slug
            title
          }
        }
      }
    }
  pages: allMarkdownRemark(filter: {fileAbsolutePath: {regex: "/data\/content\/pages/"}}) {
    edges {
      node {
        fileAbsolutePath
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

exports.buildFactionPages = (nodes, createPage) => {
  const post = resolve(`./src/templates/faction.tsx`);

  nodes.forEach(({ node }) => {
    createPage({
      path: `factions/${node.frontmatter.slug}`,
      component: post,
      context: { slug: node.frontmatter.slug, id: node.id },
    });
    console.log(node.frontmatter.slug);
  });
};

exports.buildBlogPosts = (nodes, createPage) => {
  const post = resolve(`./src/templates/post.tsx`);

  nodes.forEach(({ node }) => {
    const slug = createSlug(node.frontmatter.title, node.frontmatter.date);
    createPage({
      path: `blog/${slug}`,
      component: post,
      context: { slug, id: node.id, type: 'blogpost' },
    });
    console.log(slug);
  });
};

exports.buildTermsOfService = (nodes, createPage) => {
  nodes.forEach(({ node: { fileAbsolutePath: filePath, id } }) => {
    const tos = 'terms-of-service';
    filePath.endsWith(`${tos}.md`) &&
      createPage({ path: tos, component: resolve(`./src/templates/${tos}.tsx`), context: { id } });
  });
};

exports.buildBlogListPagination = (nodes, createPage) => {
  const blogList = resolve('./src/templates/blog.tsx');

  const numberOfPages = Math.ceil(nodes.length / POSTS_PER_PAGE);
  Array.from({ length: numberOfPages }).forEach((_, i) => {
    const path = '/blog' + (i === 0 ? '' : `/${i + 1}`);
    createPage({
      path,
      component: blogList,
      context: {
        limit: POSTS_PER_PAGE,
        skip: i * POSTS_PER_PAGE,
        numberOfPages,
        currentPage: i + 1,
      },
    });
    console.log(path);
  });
};
