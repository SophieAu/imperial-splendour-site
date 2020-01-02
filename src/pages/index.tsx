import './index.scss';

import React from 'react';

import heroLogo from '../../static/img/hero_logo.png';
import Layout from '../components/Layout';
import DownloadButton from '../components/ui/DownloadButton';
import { slugs } from '../config';
import { home } from '../strings';

const Home = () => (
  <Layout title={home.pageTitle} description={home.pageDescription} slug={slugs.home}>
    <Hero />
    <Info />
  </Layout>
);

const Hero = () => (
  <section className="hero">
    <div className="hero-body">
      <img className="hero-logo" src={heroLogo} alt={home.heroLogoAlt} />
      <p className="hero-text">{home.heroText}</p>
    </div>
    <DownloadButton linkTo={slugs.downloadIndex} className="hero-btn" />
  </section>
);

const Info = () => (
  <section className="info-boxes">
    {home.infoBoxes.map((box, i) => (
      <>
        <img
          className={`info-image-${i % 2 ? 'even' : 'odd'}`}
          src={box.image}
          alt={box.imageAlt}
        />
        <div className="info-text">{box.text}</div>
      </>
    ))}
  </section>
);

export default Home;
