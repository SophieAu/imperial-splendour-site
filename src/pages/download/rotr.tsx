import React from 'react';

import { downloadLinks, modDBButton, slugs } from '../../../data/config';
import gDrive from '../../../data/img/download/logo_googledrive.svg';
import mediaFire from '../../../data/img/download/logo_mediafire.svg';
import { downloadRotR } from '../../../data/strings';
import Layout from '../../components/Layout';
import { ImageLink } from '../../components/Link';
import MarkdownWithLink from '../../components/MarkdownWithLink';
import NewsletterSignup from '../../components/NewsletterSignup';
import * as styles from './rotr.styles';

const hosts = [
  { platform: 'Mod DB', link: downloadLinks.modDB, imgSrc: modDBButton.download },
  { platform: 'Mediafire', link: downloadLinks.mediaFire, imgSrc: mediaFire },
  { platform: 'Google Drive', link: downloadLinks.googleDrive, imgSrc: gDrive },
];

const DownloadRotR = () => (
  <Layout
    title={downloadRotR.pageTitle}
    description={downloadRotR.pageDescription}
    slug={slugs.downloadRotR}
  >
    <section className={styles.downloadConfirm}>
      <h2>{downloadRotR.linkInfo}</h2>
      <ul className={styles.filehosts}>
        {hosts.map(({ platform, link, imgSrc }) => (
          <li key={platform}>
            <ImageLink to={link} title={downloadRotR.imageLinkAlt({ platform })}>
              <img src={imgSrc} alt={platform} />
            </ImageLink>
          </li>
        ))}
      </ul>
      <MarkdownWithLink>{downloadRotR.help}</MarkdownWithLink>
    </section>
    <NewsletterSignup />
  </Layout>
);

export default DownloadRotR;
