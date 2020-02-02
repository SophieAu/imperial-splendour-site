import './blog.scss';

import { graphql } from 'gatsby';
import React from 'react';

import { paths, slugs } from '../../data/config';
import { blog } from '../../data/strings';
import Layout from '../components/Layout';
import Link from '../components/Link';
import PostHeader from '../components/ui/PostHeader';
import { BlogListContext, PostsResponse } from '../types';

export const query = graphql`
  query($skip: Int!, $limit: Int!) {
    allMarkdownRemark(
      filter: { fileAbsolutePath: { regex: "/data/content/posts/" } }
      sort: { fields: [frontmatter___date], order: DESC }
      limit: $limit
      skip: $skip
    ) {
      totalCount
      edges {
        node {
          id
          ...postFrontmatter
        }
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
    <ul className="post-list">
      {data.allMarkdownRemark.edges.map(post => (
        <li key={post.node.id} className="post">
          <PostHeader
            slug={createSlug(post.node.frontmatter.title, post.node.frontmatter.date)}
            {...post.node.frontmatter}
            isHeaderClickable={true}
          />
          <p className="excerpt">{post.node.frontmatter.excerpt}</p>
        </li>
      ))}
    </ul>
    <Paginator current={pageContext.currentPage} total={pageContext.numberOfPages} />
  </Layout>
);

const Paginator: React.FC<{ current: number; total: number }> = ({ current, total }) => (
  <section className="pagination">
    <ul>
      <li className={'newer'}>
        {current !== 1 && (
          <Link to={`${paths.blog}${current - 1 === 1 ? '' : `/${current - 1}`}`} rel="prev">
            {blog.previousPage}
          </Link>
        )}
      </li>
      <li className={'older'}>
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
