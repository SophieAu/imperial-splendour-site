import { cx } from 'linaria';
import React from 'react';

import { paths } from '../../data/config';
import logoPng from '../../data/img/header_logo.png';
import logoWebP from '../../data/img/header_logo.webp';
import { header } from '../../data/strings';
import { ClassNameProp } from '../types';
import * as styles from './HeaderWrapper.styles';
import { ImageLink } from './Link';

const HeaderWrapper: React.FC<ClassNameProp> = ({ className, children }) => (
  <header className={cx(styles.root, className)}>
    <ImageLink to={paths.home} title={header.home}>
      <picture>
        <source src={logoWebP} type="image/webp" />
        <img src={logoPng} alt={header.logoAlt} className={styles.homeLogo} />
      </picture>
    </ImageLink>
    {children}
  </header>
);

export default HeaderWrapper;
