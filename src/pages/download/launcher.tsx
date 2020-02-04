import './rotr.scss';

import React from 'react';

import { downloadLinks, slugs } from '../../../data/config';
import { downloadLauncher } from '../../../data/strings';
import Layout from '../../components/Layout';
import MarkdownWithLink from '../../components/MarkdownWithLink';
import NewsletterSignup from '../../components/ui/NewsletterSignup';

const DownloadRotR = () => (
  <Layout
    title={downloadLauncher.pageTitle}
    description={downloadLauncher.pageDescription}
    slug={slugs.downloadLauncher}
    additionalHead={<meta httpEquiv="refresh" content={`0;URL='${downloadLinks.launcherOnly}'`} />}
  >
    <h2 className="download-confirm">
      {downloadLauncher.confirmLineOne}
      <br />
      <MarkdownWithLink markdownText={downloadLauncher.confirmLineTwo} />
    </h2>
    <NewsletterSignup />
  </Layout>
);

export default DownloadRotR;
