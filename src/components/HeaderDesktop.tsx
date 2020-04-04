import { cx } from 'linaria';
import React from 'react';

import { header } from '../../data/strings';
import { cn } from '../util';
import * as styles from './HeaderDesktop.styles';
import HeaderWrapper from './HeaderWrapper';
import { Link } from './Link';

const HeaderDesktop = ({ className }: { className: string }) => (
  <HeaderWrapper className={cx(className, styles.toggle)}>
    <nav className={styles.root}>
      <ul>
        {header.menuItems.map(item => (
          <li key={item.title} className={cn(item.title === 'Homepage' && styles.link)}>
            <Link to={item.path}>{item.title}</Link>
          </li>
        ))}
      </ul>
    </nav>
  </HeaderWrapper>
);

export default HeaderDesktop;
