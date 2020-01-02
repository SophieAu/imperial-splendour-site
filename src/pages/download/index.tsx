import './index.scss';

import React from 'react';

import Layout from '../../components/Layout';
import Link from '../../components/Link';
import DownloadButton from '../../components/ui/DownloadButton';
import { paths, slugs } from '../../config';
import { download } from '../../strings';

const DownloadIndex = () => (
  <Layout slug={slugs.downloadIndex} description={'tst'} title={'test'}>
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
      <DownloadButton linkTo={paths.downloadRotR} />
      <p>{download.main.info}</p>
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
