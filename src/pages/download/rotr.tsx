import React from 'react';

import Layout from '../../components/Layout';
import NewsletterSignup from '../../components/ui/NewsletterSignup';
import SuccessMessage from '../../sections/download/SuccessMessage';

const RotR = () => (
  <Layout>
    <SuccessMessage />
    <NewsletterSignup />
  </Layout>
);

export default RotR;
