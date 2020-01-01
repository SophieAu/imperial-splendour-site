import { Link as GatsbyLink } from 'gatsby';
import React from 'react';

interface Props {
  to: string;
  className?: string;
  style?: React.CSSProperties;
}

const Link: React.FC<Props> = ({ to, className, children, style }) =>
  /^http/.test(to) ? (
    <a className={className} href={to} target="_blank" rel="noopener noreferrer" style={style}>
      {children}
    </a>
  ) : (
    <GatsbyLink className={className} to={to} style={style}>
      {children}
    </GatsbyLink>
  );

export default Link;
