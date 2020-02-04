import './post.scss';

import { graphql } from 'gatsby';
import React from 'react';

import { staticman } from '../../data/config';
import { post } from '../../data/strings';
import Layout from '../components/Layout';
import MarkdownWithLink from '../components/MarkdownWithLink';
import PostHeader from '../components/ui/PostHeader';
import { Comment, PostResponse, SlugContext } from '../types';

export const query = graphql`
  query($id: String!, $slug: String!) {
    allCommentsYaml(filter: { slug: { eq: $slug } }, sort: { fields: [date], order: ASC }) {
      edges {
        node {
          id
          name
          comment
          date(formatString: "MMMM DD, YYYY")
        }
      }
    }
    markdownRemark(id: { eq: $id }) {
      id
      html
      ...postFrontmatter
    }
  }
`;

interface Props extends PostResponse, SlugContext {}

const Post: React.FC<Props> = ({ data: { markdownRemark, allCommentsYaml }, pageContext }) => (
  <Layout
    title={post.pageTitle({ title: markdownRemark.frontmatter.title })}
    description={markdownRemark.frontmatter.excerpt}
    slug={pageContext.slug}
  >
    <article className="blog-post">
      <PostHeader {...markdownRemark.frontmatter} isHeaderClickable={false} />
      <div className="text" dangerouslySetInnerHTML={{ __html: markdownRemark.html }} />
    </article>
    <Comments comments={allCommentsYaml?.edges} />
    <CommentForm />
  </Layout>
);

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
        <p id="checkbox-text">
          <MarkdownWithLink markdownText={post.tos} />
        </p>
      </div>
      <button className="btn-download" type="submit">
        {post.commentButtonTitle}
      </button>
    </form>
  </section>
);

export default Post;
