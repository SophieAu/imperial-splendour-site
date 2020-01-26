import './post.scss';

import { graphql } from 'gatsby';
import React from 'react';

import { factions } from '../../data/strings';
import Layout from '../components/Layout';

export const query = graphql`
  query($id: String!) {
    markdownRemark(id: { eq: $id }) {
      id
      html
      frontmatter {
        title
      }
    }
  }
`;

interface Props {
  pageContext: {
    slug: string;
  };
  data: {
    markdownRemark: {
      frontmatter: {
        title: string;
      };
      html: string;
    };
  };
}

const Faction: React.FC<Props> = ({ data: { markdownRemark: pageData }, pageContext }) => (
  <Layout
    title={factions.pageTitle({ title: pageData.frontmatter.title })}
    description={pageData.frontmatter.title}
    slug={pageContext.slug}
  >
    <article className="blog-post">
      <h1>{pageData.frontmatter.title}</h1>
      <div className="text" dangerouslySetInnerHTML={{ __html: pageData.html }} />
    </article>
  </Layout>
);

export default Faction;
