import './post.scss';

import { graphql } from 'gatsby';
import React from 'react';

import { staticman } from '../../data/config';
import { post } from '../../data/strings';
import Layout from '../components/Layout';
import MarkdownWithLink from '../components/MarkdownWithLink';
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
  console.warn(data);
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
      <Comments comments={allCommentsYaml?.edges} />
      <CommentForm />
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

const CommentForm = () => (
  <section className="comment-form">
    <h2>{post.commentForm}</h2>
    <form method="POST" className="comment-form" action={staticman.action}>
      <input name="options[redirect]" type="hidden" value="{{ .Permalink }}" />
      <input name="options[slug]" type="hidden" value="{{ $slug }}" />
      <input name="fields[slug]" type="hidden" value="{{ $slug }}" />
      <input
        aria-label={post.namePlaceholder}
        className="meta"
        name="fields[name]"
        type="text"
        placeholder={post.namePlaceholder}
        required
      />
      <textarea
        aria-label={post.commentPlaceholder}
        className="text"
        name="fields[comment]"
        placeholder={post.commentPlaceholder}
        required
      ></textarea>
      <div className="tos">
        <input
          type="checkbox"
          required
          id="checkbox"
          name="checkbox"
          aria-labelledby="checkbox-text"
        />
        <MarkdownWithLink id="checkbox-text">{post.tos}</MarkdownWithLink>
      </div>
      <button className="button" type="submit">
        {post.commentButtonTitle}
      </button>
    </form>
  </section>
);

export default Post;
