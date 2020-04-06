import React from 'react';

import { slugs } from '../../data/config';
import { home } from '../../data/strings';
import Hero from '../components/Hero';
import InfoBoxes from '../components/InfoBoxes';
import Layout from '../components/Layout';

const Home: React.FC = () => (
  <Layout title={home.pageTitle} description={home.pageDescription} slug={slugs.home}>
    <Hero />
    <InfoBoxes />
  </Layout>
);

export default Home;
