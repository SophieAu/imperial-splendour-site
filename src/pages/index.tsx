import './index.scss';

import { graphql } from 'gatsby';
import Img from 'gatsby-image';
import React from 'react';

import { paths, slugs } from '../../data/config';
import { downloadButton, home } from '../../data/strings';
import Layout from '../components/Layout';
import Link from '../components/Link';
import { IndexImage, InfoBox as InfoBoxType } from '../types';

export const query = graphql`
  query {
    heroImg: file(relativePath: { eq: "index/hero_logo.png" }) {
      ...heroImage
    }
    blackwatch: file(relativePath: { eq: "index/info_blackwatch.jpg" }) {
      ...infoBoxImage
    }
    portraits: file(relativePath: { eq: "index/info_portraits.jpg" }) {
      ...infoBoxImage
    }
    gameplay: file(relativePath: { eq: "index/info_gameplay.jpg" }) {
      ...infoBoxImage
    }
  }
`;

const Home: React.FC<{ data: IndexImage }> = ({ data }) => (
  <Layout title={home.pageTitle} description={home.pageDescription} slug={slugs.home}>
    <section className="hero">
      <h1 style={{ display: 'none' }}>{home.heroTitle}</h1>
      <div className="hero-body">
        <Img
          className="hero-logo"
          fluid={data.heroImg.childImageSharp.fluid}
          alt={home.heroLogoAlt}
        />
        <p className="hero-text">{home.heroText}</p>
      </div>
      <Link to={paths.downloadIndex} className="button hero-btn">
        {downloadButton.buttonText}
      </Link>
    </section>
    <section className="info-boxes">
      {home.infoBoxes.map((box, i) => (
        <InfoBox key={i} box={box} i={i} data={data} />
      ))}
    </section>
  </Layout>
);

interface InfoBoxProps {
  box: InfoBoxType;
  i: number;
  data: IndexImage;
}

const InfoBox: React.FC<InfoBoxProps> = ({ box, data, i }) => (
  <>
    <Img
      className={`info-image-${i % 2 ? 'even' : 'odd'}`}
      fluid={data[box.imageKey].childImageSharp.fluid}
      fadeIn={false}
    />
    <p className="info-text">{box.text}</p>
  </>
);

export default Home;
