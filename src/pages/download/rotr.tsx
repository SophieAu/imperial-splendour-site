import './rotr.scss';

import React from 'react';

import gDrive from '../../assets/download_googledrive.svg';
import mediaFire from '../../assets/download_mediafire.svg';
import Layout from '../../components/Layout';
import Link from '../../components/Link';
import NewsletterSignup from '../../components/ui/NewsletterSignup';
import { downloadLinks, slugs } from '../../config';
import { download, downloadRotR } from '../../strings';

const DownloadRotR = () => (
  <Layout
    title={downloadRotR.pageTitle}
    description={downloadRotR.pageDescription}
    slug={slugs.downloadRotR}
  >
    <section className="download-confirm">
      <h2>{download.linkInfo}</h2>
      <div className="filehosts">
        <Link to={downloadLinks.modDB}>
          <img
            src="https://button.moddb.com/download/medium/169793.png"
            alt={downloadRotR.imageLinkAlt({ platform: 'Mod DB' })}
          />
        </Link>
        <Link to={downloadLinks.mediaFire}>
          <img src={mediaFire} alt={downloadRotR.imageLinkAlt({ platform: 'Mediafire' })} />
        </Link>
        <Link to={downloadLinks.googleDrive}>
          <img src={gDrive} alt={downloadRotR.imageLinkAlt({ platform: 'Google Drive' })} />
        </Link>
      </div>
    </section>
    <NewsletterSignup />
  </Layout>
);

export default DownloadRotR;
