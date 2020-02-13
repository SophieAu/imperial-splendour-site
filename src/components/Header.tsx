import './Header.scss';

import { graphql, useStaticQuery } from 'gatsby';
import Img from 'gatsby-image';
import React, { useEffect, useState } from 'react';

import { paths } from '../../data/config';
import exitButton from '../../data/img/header_exit_button';
import hamburgerButton from '../../data/img/header_hamburger_button';
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

const Header = () => {
  const [showMenu, setMenu] = useState(true);
  const [supportsJS, setJSSupport] = useState(false);

  const toggleMenu = () => {
    if (window.innerWidth >= 992 || !supportsJS) return;

    document.body.style.overflow = showMenu ? '' : 'hidden';
    setMenu(!showMenu);
  };

  const updateLayout = () => {
    setMenu(window.innerWidth >= 992);
    document.body.style.overflow = '';
    setJSSupport(/yesscript/.test(document.documentElement.className));
  };

  useEffect(() => {
    updateLayout();
    window.addEventListener('resize', updateLayout);
    return () => window.removeEventListener('resize', updateLayout);
  }, []);

  return (
    <header className="site-header head-foot">
      <ImageLink to={paths.home} title={header.home} className="header-logo">
        <Img
          className="header-img"
          fixed={useStaticQuery(query).headerLogo.childImageSharp.fixed}
          alt={header.logoAlt}
          fadeIn={false}
          placeholderStyle={{ display: 'none' }}
        />
      </ImageLink>
      {showMenu && (
        <nav id="header-menu">
          <NavLinks onClick={toggleMenu} />
          <ExitButton onClick={toggleMenu} />
        </nav>
      )}
      {!showMenu && <HamburgerButton onClick={toggleMenu} />}
    </header>
  );
};

const NavLinks = ({ onClick }: { onClick: () => void }) => (
  <ul>
    {header.menuItems.map(item => (
      <li key={item.title} className={cn(item.title === 'Homepage' && 'home-link')}>
        <Link to={item.path} handleClick={onClick}>
          {item.title}
        </Link>
      </li>
    ))}
  </ul>
);

const HamburgerButton = ({ onClick }: { onClick: () => void }) => (
  <button
    id="hamburger-button"
    onClick={onClick}
    aria-label={header.hamburgerA11yLabel}
    aria-expanded="false"
    aria-controls="menu"
  >
    {hamburgerButton}
  </button>
);

const ExitButton = ({ onClick }: { onClick: () => void }) => (
  <button
    id="exit-button"
    onClick={onClick}
    aria-label={header.exitA11yLabel}
    aria-expanded="true"
    aria-controls="menu"
  >
    {exitButton}
  </button>
);

export default Header;
