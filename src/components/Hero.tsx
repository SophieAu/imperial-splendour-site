import { graphql, useStaticQuery } from 'gatsby';
import { cx } from 'linaria';
import React from 'react';

import { paths } from '../../data/config';
import { downloadButton, home } from '../../data/strings';
import Link from '../components/Link';
import Img from './GatsbyImage';
import * as styles from './Hero.styles';

const query = graphql`
  query {
    file(relativePath: { eq: "index/hero_logo.png" }) {
      ...heroImage
    }
  }
`;

const Hero: React.FC<{}> = () => (
  <section className={styles.root}>
    <h1 style={{ display: 'none' }}>{home.heroTitle}</h1>
    <div className={styles.body}>
      <Img
        className={styles.logo}
        fluid={useStaticQuery(query).file.childImageSharp.fluid}
        alt={home.heroLogoAlt}
      />
      <p className={styles.text}>{home.heroText}</p>
    </div>
    <Link to={paths.downloadIndex} className={cx('button', styles.button)}>
      {downloadButton.buttonText}
    </Link>
  </section>
);

export default Hero;
