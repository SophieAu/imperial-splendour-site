import { graphql } from 'gatsby';
import React from 'react';

import { slugs } from '../../data/config';
import { home } from '../../data/strings';
import Hero from '../components/Hero';
import InfoBoxes from '../components/InfoBoxes';
import Layout from '../components/Layout';

export const query = graphql`
  query($id: String!) {
    markdownRemark {
      description
      heroImage {
        ...imageAsset
      }
      heroLogo {
        ...imageAsset
      }
      heroText
      infoBoxes {
        text
        image {
          ...imageAsset
        }
        imageAlt
      }
    }
    global: sanityGlobals {
      siteTitle
    }
  }
`;

interface Props {
  data: {
    home: SanityHome;
    global: SanityGlobals;
  };
}

const Home: React.FC = () => (
  <Layout title={home.pageTitle} description={home.pageDescription} slug={slugs.home}>
    <Hero />
    <InfoBoxes />
  </Layout>
);

export default Home;
