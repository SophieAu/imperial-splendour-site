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
    <nav id="header-menu" className="hidden">
      <ul id="menu">
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
      <HamburgerButton />
      <ExitButton />
    </nav>
  </header>
);

const getById = (id: string) => document.getElementById(id);

const toggleMenu = () => {
  const hamburgerButton = getById('hamburger-button');
  const exitButton = getById('exit-button');
  const wrapper = getById('header-menu');
  const menu = getById('menu');
  const body = document.getElementsByTagName('body')[0];
  if (!hamburgerButton || !exitButton || !wrapper || !menu || !body) return;

  if (menu.style.display === 'none' || !menu.style.display) {
    exitButton.style.display = 'block';
    hamburgerButton.style.display = 'none';
    menu.style.display = 'flex';
    body.style.overflow = 'hidden';
    wrapper.className = '';
  } else {
    exitButton.style.display = 'none';
    hamburgerButton.style.display = 'block';
    menu.style.display = 'none';
    body.style.overflow = 'auto';
    wrapper.className = 'hidden';
  }
};

const HamburgerButton = () => (
  <button
    id="hamburger-button"
    onClick={toggleMenu}
    aria-label={header.hamburgerA11yLabel}
    aria-expanded="false"
    aria-controls="menu"
  >
    <svg width="26" height="20" viewBox="0 0 26 20" xmlns="http://www.w3.org/2000/svg" role="img">
      <title>{header.hamburgerA11yLabel}</title>
      <rect width="26" height="2" />
      <rect y="9" width="26" height="2" />
      <rect y="18" width="26" height="2" />
    </svg>
  </button>
);

const ExitButton = () => (
  <button
    id="exit-button"
    onClick={toggleMenu}
    aria-label={header.exitA11yLabel}
    aria-expanded="true"
    aria-controls="menu"
  >
    <svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" role="img">
      <title>{header.exitA11yLabel}</title>
      <rect x="1.5" y="0" width="26" height="2" transform="rotate(45 1.5 0)" />
      <rect x="0" y="18.5" width="26" height="2" transform="rotate(-45 0 18.5)" />
    </svg>
  </button>
);

export default Header;
