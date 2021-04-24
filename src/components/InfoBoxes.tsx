import { graphql, useStaticQuery } from 'gatsby';
import React from 'react';

import { home } from '../../data/strings';
import Image from './Image';
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

const InfoBoxes: React.FC = () => (
  <section className={styles.root}>
    {home.infoBoxes.map((box, i) => (
      <React.Fragment key={i}>
        <Image
          {...useStaticQuery(query)[box.imageKey].childImageSharp.fluid}
          className={`${styles.image} ${i % 2 ? 'even' : 'odd'}`}
          alt={box.imageAlt}
        />
        <p className={styles.text}>{box.text}</p>
      </React.Fragment>
    ))}
  </section>
);

export default InfoBoxes;
