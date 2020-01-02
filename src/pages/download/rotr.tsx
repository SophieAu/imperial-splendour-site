import './rotr.scss';

import React from 'react';

import gDrive from '../../assets/download_googledrive.svg';
import mediaFire from '../../assets/download_mediafire.svg';
import ImageLink from '../../components/ImageLink';
import Layout from '../../components/Layout';
import Link from '../../components/Link';
import NewsletterSignup from '../../components/ui/NewsletterSignup';
import { downloadLinks, slugs } from '../../config';
import { downloadRotR } from '../../strings';

const DownloadRotR = () => (
  <Layout
    title={downloadRotR.pageTitle}
    description={downloadRotR.pageDescription}
    slug={slugs.downloadRotR}
  >
    <section className="download-confirm">
      <h2>{downloadRotR.linkInfo}</h2>
      <div className="filehosts">
        <ImageLink
          to={downloadLinks.modDB}
          title={downloadRotR.imageLinkAlt({ platform: 'Mod DB' })}
        >
          <img src="https://button.moddb.com/download/medium/169793.png" alt={'Mod DB'} />
        </ImageLink>
        <ImageLink
          to={downloadLinks.mediaFire}
          title={downloadRotR.imageLinkAlt({ platform: 'Mediafire' })}
        >
          <img src={mediaFire} alt={'Mediafire'} />
        </ImageLink>
        <ImageLink
          to={downloadLinks.googleDrive}
          title={downloadRotR.imageLinkAlt({ platform: 'Google Drive' })}
        >
          <img src={gDrive} alt={'Google Drive'} />
        </ImageLink>
      </div>
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
