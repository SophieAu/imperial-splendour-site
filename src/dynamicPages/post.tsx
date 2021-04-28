import { graphql } from 'gatsby';
import React from 'react';

import { post } from '../../data/strings';
import CommentSection from '../components/CommentSection';
import Layout from '../components/Layout';
import PostHeader from '../components/PostHeader';
import { PostResponse, SlugContext } from '../types';
import * as styles from './post.styles';

export const query = graphql`
  query($id: String!, $slug: String!) {
    allCommentsYaml(filter: { slug: { eq: $slug } }, sort: { fields: [date], order: ASC }) {
      ...comments
    }
    markdownRemark(id: { eq: $id }) {
      ...blogPost
      fields {
        ...socialImage
      }
    }
  }
`;

interface Props extends PostResponse, SlugContext {}

const Post: React.FC<Props> = ({ data: { markdownRemark, allCommentsYaml }, pageContext }) => (
  <Layout
    title={post.pageTitle(markdownRemark.frontmatter.title)}
    description={markdownRemark.frontmatter.excerpt}
    slug={pageContext.slug}
    ogImage={markdownRemark.fields.socialImage.childImageSharp.original.src}
  >
    <article className={styles.blogPost}>
      <PostHeader {...markdownRemark.frontmatter} isHeaderClickable={false} />
      <div className={styles.text} dangerouslySetInnerHTML={{ __html: markdownRemark.html }} />
    </article>
    {!!allCommentsYaml?.nodes.length && <CommentSection comments={allCommentsYaml.nodes} />}
  </Layout>
);

export default Post;
