import React from "react";
import DownloadButton from "../../components/ui/DownloadButton";

import { home } from "../../strings";
import "./Hero.scss";

export default () => (
  <section className="hero">
    <div className="hero-body">
      <img className="hero-logo" src="/img/hero_logo.png" alt="" />
      <div className="hero-text">{home.heroText}</div>
    </div>
    <DownloadButton linkTo="/download" className="hero-btn" />
  </section>
);
