import { Link as GatsbyLink } from 'gatsby';
import { cx } from 'linaria';
import React from 'react';

import * as styles from './Link.styles';

interface LinkProps {
  to: string;
  rel?: string;
  className?: string;
  style?: React.CSSProperties;
  ariaLabel?: string;
  handleClick?: () => void;
}

export const Link: React.FC<LinkProps> = props => {
  const { to, className, children, style, rel, ariaLabel, handleClick } = props;

  return /^http/.test(to) ? (
    <a
      className={className}
      href={to}
      target="_blank"
      rel="noopener noreferrer"
      style={style}
      aria-label={ariaLabel}
      onClick={handleClick}
    >
      {children}
    </a>
  ) : (
    <GatsbyLink
      className={className}
      to={to}
      style={style}
      rel={rel}
      onClick={handleClick}
      aria-label={ariaLabel}
    >
      {children}
    </GatsbyLink>
  );
};

interface ImageLinkProps {
  to: string;
  title: string;
  className?: string;
  style?: React.CSSProperties;
}

export const ImageLink: React.FC<ImageLinkProps> = ({ to, title, className, children }) => (
  <Link className={className} to={to} style={{ lineHeight: 0 }} ariaLabel={title}>
    {children}
  </Link>
);

interface LinkButtonProps {
  className?: string;
  to: string;
}

export const LinkButton: React.FC<LinkButtonProps> = ({ className, to, children }) => (
  <Link to={to} className={cx(styles.button, className)}>
    {children}
  </Link>
);
