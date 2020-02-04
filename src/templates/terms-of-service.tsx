import './terms-of-service.scss';

import { graphql } from 'gatsby';
import React from 'react';

import { slugs } from '../../data/config';
import { post } from '../../data/strings';
import Layout from '../components/Layout';
import { ToSResponse } from '../types';

const TermsOfService: React.FC<ToSResponse> = ({ data: { markdownRemark: tos } }) => (
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
      ...termsOfService
    }
  }
`;

export default TermsOfService;
