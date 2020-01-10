import { Link as GatsbyLink } from 'gatsby';
import React from 'react';

interface Props {
  to: string;
  rel?: string;
  className?: string;
  style?: React.CSSProperties;
  ariaLabel?: string;
}

const Link: React.FC<Props> = ({ to, className, children, style, rel, ariaLabel }) =>
  /^http/.test(to) ? (
    <a
      className={className}
      href={to}
      target="_blank"
      rel="noopener noreferrer"
      style={style}
      aria-label={ariaLabel}
    >
      {children}
    </a>
  ) : (
    <GatsbyLink className={className} to={to} style={style} rel={rel} aria-label={ariaLabel}>
      {children}
    </GatsbyLink>
  );

export default Link;
