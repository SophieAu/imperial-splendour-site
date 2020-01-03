import './blog.scss';

import { graphql } from 'gatsby';
import React from 'react';

import Layout from '../components/Layout';
import { slugs } from '../config';
import { getSlug } from '../helpers';
import { blog } from '../strings';

export const query = graphql`
  query {
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      totalCount
      edges {
        node {
          id
          frontmatter {
            title
            author
            date(formatString: "YYYY-MM-DD")
            excerpt
          }
        }
      }
    }
  }
`;

const Blog = ({ data }) => (
  <Layout title={blog.pageTitle} description={blog.pageDescription} slug={slugs.blog}>
    <section className="posts">
      <PostList posts={data.allMarkdownRemark.edges} />
    </section>
  </Layout>
);

const PostMeta: React.FC<{ date: string; author: string }> = ({ date, author }) => (
  <div className="meta">
    <p className="author">{author}</p>
    <p className="date">{date}</p>
  </div>
);

const PostList = ({ posts }) => (
  <ul id="post-list">
    {posts.map(post => {
      const { id, frontmatter } = post.node;
      const { excerpt, author, title, date } = frontmatter;
      const slug = getSlug(title, date);
      return (
        <li key={id}>
          <h2 className="title">
            <a href={`blog/${slug}`}>{title}</a>
          </h2>
          <PostMeta date={date} author={author} />
          <p className="excerpt">{excerpt}</p>
        </li>
      );
    })}
  </ul>
);

export default Blog;
