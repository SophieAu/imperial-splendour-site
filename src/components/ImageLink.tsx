import React from "react";
import Link from "./Link";

interface Props {
  to: string;
  title: string;
  className?: string;
  style?: React.CSSProperties;
}

const ImageLink: React.FC<Props> = ({ to, title, className, children }) => (
  <Link className={className} to={to} style={{ lineHeight: 0 }}>
    <span style={{ display: "none" }}>{title}</span>
    {children}
  </Link>
);

export default ImageLink;
