import { graphql, useStaticQuery } from 'gatsby';
import Img from 'gatsby-image';
import React from 'react';

import { home } from '../../data/strings';
import * as styles from './InfoBoxes.styles';

const query = graphql`
  query {
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

const InfoBoxes: React.FC<{}> = () => (
  <section className={styles.root}>
    {home.infoBoxes.map((box, i) => (
      <React.Fragment key={i}>
        <Img
          className={`${styles.image} ${i % 2 ? 'even' : 'odd'}`}
          fluid={useStaticQuery(query)[box.imageKey].childImageSharp.fluid}
          fadeIn={false}
        />
        <p className={styles.text}>{box.text}</p>
      </React.Fragment>
    ))}
  </section>
);

export default InfoBoxes;
