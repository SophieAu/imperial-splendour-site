import React from "react";
import { Link as GatsbyLink } from "gatsby";

interface Props {
  to: string;
  className?: string;
  style?: React.CSSProperties;
}

const Link: React.FC<Props> = ({ to, className, children, style }) =>
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

interface ImageProps {
  to: string;
  title: string;
  className?: string;
  style?: React.CSSProperties;
}

export const ImageLink: React.FC<ImageProps> = props => {
  const { to, title, className, children } = props;

  return (
    <Link className={className} to={to} style={{ lineHeight: 0 }}>
      <span style={{ display: "none" }}>{title}</span>
      {children}
    </Link>
  );
};

export default Link;
