import { graphql } from 'gatsby';
import React from 'react';

import { slugs } from '../../data/config';
import { about, contributors } from '../../data/strings';
import Img from '../components/GatsbyImage';
import Layout from '../components/Layout';
import { AboutImage, Contributors } from '../types';
import * as styles from './about.styles';

export const query = graphql`
  query {
    pike: file(relativePath: { eq: "about/pike_portrait.png" }) {
      ...avatarImage
    }
    QHH: file(relativePath: { eq: "about/QHH_portrait.png" }) {
      ...avatarImage
    }
    oleg2242: file(relativePath: { eq: "about/oleg2242_portrait.png" }) {
      ...avatarImage
    }
    cro: file(relativePath: { eq: "about/cro_portrait.png" }) {
      ...avatarImage
    }
    tsanada: file(relativePath: { eq: "about/tsanada_portrait.png" }) {
      ...avatarImage
    }
    HD: file(relativePath: { eq: "about/HD_portrait.png" }) {
      ...avatarImage
    }
    madOrc: file(relativePath: { eq: "about/madOrc_portrait.png" }) {
      ...avatarImage
    }
    myfate: file(relativePath: { eq: "about/myfate_portrait.png" }) {
      ...avatarImage
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
