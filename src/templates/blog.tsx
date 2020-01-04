import './blog.scss';

import { graphql } from 'gatsby';
import React from 'react';

import Layout from '../components/Layout';
import Link from '../components/Link';
import PostHeader from '../components/ui/PostHeader';
import { paths, slugs } from '../config';
import { blog } from '../strings';
import { BlogListContext, GraphQLResponse } from '../types';

export const query = graphql`
  query($skip: Int!, $limit: Int!) {
    allMarkdownRemark(
      filter: { fileAbsolutePath: { regex: "/data/posts/" } }
      sort: { fields: [frontmatter___date], order: DESC }
      limit: $limit
      skip: $skip
    ) {
      totalCount
      edges {
        node {
          id
          frontmatter {
            title
            author
            date(formatString: "YYYY-MM-DD")
            formattedDate: date(formatString: "MMMM DD, YYYY")
            excerpt
          }
        }
      }
    }
  }
`;
interface Props extends GraphQLResponse, BlogListContext {}

const Blog: React.FC<Props> = ({ data, pageContext }) => (
  <Layout title={blog.pageTitle} description={blog.pageDescription} slug={slugs.blog}>
    <ul className="post-list">
      {data.allMarkdownRemark.edges.map(post => (
        <li key={post.node.id}>
          <div className="post">
            <PostHeader {...post.node.frontmatter} isHeaderClickable={true} />
            <div className="excerpt">{post.node.frontmatter.excerpt}</div>
          </div>
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
