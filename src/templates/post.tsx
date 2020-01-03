import 'prismjs/themes/prism-tomorrow.css';

import { graphql } from 'gatsby';
import React from 'react';

import Layout from '../components/Layout';
import { getSlug } from '../helpers';

const Post = ({ data: { markdownRemark: post } }) => (
  <Layout
    title={post.frontmatter.title}
    description={post.frontmatter.excerpt}
    slug={getSlug(post.frontmatter.title, post.frontmatter.date)}
  >
    <div id="article">
      <h1>{post.frontmatter.title}</h1>
      <p className="date">{post.frontmatter.date}</p>
      <p className="author">{post.frontmatter.author}</p>
      <div className="post-body" dangerouslySetInnerHTML={{ __html: post.html }} />
      <hr />
    </div>
  </Layout>
);

export const query = graphql`
  query($id: String!) {
    markdownRemark(id: { eq: $id }) {
      id
      html
      frontmatter {
        title
        date(formatString: "YYYY-MM-DD")
        author
        excerpt
      }
    }
  }
`;

export default Post;
