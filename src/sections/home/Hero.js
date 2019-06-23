import React from "react";
import DownloadButton from "../../components/ui/DownloadButton";
import "./Hero.scss";

const HERO_TEXT = `It is the year 1783. The American Revolution has shown the world that the order of a monarch can be disputed by his own subjects. Colonies can claim independence in the name of Liberty. Events like this could topple the absolute monarchies that ruled Europe for nearly a thousand years.`;

export default () => (
  <section className="hero">
    <div class="hero-body">
      <img className="hero-logo" src="/img/hero_logo.png" alt="" />
      <div class="hero-text">{HERO_TEXT}</div>
    </div>
    <DownloadButton className="hero-btn" />
  </section>
);
