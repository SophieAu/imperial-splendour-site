import './post.scss';

import { graphql } from 'gatsby';
import React from 'react';

import Layout from '../components/Layout';
import PostHeader from '../components/ui/PostHeader';
import { paths } from '../config';
import { getSlug } from '../helpers';
import { post } from '../strings';
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
    <Comments />
    <CommentForm />
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

const CommentForm = () => (
  <section className="comment-form">
    <h2>{post.commentForm}</h2>
    <form
      method="POST"
      className="comment-form"
      action="https://impsplen-staticman.herokuapp.com/v2/entry/SophieAu/imperial-splendour-website/master/"
    >
      <input name="options[redirect]" type="hidden" value="{{ .Permalink }}" />
      <input name="options[slug]" type="hidden" value="{{ $slug }}" />
      <input name="fields[slug]" type="hidden" value="{{ $slug }}" />
      <input
        className="meta"
        name="fields[name]"
        type="text"
        placeholder={post.namePlaceholder}
        required
      />
      <textarea
        className="text"
        name="fields[comment]"
        placeholder={post.commentPlaceholder}
        required
      ></textarea>
      <div className="tos">
        <input type="checkbox" required />
        <p>
          {`${post.tosPre} `}
          <a href={paths.termsOfService}>{post.tosLink}</a>
        </p>
      </div>
      <button className="btn-download" type="submit">
        {post.commentButtonTitle}
      </button>
    </form>
  </section>
);

const Comments = () => (
  <section className="post-comments">
    <h2>Comments</h2>
  </section>
);

/*
existing comments

  // {{ $slug := index (last 1 (split (delimit (split .URL "/") "," "") ",")) 0 }}
  // {{ $.Scratch.Add "hasComments" 0 }}

  // {{ range $index, $comments := $.Site.Data }}{{ if eq .slug $slug }}
  // {{ $.Scratch.Add "hasComments" 1 }}
  // <div className="comment-header">
  //   <div className="comment-poster">{{ .name }}</div>
  //   <div className="comment-date">{{dateFormat "January 2, 2006" .date }}</div>
  // </div>
  // <div className="comment-body">{{ .comment | markdownify }}</div>
  // {{ end }}{{ end }}

  // {{ if eq ($.Scratch.Get "hasComments") 0 }}
  // <p>Nothing yet.</p>
  // {{ end }}
*/
