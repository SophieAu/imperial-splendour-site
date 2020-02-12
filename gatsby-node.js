/* eslint-disable @typescript-eslint/no-var-requires */
const { resolve } = require(`path`);
const { createSlug } = require('./gatsby-helper');
const path = require('path');
const puppeteer = require('puppeteer');
const fs = require(`fs-extra`);
const { createFileNode } = require(`gatsby-source-filesystem/create-file-node`);
const { postToImage } = require('./src/twitter-cardd');

const POSTS_PER_PAGE = 6;

const PAGES_QUERY = `
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

const buildFactionPages = (nodes, createPage) => {
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

const buildBlogPosts = (nodes, createPage) => {
  const post = resolve(`./src/templates/post.tsx`);

  nodes.forEach(({ node }) => {
    const slug = createSlug(node.frontmatter.title, node.frontmatter.date);
    createPage({
      path: `blog/${slug}`,
      component: post,
      context: { slug, id: node.id, title: node.frontmatter.title },
    });
    console.log(slug);
  });
};

const buildTermsOfService = (nodes, createPage) => {
  const termsOfService = resolve(`./src/templates/terms-of-service.tsx`);

  nodes.forEach(({ node }) => {
    createPage({
      path: `terms-of-service`,
      component: termsOfService,
      context: { id: node.id },
    });
  });
};

const buildBlogListPagination = (nodes, createPage) => {
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

let browser = null;

exports.onPreInit = async () => {
  browser = await puppeteer.launch({ headless: true });
};

exports.onPostBuild = async () => {
  await browser.close();
};

exports.createPages = async ({ graphql, actions }) => {
  const result = await graphql(PAGES_QUERY);
  if (result.errors) {
    reporter.panicOnBuild(`Error while running GraphQL query.`);
    return;
  }

  console.log('\nCreating Blog Posts...');
  buildBlogPosts(result.data.posts.edges, actions.createPage);

  console.log('\nCreating Terms of Service...');
  buildTermsOfService(result.data.tos.edges, actions.createPage);

  console.log('\nPaginating Blog Posts List...');
  buildBlogListPagination(result.data.posts.edges, actions.createPage);

  console.log('\nCreating Faction Pages...');
  buildFactionPages(result.data.factions.edges, actions.createPage);

  console.log();
};

exports.onCreateNode = async ({ node: parentNode, actions, createNodeId, store }) => {
  const CACHE_DIR = path.resolve(`${store.getState().program.directory}/.cache/social/`);
  await fs.ensureDir(CACHE_DIR);

  // only generate for md files
  if (parentNode.component !== '/Users/sophie/dev/imp-splen/site/src/templates/post.tsx') return;

  try {
    const ogImagePath = await postToImage(CACHE_DIR, browser, parentNode);
    const imageFileNode = await createFileNode(ogImagePath, createNodeId);
    imageFileNode.parent = parentNode.id;
    actions.createNode(imageFileNode, { name: `gatsby-source-filesystem` });

    actions.createNodeField({
      name: 'socialImage___NODE',
      node: parentNode,
      value: imageFileNode.id,
    });
  } catch (e) {
    console.warn(e);
  }
};
