import './rotr.scss';

import React from 'react';

import Layout from '../../components/Layout';
import Link from '../../components/Link';
import NewsletterSignup from '../../components/ui/NewsletterSignup';
import { downloadLinks, slugs } from '../../config';
import { downloadLauncher } from '../../strings';

const DownloadRotR = () => (
  <Layout
    title={downloadLauncher.pageTitle}
    description={downloadLauncher.pageDescription}
    slug={slugs.downloadLauncher}
    additionalHead={<meta httpEquiv="refresh" content={`0;URL='${downloadLinks.launcherOnly}'`} />}
  >
    <div className="download-confirm">
      <h2>
        {downloadLauncher.confirmPreOne}
        <br />
        {`${downloadLauncher.confirmPreTwo} `}
        <Link to={downloadLinks.launcherOnly}>{downloadLauncher.confirmLink}</Link>
      </h2>
    </div>
    <NewsletterSignup />
  </Layout>
);

export default DownloadRotR;
