import { graphql } from 'gatsby';
import React from 'react';

import { slugs } from '../../data/config';
import { about, contributors } from '../../data/strings';
import Img from '../components/GatsbyImage';
import Layout from '../components/Layout';
import { AboutImage, Contributors } from '../types';
import * as styles from './about.styles';

export const query = graphql`
  query($width: Int = 66, $height: Int = 88) {
    pike: file(relativePath: { eq: "about/pike_portrait.png" }) {
      ...fixedImage
    }
    QHH: file(relativePath: { eq: "about/QHH_portrait.png" }) {
      ...fixedImage
    }
    oleg2242: file(relativePath: { eq: "about/oleg2242_portrait.png" }) {
      ...fixedImage
    }
    cro: file(relativePath: { eq: "about/cro_portrait.png" }) {
      ...fixedImage
    }
    tsanada: file(relativePath: { eq: "about/tsanada_portrait.png" }) {
      ...fixedImage
    }
    HD: file(relativePath: { eq: "about/HD_portrait.png" }) {
      ...fixedImage
    }
    madOrc: file(relativePath: { eq: "about/madOrc_portrait.png" }) {
      ...fixedImage
    }
    myfate: file(relativePath: { eq: "about/myfate_portrait.png" }) {
      ...fixedImage
    }
  }
`;

const About: React.FC<{ data: AboutImage }> = ({ data }) => (
  <Layout title={about.pageTitle} description={about.pageDescription} slug={slugs.about}>
    <p className={styles.aboutText}>{about.text}</p>
    <section className={styles.contributors}>
      <h2>{about.contributorTitle}</h2>
      <Avatars data={data} />
    </section>
  </Layout>
);

const Avatars: React.FC<{ data: AboutImage }> = ({ data }) => (
  <ul className={styles.avatars}>
    {Object.keys(contributors).map(id => {
      const key = id as keyof Contributors;

      return (
        <li key={id} className={styles.contributor}>
          <Img
            fixed={data[key].childImageSharp.fixed}
            alt={about.avatarAlt({ name: contributors[key] })}
            fadeIn={false}
          />
          <p>{contributors[key]}</p>
        </li>
      );
    })}
  </ul>
);

export default About;
