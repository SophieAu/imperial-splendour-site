import { graphql } from 'gatsby';
import React from 'react';

import { slugs } from '../../data/config';
import { post } from '../../data/strings';
import Layout from '../components/Layout';
import { ToSResponse } from '../types';
import * as styles from './terms-of-service.styles';

export const query = graphql`
  query($id: String!) {
    markdownRemark(id: { eq: $id }) {
      ...termsOfService
    }
  }
`;

const TermsOfService: React.FC<ToSResponse> = ({ data: { markdownRemark: tos } }) => (
  <Layout
    title={post.pageTitle(tos.frontmatter.title)}
    description={tos.frontmatter.description}
    slug={slugs.termsOfService}
  >
    <article className={styles.termsOfService} dangerouslySetInnerHTML={{ __html: tos.html }} />
  </Layout>
);

export default TermsOfService;
