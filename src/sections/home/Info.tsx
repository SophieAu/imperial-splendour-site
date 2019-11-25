import React from "react";
import "./Info.scss";
import { home } from "../../strings";

export default () => (
  <section className="info-boxes">
    {home.infoBoxes.map((box, i) =>
      i % 2 ? (
        <>
          <img className="info-image" src={box.image} alt="" />
          <div className="info-text">{box.text}</div>
        </>
      ) : (
        <>
          <div className="info-text">{box.text}</div>
          <img className="info-image" src={box.image} alt="" />
        </>
      )
    )}
  </section>
);
