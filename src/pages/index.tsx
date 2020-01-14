import './index.scss';

import { graphql } from 'gatsby';
import Img from 'gatsby-image';
import React from 'react';

import { paths, slugs } from '../../data/config';
import heroLogo from '../../data/img/index/hero_logo.png';
import { home } from '../../data/strings';
import Layout from '../components/Layout';
import DownloadButton from '../components/ui/DownloadButton';
import { InfoBox as InfoBoxType } from '../types';

export const squareImage = graphql`
  fragment squareImage on File {
    childImageSharp {
      fluid(maxWidth: 805) {
        ...GatsbyImageSharpFluid
      }
    }
  }
`;

export const query = graphql`
  query {
    blackwatch: file(relativePath: { eq: "index/info_blackwatch.jpg" }) {
      ...squareImage
    }
    portraits: file(relativePath: { eq: "index/info_portraits.jpg" }) {
      ...squareImage
    }
    gameplay: file(relativePath: { eq: "index/info_gameplay.jpg" }) {
      ...squareImage
    }
  }
`;

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const Home: React.FC<any> = ({ data }) => {
  const infoBoxes: InfoBoxType[] = [
    {
      image: data.blackwatch.childImageSharp.fluid,
      imageAlt: home.infoBoxes[0].imageAlt,
      text: home.infoBoxes[0].text,
    },
    {
      image: data.portraits.childImageSharp.fluid,
      imageAlt: home.infoBoxes[1].imageAlt,
      text: home.infoBoxes[1].text,
    },
    {
      image: data.gameplay.childImageSharp.fluid,
      imageAlt: home.infoBoxes[2].imageAlt,
      text: home.infoBoxes[2].text,
    },
  ];

  return (
    <Layout title={home.pageTitle} description={home.pageDescription} slug={slugs.home}>
      <section className="hero">
        <div className="hero-body">
          <img className="hero-logo" src={heroLogo} alt={home.heroLogoAlt} />
          <p className="hero-text">{home.heroText}</p>
        </div>
        <DownloadButton linkTo={paths.downloadIndex} className="hero-btn" />
      </section>
      <section className="info-boxes">
        {infoBoxes.map((box, i) => (
          <InfoBox key={i} box={box} i={i} />
        ))}
      </section>
    </Layout>
  );
};

const InfoBox: React.FC<{ box: InfoBoxType; i: number }> = ({ box, i }) => (
  <>
    <Img className={`info-image-${i % 2 ? 'even' : 'odd'}`} fluid={box.image} />
    <p className="info-text">{box.text}</p>
  </>
);

export default Home;
