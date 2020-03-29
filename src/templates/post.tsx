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
        socialImage {
          childImageSharp {
            original {
              width
              height
              src
            }
          }
        }
      }
    }
  }
`;

interface Props extends PostResponse, SlugContext {}

const Post: React.FC<Props> = ({ data, pageContext }) => {
  const { markdownRemark, allCommentsYaml } = data;

  return (
    <Layout
      title={post.pageTitle({ title: markdownRemark.frontmatter.title })}
      description={markdownRemark.frontmatter.excerpt}
      slug={pageContext.slug}
      ogImage={data.markdownRemark.fields.socialImage.childImageSharp.original.src}
    >
      <article className={styles.blogPost}>
        <PostHeader {...markdownRemark.frontmatter} isHeaderClickable={false} />
        <div className={styles.text} dangerouslySetInnerHTML={{ __html: markdownRemark.html }} />
      </article>
      {!!allCommentsYaml?.edges.length && <CommentSection comments={allCommentsYaml?.edges} />}
    </Layout>
  );
};

export default Post;
