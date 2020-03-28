import './post.scss';

import { graphql } from 'gatsby';
import React from 'react';

import { post } from '../../data/strings';
import Layout from '../components/Layout';
import PostHeader from '../components/PostHeader';
import { Comment, PostResponse, SlugContext } from '../types';

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
      <article className="blog-post">
        <PostHeader {...markdownRemark.frontmatter} isHeaderClickable={false} />
        <div className="text" dangerouslySetInnerHTML={{ __html: markdownRemark.html }} />
      </article>
      {!!allCommentsYaml?.edges.length && <Comments comments={allCommentsYaml?.edges} />}
    </Layout>
  );
};

const Comments: React.FC<{ comments: Comment[] }> = ({ comments }) => (
  <section className="post-comments">
    <h2>{post.comments}</h2>
    {!comments.length && <p>{post.emptyComments}</p>}
    {comments.map(comment => (
      <article key={comment.node.id}>
        <header className="comment-header">
          <p className="comment-poster">{comment.node.name}</p>
          <p className="comment-date">{comment.node.date}</p>
        </header>
        <p className="comment-body">{comment.node.comment}</p>
      </article>
    ))}
  </section>
);

export default Post;
