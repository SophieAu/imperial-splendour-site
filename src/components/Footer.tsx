import { cx } from 'linaria';
import React from 'react';

import { modDBButton, socialMedia } from '../../data/config';
import facebook from '../../data/img/footer_facebook.svg';
import twitter from '../../data/img/footer_twitter.svg';
import { footer } from '../../data/strings';
import { ClassNameProp } from '../types';
import * as styles from './Footer.styles';
import { ImageLink } from './Link';
import MarkdownWithLink from './MarkdownWithLink';

const socialMediaLinks = [
  { name: 'ModDB', link: socialMedia.modDB, src: modDBButton.popularity },
  { name: 'Facebook', link: socialMedia.facebook, src: facebook },
  { name: 'Twitter', link: socialMedia.twitter, src: twitter },
];

const Footer: React.FC<ClassNameProp> = ({ className }) => (
  <footer className={cx(className, styles.root)}>
    <MarkdownWithLink className={styles.credits}>
      {footer.creditsCopyright({ year: new Date().getFullYear() })}
    </MarkdownWithLink>
    <ul className={styles.socialMedia}>
      {socialMediaLinks.map(platform => (
        <li key={platform.link}>
          <ImageLink to={platform.link} title={footer.socialImgAlt({ platform: platform.name })}>
            <img src={platform.src} alt={platform.name} />
          </ImageLink>
        </li>
      ))}
    </ul>
  </footer>
);

export default Footer;
