import { graphql, useStaticQuery } from 'gatsby';
import { cx } from 'linaria';
import React from 'react';

import { paths } from '../../data/config';
import { header } from '../../data/strings';
import Img from './GatsbyImage';
import * as styles from './HeaderWrapper.styles';
import { ImageLink } from './Link';

const query = graphql`
  query {
    headerLogo: file(relativePath: { eq: "header_logo.png" }) {
      ...headerLogo
    }
  }
`;

const HeaderWrapper: React.FC<{ className?: string }> = ({ className, children }) => (
  <header className={cx(styles.root, className)}>
    <ImageLink to={paths.home} title={header.home}>
      <Img
        className={styles.homeLogo}
        fixed={useStaticQuery(query).headerLogo.childImageSharp.fixed}
        alt={header.logoAlt}
        fadeIn={false}
        placeholderStyle={{ display: 'none' }}
      />
    </ImageLink>
    {children}
  </header>
);

export default HeaderWrapper;
