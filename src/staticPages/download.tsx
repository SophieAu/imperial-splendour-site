import { graphql } from 'gatsby';
import React from 'react';

import { downloadLinks, modDBButton, slugs } from '../../data/config';
import gDrive from '../../data/img/download/logo_googledrive.svg';
import mediaFire from '../../data/img/download/logo_mediafire.svg';
import { download } from '../../data/strings';
import Layout from '../components/Layout';
import { LinkButton } from '../components/Link';
import NewsletterSignup from '../components/NewsletterSignup';
import { DownloadResponse } from '../types';
import * as styles from './download.styles';

export const query = graphql`
  query($id: String!) {
    markdownRemark(id: { eq: $id }) {
      frontmatter {
        title
        description
      }
      html
    }
  }
`;

const hosts = [
  { platform: 'Mod DB', link: downloadLinks.modDB, imgSrc: modDBButton.download },
  { platform: 'Mediafire', link: downloadLinks.mediaFire, imgSrc: mediaFire },
  { platform: 'Google Drive', link: downloadLinks.googleDrive, imgSrc: gDrive },
];

const Download: React.FC<DownloadResponse> = ({ data: { markdownRemark } }) => {
  return (
    <Layout
      slug={slugs.downloadIndex}
      description={download.pageDescription}
      title={download.pageTitle}
    >
      <section className={styles.container}>
        <div className={styles.info} dangerouslySetInnerHTML={{ __html: markdownRemark.html }} />

        <h2 className={styles.dlHeading}>Downloads</h2>
        <ul className={styles.filehosts}>
          {hosts.map(({ platform, link, imgSrc }) => (
            <li key={platform}>
              <LinkButton to={link} className={styles.hostButton}>
                <img src={imgSrc} alt={platform} />
              </LinkButton>
            </li>
          ))}
        </ul>
        <div className={styles.versionInfo}>{download.main}</div>
      </section>
      {/* <NewsletterSignup />  */}
    </Layout>
  );
};

export default Download;
