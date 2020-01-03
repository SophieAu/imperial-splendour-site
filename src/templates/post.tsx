import './post.scss';

import { graphql } from 'gatsby';
import React from 'react';

import Layout from '../components/Layout';
import PostHeader from '../components/ui/PostHeader';
import { getSlug } from '../helpers';
import { SingleGraphQLResponse } from '../types';

const Post: React.FC<SingleGraphQLResponse> = ({ data: { markdownRemark: post } }) => (
  <Layout
    title={post.frontmatter.title}
    description={post.frontmatter.excerpt}
    slug={getSlug(post.frontmatter.title, post.frontmatter.date)}
  >
    <article className="blog-post">
      <PostHeader {...post.frontmatter} />
      <div className="text" dangerouslySetInnerHTML={{ __html: post.html }} />
      <hr />
    </article>
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
        formattedDate: date(formatString: "MMMM DD, YYYY")
        author
        excerpt
      }
    }
  }
`;

export default Post;
