import './index.scss';

import React from 'react';

import Layout from '../components/Layout';
import DownloadButton from '../components/ui/DownloadButton';
import { home } from '../strings';

const Home = () => (
  <Layout>
    <Hero />
    <Info />
  </Layout>
);

const Hero = () => (
  <section className="hero">
    <div className="hero-body">
      <img className="hero-logo" src="/img/hero_logo.png" alt="" />
      <div className="hero-text">{home.heroText}</div>
    </div>
    <DownloadButton linkTo="/download" className="hero-btn" />
  </section>
);

const Info = () => (
  <section className="info-boxes">
    {home.infoBoxes.map((box, i) =>
      i % 2 ? (
        <>
          <img className="info-image" src={box.image} alt="" />
          <div className="info-text">{box.text}</div>
        </>
      ) : (
        <>
          <div className="info-text">{box.text}</div>
          <img className="info-image" src={box.image} alt="" />
        </>
      )
    )}
  </section>
);

export default Home;
