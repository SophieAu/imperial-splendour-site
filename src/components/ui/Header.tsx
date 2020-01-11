import './Header.scss';

import React from 'react';

import logo from '../../assets/logo_header.png';
import { paths } from '../../config';
import { header } from '../../strings';
import ImageLink from '../ImageLink';
import Link from '../Link';

const Header = () => (
  <header className="site-header">
    <ImageLink to={paths.home} title={header.home} className="header-logo">
      <img src={logo} alt={header.logoAlt} />
    </ImageLink>
    <nav id="header-menu">
      <ul>
        <li id="home-link">
          <Link to={paths.home}>{header.home}</Link>
        </li>
        <li>
          <Link to={paths.downloadIndex}>{header.download}</Link>
        </li>
        <li>
          <Link to={paths.blog}>{header.blog}</Link>
        </li>
        <li>
          <Link to={paths.about}>{header.about}</Link>
        </li>
      </ul>
    </nav>
  </header>
);

export default Header;
