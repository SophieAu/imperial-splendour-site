import './rotr.scss';

import React from 'react';

import { downloadLinks, modDBButton, slugs } from '../../../data/config';
import gDrive from '../../../data/images/download/logo_googledrive.svg';
import mediaFire from '../../../data/images/download/logo_mediafire.svg';
import { downloadRotR } from '../../../data/strings';
import ImageLink from '../../components/ImageLink';
import Layout from '../../components/Layout';
import Link from '../../components/Link';
import NewsletterSignup from '../../components/ui/NewsletterSignup';

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
    <section className="download-confirm">
      <h2>{downloadRotR.linkInfo}</h2>
      <ul className="filehosts">
        {hosts.map(({ platform, link, imgSrc }) => (
          <li key={platform}>
            <ImageLink to={link} title={downloadRotR.imageLinkAlt({ platform })}>
              <img src={imgSrc} alt={platform} />
            </ImageLink>
          </li>
        ))}
      </ul>
      <p>
        {`${downloadRotR.helpPre} `}
        <Link to={downloadLinks.tutorial}>{downloadRotR.helpLink}</Link>
        {downloadRotR.helpPost}
      </p>
    </section>
    <NewsletterSignup />
  </Layout>
);

export default DownloadRotR;
