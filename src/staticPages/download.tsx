import { graphql } from 'gatsby';
import React from 'react';

import { hostImages, imgAlt, slugs } from '../../data/config';
import { buildPageTitle, download } from '../../data/strings';
import Layout from '../components/Layout';
import { Link, LinkButton } from '../components/Link';
import { DownloadPageResponse, DownloadResponse } from '../types';
import * as styles from './download.styles';

export const query = graphql`
  query($id: String!) {
    markdownRemark(id: { eq: $id }) {
      frontmatter {
        title
        description
        mainDownload
      }
      html
    }
    allMarkdownRemark(filter: { fileAbsolutePath: { regex: "/data/content/downloads/" } }) {
      nodes {
        frontmatter {
          title
          links {
            host
            link
          }
        }
      }
    }
  }
`;

const Download: React.FC<DownloadPageResponse & DownloadResponse> = ({ data }) => {
  const { frontmatter, html } = data.markdownRemark;
  const allDownloads = data.allMarkdownRemark.nodes.map(({ frontmatter }) => ({
    ...frontmatter,
  }));
  const mainDownload = allDownloads.find(({ title }) => title == frontmatter.mainDownload);
  const otherDownloads = allDownloads.filter(({ title }) => title != frontmatter.mainDownload);

  return (
    <Layout
      slug={slugs.downloadIndex}
      description={frontmatter.description}
      title={buildPageTitle(frontmatter.title)}
    >
      <section className={styles.container}>
        <div className={styles.info} dangerouslySetInnerHTML={{ __html: html }} />

        <h2 className={styles.dlHeading}>{download.linkSectionTitle}</h2>
        <ul className={styles.filehosts}>
          {mainDownload?.links.map(({ host, link }) => (
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
        <div className={styles.versionInfo}>{mainDownload?.title}</div>
      </section>

      <section className={styles.otherContainer}>
        <h2 className={styles.dlHeading}>{download.otherDownloadsSectionTitle}</h2>
        <table className={styles.mirrorTable}>
          <tbody>
            {otherDownloads.map(({ title, links }) => (
              <tr key={title}>
                <td>{title}</td>
                <td>
                  {links.map(({ host, link }) => (
                    <p key={host}>
                      <Link to={link}>{host}</Link>
                    </p>
                  ))}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>
    </Layout>
  );
};

export default Download;
