/* eslint-disable @typescript-eslint/no-var-requires */
const { resolve } = require(`path`);
const { createSlug } = require('./util');
const fs = require(`fs-extra`);
const { createFileNode } = require(`gatsby-source-filesystem/create-file-node`);
const { postToImage } = require('./social-image');

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
  tos: allMarkdownRemark(filter: {fileAbsolutePath: {regex: "/data\/content\/terms-of-service/"}}) {
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
  const termsOfService = resolve(`./src/templates/terms-of-service.tsx`);

  nodes.forEach(({ node }) => {
    createPage({
      path: `terms-of-service`,
      component: termsOfService,
      context: { id: node.id },
    });
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

exports.createSocialCardImage = async (parentNode, browser, store, actions) => {
  const { createNode, createNodeField, createNodeId } = actions;

  const CACHE_DIR = resolve(`${store.getState().program.directory}/.cache/social/`);
  await fs.ensureDir(CACHE_DIR);

  const ogImagePath = await postToImage(CACHE_DIR, browser, parentNode);
  const imageFileNode = await createFileNode(ogImagePath, createNodeId);
  imageFileNode.parent = parentNode.id;
  createNode(imageFileNode, { name: `gatsby-source-filesystem` });

  createNodeField({
    node: parentNode,
    name: 'socialImage___NODE',
    value: imageFileNode.id,
  });
};
