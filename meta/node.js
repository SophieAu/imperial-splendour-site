/* eslint-disable @typescript-eslint/no-var-requires */
const { resolve } = require(`path`);
const { createSlug } = require('./util');

const POSTS_PER_PAGE = 6;

exports.PAGES_QUERY = `
  {
    posts: allMarkdownRemark(filter: { fileAbsolutePath: { regex: "/data/content/posts/" } }) {
      nodes {
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
    factions: allMarkdownRemark(
      filter: { fileAbsolutePath: { regex: "/data/content/factions/" } }
    ) {
      nodes {
        id
        frontmatter {
          slug
          title
        }
      }
    }
    pages: allMarkdownRemark(filter: { fileAbsolutePath: { regex: "/data/content/pages/" } }) {
      nodes {
        fileAbsolutePath
        id
        frontmatter {
          title
        }
      }
    }
  }
`;

exports.buildFactionPages = (nodes, createPage) => {
  const post = resolve(`./src/dynamicPages/faction.tsx`);

  nodes.forEach(node => {
    createPage({
      path: `factions/${node.frontmatter.slug}`,
      component: post,
      context: { slug: node.frontmatter.slug, id: node.id },
    });
    console.log(node.frontmatter.slug);
  });
};

exports.buildBlogPosts = (nodes, createPage) => {
  const post = resolve(`./src/dynamicPages/post.tsx`);

  nodes.forEach(node => {
    const slug = createSlug(node.frontmatter.title, node.frontmatter.date);
    createPage({
      path: `blog/${slug}`,
      component: post,
      context: { slug, id: node.id, type: 'blogpost' },
    });
    console.log(slug);
  });
};

exports.buildPages = (nodes, createPage) => {
  const component = name => resolve(`./src/staticPages/${name}.tsx`);

  nodes.forEach(({ fileAbsolutePath: filePath, id }) => {
    const tos = 'terms-of-service';
    const about = 'about';
    const index = 'index';
    const notFound = '404';
    const download = 'download';

    filePath.endsWith(`${tos}.md`) &&
      createPage({ path: tos, component: component(tos), context: { id } });

    filePath.endsWith(`${about}.md`) &&
      createPage({ path: about, component: component(about), context: { id } });

    filePath.endsWith(`${index}.md`) &&
      createPage({ path: '/', component: component(index), context: { id } });

    filePath.endsWith(`${notFound}.md`) &&
      createPage({ path: notFound, component: component(notFound), context: { id } });

    filePath.endsWith(`${download}.md`) &&
      createPage({ path: download, component: component(download), context: { id } });
  });

  const factions = 'factions';
  createPage({ path: factions, component: component(factions) });
};

exports.buildBlogListPagination = (nodes, createPage) => {
  const blogList = resolve('./src/dynamicPages/blog.tsx');

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
