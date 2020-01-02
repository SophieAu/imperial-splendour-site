import './index.scss';

import React from 'react';

import heroLogo from '../../static/img/hero_logo.png';
import Layout from '../components/Layout';
import DownloadButton from '../components/ui/DownloadButton';
import { slugs } from '../config';
import { home } from '../strings';
import { InfoBox } from '../types';

const Home = () => (
  <Layout title={home.pageTitle} description={home.pageDescription} slug={slugs.home}>
    <section className="hero">
      <div className="hero-body">
        <img className="hero-logo" src={heroLogo} alt={home.heroLogoAlt} />
        <p className="hero-text">{home.heroText}</p>
      </div>
      <DownloadButton linkTo={slugs.downloadIndex} className="hero-btn" />
    </section>
    <section className="info-boxes">
      {home.infoBoxes.map((box, i) => (
        <InfoBox key={i} box={box} i={i} />
      ))}
    </section>
  </Layout>
);

const InfoBox: React.FC<{ box: InfoBox; i: number }> = ({ box, i }) => (
  <>
    <img className={`info-image-${i % 2 ? 'even' : 'odd'}`} src={box.image} alt={box.imageAlt} />
    <p className="info-text">{box.text}</p>
  </>
);

export default Home;
