import './Header.scss';

import React from 'react';

import logo from '../../assets/logo_header.png';
import ImageLink from '../ImageLink';
import Link from '../Link';

const Header = () => (
  <header>
    <ImageLink to="/" title="Homepage">
      <img className="header-logo" src={logo} alt="Imperial Splendour Logo" />
    </ImageLink>
    <div className="header-menu">
      <Link to="/download">Download</Link>
      <Link to="/blog">Blog</Link>
      <Link to="/about">About</Link>
    </div>
  </header>
);

export default Header;
