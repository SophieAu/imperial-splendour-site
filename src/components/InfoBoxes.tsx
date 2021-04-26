import { graphql, useStaticQuery } from 'gatsby';
import React from 'react';

import { home } from '../../data/strings';
import Image from './Image';
import * as styles from './InfoBoxes.styles';

const query = graphql`
  query($maxWidth: Int = 805) {
    blackwatch: file(relativePath: { eq: "index/info_blackwatch.jpg" }) {
      ...fluidImage
    }
    portraits: file(relativePath: { eq: "index/info_portraits.jpg" }) {
      ...fluidImage
    }
    gameplay: file(relativePath: { eq: "index/info_gameplay.jpg" }) {
      ...fluidImage
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
