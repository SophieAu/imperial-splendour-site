import { graphql } from 'gatsby';
import React from 'react';

import { hostImages, imgAlt, slugs } from '../../data/config';
import { buildPageTitle } from '../../data/strings';
import Layout from '../components/Layout';
import { LinkButton } from '../components/Link';
// import NewsletterSignup from '../components/NewsletterSignup';
import { DownloadResponse } from '../types';
import * as styles from './download.styles';

export const query = graphql`
  query($id: String!) {
    markdownRemark(id: { eq: $id }) {
      frontmatter {
        title
        description
        downloadTitle
        downloadLinks {
          host
          link
        }
      }
      html
    }
  }
`;

const Download: React.FC<DownloadResponse> = ({ data: { markdownRemark } }) => {
  const { title, description, version, downloadLinks, downloadTitle } = markdownRemark.frontmatter;

  return (
    <Layout slug={slugs.downloadIndex} description={description} title={buildPageTitle(title)}>
      <section className={styles.container}>
        <div className={styles.info} dangerouslySetInnerHTML={{ __html: markdownRemark.html }} />

        <h2 className={styles.dlHeading}>{downloadTitle}</h2>
        <ul className={styles.filehosts}>
          {downloadLinks.map(({ host, link }) => (
            <li key={host}>
              <LinkButton to={link} className={styles.hostButton}>
                <img
                  src={hostImages.find(({ host: h }) => h === host)?.image}
                  alt={imgAlt.filehost(host)}
                />
              </LinkButton>
            </li>
          ))}
        </ul>
        <div className={styles.versionInfo}>{version}</div>
      </section>
      {/* <NewsletterSignup />  */}
    </Layout>
  );
};

export default Download;
