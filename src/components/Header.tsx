import './Header.scss';

import React, { useEffect, useState } from 'react';

import HeaderDesktop from './HeaderDesktop';
import HeaderMobile from './HeaderMobile';

const Header = () => {
  const [isMobile, setMobile] = useState(true);

  const updateLayout = () => {
    setMobile(window.innerWidth <= 1024);
  };

  useEffect(() => {
    updateLayout();
    window.addEventListener('resize', updateLayout);
    return () => window.removeEventListener('resize', updateLayout);
  }, []);

  return isMobile ? <HeaderMobile /> : <HeaderDesktop />;
};

export default Header;
