import { Link as GatsbyLink } from "gatsby";
import React from "react";

const Link = ({ to, className, children, style }) =>
  /^http/.test(to) ? (
    <a
      className={className}
      href={to}
      target="_blank"
      rel="noopener noreferrer"
      style={style}
    >
      {children}
    </a>
  ) : (
    <GatsbyLink className={className} to={to} style={style}>
      {children}
    </GatsbyLink>
  );

export const ImageLink = ({ to, title, className, children }) => (
  <Link className={className} to={to} style={{ lineHeight: 0 }}>
    <span style={{ display: "none" }}>{title}</span>
    {children}
  </Link>
);

export default Link;
