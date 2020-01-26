import './factions.scss';

import React from 'react';

import { slugs } from '../../data/config';
import { factions } from '../../data/strings';
import Layout from '../components/Layout';

const Factions = () => (
  <Layout
    title={factions.pageTitle({ title: 'Factions' })}
    description={factions.pageDescription}
    slug={slugs.factions}
  >
    <section className="factions"></section>
  </Layout>
);

export default Factions;
