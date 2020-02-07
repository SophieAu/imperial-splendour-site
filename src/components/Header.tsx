import './Header.scss';

import { graphql, useStaticQuery } from 'gatsby';
import Img from 'gatsby-image';
import React from 'react';

import { paths } from '../../data/config';
import { header } from '../../data/strings';
import { cn } from '../util';
import ImageLink from './ImageLink';
import Link from './Link';

const query = graphql`
  query {
    headerLogo: file(relativePath: { eq: "header_logo.png" }) {
      ...headerLogo
    }
  }
`;

const getById = (id: string) => document.getElementById(id);

const toggleMenu = () => {
  if (window.innerWidth >= 992) return;

  const hamburgerButton = getById('hamburger-button');
  const exitButton = getById('exit-button');
  const wrapper = getById('header-menu');
  const body = document.getElementsByTagName('body')[0];
  if (!hamburgerButton || !exitButton || !wrapper || !body) return;

  if (wrapper.style.display === 'none' || !wrapper.style.display) {
    exitButton.style.display = 'block';
    hamburgerButton.style.display = 'none';
    body.style.overflow = 'hidden';
    wrapper.style.display = 'flex';
  } else {
    exitButton.style.display = 'none';
    hamburgerButton.style.display = 'block';
    body.style.overflow = 'auto';
    wrapper.style.display = 'none';
  }
};

const Header = () => (
  <header className="site-header head-foot noscript">
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
      <NavLinks />
      <ExitButton />
    </nav>
    <HamburgerButton />
  </header>
);

const NavLinks = () => (
  <ul>
    {header.menuItems.map(item => (
      <li key={item.title} className={cn(item.title === 'Homepage' && 'home-link')}>
        <Link to={item.path} handleClick={toggleMenu}>
          {item.title}
        </Link>
      </li>
    ))}
  </ul>
);

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
