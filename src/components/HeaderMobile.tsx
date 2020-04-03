import { cx } from 'linaria';
import React, { useEffect, useState } from 'react';

import exitButton from '../../data/img/header_exit_button';
import hamburgerButton from '../../data/img/header_hamburger_button';
import { header } from '../../data/strings';
import * as styles from './HeaderMobile.styles';
import HeaderWrapper from './HeaderWrapper';
import Link from './Link';

const HeaderMobile = () => {
  const [showMenu, setMenu] = useState(false);

  const toggleMenu = () => {
    document.body.style.overflow = showMenu ? '' : 'hidden';
    setMenu(!showMenu);
  };

  useEffect(() => {
    setMenu(false);
    document.body.style.overflow = '';
  }, []);

  return (
    <HeaderWrapper className={styles.root}>
      <HamburgerButton className={showMenu && styles.hide} onClick={toggleMenu} />
      <nav className={cx(styles.menu, !showMenu && styles.hide)}>
        <NavLinks onClick={toggleMenu} />
        <ExitButton onClick={toggleMenu} />
      </nav>
    </HeaderWrapper>
  );
};

const NavLinks = ({ onClick }: { onClick: () => void }) => (
  <ul>
    {header.menuItems.map(item => (
      <li key={item.title} className={cx(item.title === 'Homepage' && 'home-link')}>
        <Link to={item.path} handleClick={onClick}>
          {item.title}
        </Link>
      </li>
    ))}
  </ul>
);

interface ButtonProps {
  onClick: () => void;
  className?: string | false;
}

const HamburgerButton: React.FC<ButtonProps> = ({ onClick, className }) => (
  <button
    className={cx(styles.button, styles.hamburger, className)}
    onClick={onClick}
    aria-label={header.hamburgerA11yLabel}
    aria-expanded="false"
    aria-controls="menu"
  >
    {hamburgerButton}
  </button>
);

const ExitButton: React.FC<ButtonProps> = ({ onClick }) => (
  <button
    className={cx(styles.button, styles.exit)}
    id="exit-button"
    onClick={onClick}
    aria-label={header.exitA11yLabel}
    aria-expanded="true"
    aria-controls="menu"
  >
    {exitButton}
  </button>
);

export default HeaderMobile;
