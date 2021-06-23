import { graphql } from 'gatsby';
import React from 'react';

import { post } from '../../data/strings';
import CommentSection from '../components/CommentSection';
import Layout from '../components/Layout';
import { Link } from '../components/Link';
import { NewsletterSignup } from '../components/NewsletterSignup';
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
      html
    }
    allMarkdownRemark(filter: { fileAbsolutePath: { regex: "/data/content/general/footer.md/" } }) {
      nodes {
        frontmatter {
          socialMedia {
            platform
            link
          }
        }
      }
    }
  }
`;

interface Props extends PostResponse, SlugContext {}

const Post: React.FC<Props> = ({
  data: { markdownRemark, allCommentsYaml, allMarkdownRemark },
  pageContext,
}) => (
  <Layout
    title={post.pageTitle(markdownRemark.frontmatter.title)}
    description={markdownRemark.frontmatter.excerpt}
    slug={pageContext.slug}
    ogImage={markdownRemark.fields?.socialImage.childImageSharp.original.src}
  >
    <article className={styles.blogPost}>
      <PostHeader {...markdownRemark.frontmatter} isHeaderClickable={false} />
      <div className={styles.text} dangerouslySetInnerHTML={{ __html: markdownRemark.html }} />
      <div className={styles.postFooter}>
        <p>{post.socialMediaCallout}</p>
        <p>
          {allMarkdownRemark.nodes[0].frontmatter.socialMedia.map(({ platform, link }, i, a) => (
            <React.Fragment key={link}>
              <Link to={link}>{platform}</Link>
              {i < a.length - 2 && ', '}
              {i == a.length - 2 && ' and '}
              {i == a.length - 1 && ''}
            </React.Fragment>
          ))}
        </p>
        <p>{post.newsletterCallout}</p>
        <NewsletterSignup />
      </div>
    </article>
    {!!allCommentsYaml?.nodes.length && <CommentSection comments={allCommentsYaml.nodes} />}
  </Layout>
);

export default Post;
