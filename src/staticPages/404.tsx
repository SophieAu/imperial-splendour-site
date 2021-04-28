import { graphql, useStaticQuery } from 'gatsby';
import React from 'react';

import { slugs } from '../../data/config';
import { notFound } from '../../data/strings';
import Img from '../components/GatsbyImage';
import Layout from '../components/Layout';
import * as styles from './404.styles';

const query = graphql`
  query($maxWidth: Int = 1040) {
    file(relativePath: { eq: "notFound/hero.jpg" }) {
      ...fluidImage
    }
  }
`;

const Home: React.FC = () => (
  <Layout title={notFound.pageTitle} description={notFound.pageDescription} slug={slugs.notFound}>
    <div className={styles.root}>
      <h1 className={styles.title}>{notFound.title}</h1>
      <p>{notFound.body}</p>
      <Img
        className={styles.image}
        fluid={useStaticQuery(query).file.childImageSharp.fluid}
        alt={notFound.imageAlt}
      />
    </div>
  </Layout>
);

export default Home;
