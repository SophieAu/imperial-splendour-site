import './index.scss';

import React from 'react';

import { paths, slugs } from '../../data/config';
import heroLogo from '../../data/img/index/hero_logo.png';
import { home } from '../../data/strings';
import Layout from '../components/Layout';
import DownloadButton from '../components/ui/DownloadButton';
import { InfoBox as InfoBoxType } from '../types';

const Home = () => (
  <Layout title={home.pageTitle} description={home.pageDescription} slug={slugs.home}>
    <section className="hero">
      <div className="hero-body">
        <img className="hero-logo" src={heroLogo} alt={home.heroLogoAlt} />
        <p className="hero-text">{home.heroText}</p>
      </div>
      <DownloadButton linkTo={paths.downloadIndex} className="hero-btn" />
    </section>
    <section className="info-boxes">
      {home.infoBoxes.map((box, i) => (
        <InfoBox key={i} box={box} i={i} />
      ))}
    </section>
  </Layout>
);

const InfoBox: React.FC<{ box: InfoBoxType; i: number }> = ({ box, i }) => (
  <>
    <img className={`info-image-${i % 2 ? 'even' : 'odd'}`} src={box.image} alt={box.imageAlt} />
    <p className="info-text">{box.text}</p>
  </>
);

export default Home;
