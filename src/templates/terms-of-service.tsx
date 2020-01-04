import './terms-of-service.scss';

import { graphql } from 'gatsby';
import React from 'react';

import Layout from '../components/Layout';
import { slugs } from '../config';
import { post } from '../strings';
import { ToSGraphQLResponse } from '../types';

const TermsOfService: React.FC<ToSGraphQLResponse> = ({ data: { markdownRemark: tos } }) => (
  <Layout
    title={post.pageTitle({ title: tos.frontmatter.title })}
    description={tos.frontmatter.description}
    slug={slugs.termsOfService}
  >
    <article className="tos" dangerouslySetInnerHTML={{ __html: tos.html }} />
  </Layout>
);

export const query = graphql`
  query($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        description
        title
      }
    }
  }
`;

export default TermsOfService;
