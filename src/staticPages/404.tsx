import { graphql } from 'gatsby';
import React from 'react';

import { slugs } from '../../data/config';
import { buildPageTitle } from '../../data/strings';
import Image from '../components/Image';
import Layout from '../components/Layout';
import { NotFoundResponse } from '../types';
import { strippedImg } from '../util';
import * as styles from './404.styles';

export const query = graphql`
  query($id: String!, $maxWidth: Int = 1040) {
    markdownRemark(id: { eq: $id }) {
      frontmatter {
        title
        description
        messageTitle
        image {
          ...fluidImage
        }
        imageAlt
      }
      html
    }
  }
`;

const NotFound: React.FC<NotFoundResponse> = ({ data: { markdownRemark } }) => {
  const { title, description, messageTitle, image, imageAlt } = markdownRemark.frontmatter;

  return (
    <Layout title={buildPageTitle(title)} description={description} slug={slugs.notFound}>
      <div className={styles.root}>
        <h1 className={styles.title}>{messageTitle}</h1>
        <div dangerouslySetInnerHTML={{ __html: markdownRemark.html }} />
        <Image className={styles.image} {...strippedImg(image)} alt={imageAlt} />
      </div>
    </Layout>
  );
};

export default NotFound;
