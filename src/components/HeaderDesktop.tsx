import './Header.scss';

import { graphql, useStaticQuery } from 'gatsby';
import { cx } from 'linaria';
import React from 'react';

import { paths } from '../../data/config';
import { header } from '../../data/strings';
import { cn } from '../util';
import Img from './GatsbyImage';
import * as styles from './Header.styles';
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
  <header className={cx(styles.root, 'head-foot', 'site-header')}>
    <ImageLink to={paths.home} title={header.home} className="header-logo">
      <Img
        className="header-img"
        fixed={useStaticQuery(query).headerLogo.childImageSharp.fixed}
        alt={header.logoAlt}
        fadeIn={false}
        placeholderStyle={{ display: 'none' }}
      />
    </ImageLink>
    <nav id="header-menu">
      <ul>
        {header.menuItems.map(item => (
          <li key={item.title} className={cn(item.title === 'Homepage' && 'home-link')}>
            <Link to={item.path}>{item.title}</Link>
          </li>
        ))}
      </ul>
    </nav>
  </header>
);

export default HeaderDesktop;
