import './Header.scss';

import React from 'react';

import logo from '../../assets/logo_header.png';
import { paths } from '../../config';
import { header } from '../../strings';
import ImageLink from '../ImageLink';
import Link from '../Link';

const Header = () => (
  <header>
    <ImageLink to={paths.home} title={header.home}>
      <img className="header-logo" src={logo} alt={header.logoAlt} />
    </ImageLink>
    <nav className="header-menu">
      <Link to={paths.downloadIndex}>{header.download}</Link>
      <Link to={paths.blog}>{header.blog}</Link>
      <Link to={paths.about}>{header.about}</Link>
    </nav>
  </header>
);

export default Header;
