import './blog.scss';

import { graphql } from 'gatsby';
import React from 'react';

import Layout from '../components/Layout';
import PostHeader from '../components/ui/PostHeader';
import { slugs } from '../config';
import { blog } from '../strings';
import { GraphQLResponse } from '../types';

export const query = graphql`
  query {
    allMarkdownRemark(
      filter: { fileAbsolutePath: { regex: "/data/posts/" } }
      sort: { fields: [frontmatter___date], order: DESC }
    ) {
      totalCount
      edges {
        node {
          id
          frontmatter {
            title
            author
            date(formatString: "YYYY-MM-DD")
            formattedDate: date(formatString: "MMMM DD, YYYY")
            excerpt
          }
        }
      }
    }
  }
`;

const Blog: React.FC<GraphQLResponse> = ({ data }) => (
  <Layout title={blog.pageTitle} description={blog.pageDescription} slug={slugs.blog}>
    <ul className="post-list">
      {data.allMarkdownRemark.edges.map(post => {
        const { id, frontmatter } = post.node;

        return (
          <li key={id}>
            <div className="post">
              <PostHeader {...frontmatter} />
              <div className="excerpt">{frontmatter.excerpt}</div>
            </div>
          </li>
        );
      })}
    </ul>
  </Layout>
);

export default Blog;

/*
aginator.Pages.ByPublishDate.Reverse

<div class="pagination">
    {{ if .Paginator.HasPrev }}
    <div class="newer">
        <a href="{{.Paginator.Prev.URL}}">
            < Newer</a></Newer>
    </div>
    {{ else }}
    <div class="newer"></div>
    {{ end }} {{ if .Paginator.HasNext }}
    <div class="older">
        <a href="{{.Paginator.Next.URL}}">Older ></a>
    </div>{{ else }}
    <div class="older"></div>
    {{ end }}
</div>
*/
