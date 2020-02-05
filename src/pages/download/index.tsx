import './index.scss';

import React from 'react';

import { paths, slugs } from '../../../data/config';
import { download, downloadButton } from '../../../data/strings';
import Layout from '../../components/Layout';
import Link from '../../components/Link';

const DownloadIndex = () => (
  <Layout
    slug={slugs.downloadIndex}
    description={download.pageDescription}
    title={download.pageTitle}
  >
    <MainDownload />
    <OtherDownloads />
  </Layout>
);

const MainDownload = () => (
  <section className="container">
    <div className="requirements">
      <h2>{download.requirements.title}</h2>
      <ul>
        {download.requirements.list.map((point, i) => (
          <li key={i}>{point}</li>
        ))}
      </ul>
    </div>
    <div className="download">
      <Link to={paths.downloadRotR} className={'button'}>
        {downloadButton.buttonText}
      </Link>
      <p>{download.main}</p>
    </div>
  </section>
);

const OtherDownloads = () => (
  <section className="other-downloads">
    <h2>{download.other.title}</h2>
    <ul>
      {download.other.list.map((dload, i) => (
        <li key={i}>
          <Link to={dload.link}>{dload.description}</Link>
        </li>
      ))}
    </ul>
  </section>
);

export default DownloadIndex;
