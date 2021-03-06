import { cx } from 'linaria';
import React, { useEffect, useReducer } from 'react';

import ExitButtonSvg from '../../data/img/header_exit_button.inline.svg';
import HamburgerButtonSvg from '../../data/img/header_hamburger_button.inline.svg';
import { header } from '../../data/strings';
import { ClassNameProp } from '../types';
import * as styles from './HeaderMobile.styles';
import HeaderWrapper from './HeaderWrapper';
import { Link } from './Link';

const menuToggleReducer = (oldStatus: boolean) => {
  const shouldShowMenu = !oldStatus;

  document.body.style.overflow = shouldShowMenu ? 'hidden' : '';
  return shouldShowMenu;
};

const HeaderMobile: React.FC<ClassNameProp> = ({ className }) => {
  const [showMenu, toggleMenu] = useReducer(menuToggleReducer, false);

  useEffect(() => {
    showMenu && toggleMenu();
  }, []);

  return (
    <HeaderWrapper className={cx(className, styles.root)}>
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
    <HamburgerButtonSvg />
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
    <ExitButtonSvg />
  </button>
);

export default HeaderMobile;
