import { graphql, useStaticQuery } from 'gatsby';
import { cx } from 'linaria';
import React from 'react';

import { paths } from '../../data/config';
import { header } from '../../data/strings';
import { cn } from '../util';
import Img from './GatsbyImage';
import * as styles from './HeaderDesktop.styles';
import ImageLink from './ImageLink';
import Link from './Link';

const query = graphql`
  query {
    headerLogo: file(relativePath: { eq: "header_logo.png" }) {
      ...headerLogo
    }
  }
`;

const HeaderDesktop = () => (
  <header className={cx(styles.root, 'head-foot')}>
    <ImageLink to={paths.home} title={header.home}>
      <Img
        className={styles.homeLogo}
        fixed={useStaticQuery(query).headerLogo.childImageSharp.fixed}
        alt={header.logoAlt}
        fadeIn={false}
        placeholderStyle={{ display: 'none' }}
      />
    </ImageLink>
    <nav className={styles.menu}>
      <ul>
        {header.menuItems.map(item => (
          <li key={item.title} className={cn(item.title === 'Homepage' && styles.link)}>
            <Link to={item.path}>{item.title}</Link>
          </li>
        ))}
      </ul>
    </nav>
  </header>
);

export default HeaderDesktop;
