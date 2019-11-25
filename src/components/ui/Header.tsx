import React from "react";
import Link from "../Link";
import logo from "../../assets/logo_header.png";
import "./Header.scss";
import ImageLink from "../ImageLink";

export default () => (
  <header>
    <ImageLink to="/" title="Homepage">
      <img className="header-logo" src={logo} alt="Imperial Splendour Logo" />
    </ImageLink>
    <div className="header-menu">
      <Link to="/download">Download</Link>
      <Link to="/blog">Blog</Link>
      <Link to="/about">About</Link>
    </div>
  </header>
);
