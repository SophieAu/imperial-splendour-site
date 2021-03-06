import React from 'react';

import { paths, slugs } from '../../../data/config';
import { download, downloadButton } from '../../../data/strings';
import Layout from '../../components/Layout';
import { LinkButton } from '../../components/Link';
import * as styles from './index.styles';

const DownloadIndex = () => (
  <Layout
    slug={slugs.downloadIndex}
    description={download.pageDescription}
    title={download.pageTitle}
  >
    <section className={styles.container}>
      <div className="requirements">
        <h2>{download.requirements.title}</h2>
        <ul>
          {download.requirements.list.map((point, i) => (
            <li key={i}>{point}</li>
          ))}
        </ul>
      </div>
      <div className={styles.download}>
        <LinkButton to={paths.downloadRotR}>{downloadButton.buttonText}</LinkButton>
        <p>{download.main}</p>
      </div>
    </section>
  </Layout>
);

export default DownloadIndex;
