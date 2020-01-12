import './rotr.scss';

import React from 'react';

import { downloadLinks, slugs } from '../../../data/config';
import { downloadLauncher } from '../../../data/strings';
import Layout from '../../components/Layout';
import Link from '../../components/Link';
import NewsletterSignup from '../../components/ui/NewsletterSignup';

const DownloadRotR = () => (
  <Layout
    title={downloadLauncher.pageTitle}
    description={downloadLauncher.pageDescription}
    slug={slugs.downloadLauncher}
    additionalHead={<meta httpEquiv="refresh" content={`0;URL='${downloadLinks.launcherOnly}'`} />}
  >
    <h2 className="download-confirm">
      {downloadLauncher.confirmPreOne}
      <br />
      {`${downloadLauncher.confirmPreTwo} `}
      <Link to={downloadLinks.launcherOnly}>{downloadLauncher.confirmLink}</Link>
    </h2>
    <NewsletterSignup />
  </Layout>
);

export default DownloadRotR;
