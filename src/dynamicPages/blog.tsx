import { graphql } from 'gatsby';
import React from 'react';

import { paths, slugs } from '../../data/config';
import { blog } from '../../data/strings';
import Layout from '../components/Layout';
import { Link } from '../components/Link';
import PostHeader from '../components/PostHeader';
import { BlogListContext, PostsResponse } from '../types';
import * as styles from './blog.styles';

export const query = graphql`
  query ($skip: Int!, $limit: Int!) {
    allMarkdownRemark(
      filter: {
        fileAbsolutePath: { regex: "/data/content/posts/" }
        frontmatter: { published: { eq: true } }
      }
      sort: { fields: [frontmatter___date], order: DESC }
      limit: $limit
      skip: $skip
    ) {
      totalCount
      nodes {
        ...blogPost
      }
    }
  }
`;

const createSlug = (rawTitle: string, date: string) => {
  const title = rawTitle
    .toLowerCase()
    .replace(/\s/g, '-')
    .replace(/[^\w-]/g, '')
    .replace(/(-+)/g, '-');

  return `${date}-${title}`;
};

interface Props extends PostsResponse, BlogListContext {}

const Blog: React.FC<Props> = ({ data, pageContext }) => (
  <Layout title={blog.pageTitle} description={blog.pageDescription} slug={slugs.blog}>
    <ul className={styles.postList}>
      {data.allMarkdownRemark.nodes.map(post => (
        <li key={post.id} className={styles.post}>
          <PostHeader
            slug={createSlug(post.frontmatter.title, post.frontmatter.date)}
            {...post.frontmatter}
            isHeaderClickable={true}
          />
          <p className={styles.excerpt}>{post.frontmatter.excerpt}</p>
        </li>
      ))}
    </ul>
    <Paginator current={pageContext.currentPage} total={pageContext.numberOfPages} />
  </Layout>
);

const Paginator: React.FC<{ current: number; total: number }> = ({ current, total }) => (
  <section className={styles.pagination}>
    <ul>
      <li>
        {current !== 1 && (
          <Link to={`${paths.blog}${current - 1 === 1 ? '' : `/${current - 1}`}`} rel="prev">
            {blog.previousPage}
          </Link>
        )}
      </li>
      <li>
        {current !== total && (
          <Link to={`${paths.blog}/${current + 1}`} rel="next">
            {blog.nextPage}
          </Link>
        )}
      </li>
    </ul>
  </section>
);

export default Blog;
