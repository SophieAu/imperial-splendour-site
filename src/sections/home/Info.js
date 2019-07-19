import React from "react";
import "./Info.scss";

const InfoBoxes = [
  {
    image: "/img/info_blackwatch.jpg",
    text: `Fight in the Revolutionary Wars. Command your armies to destroy the old order or preserve it. Rewrite history. The world is at your feet. To give you an authentic feeling for the battles of this period we created armies with historically accurate uniforms.`
  },
  {
    image: "/img/info_portraits.jpg",
    text: `But historical accuracy does not end with new fancy uniforms. There are many historical characters in the game that you already know or whose portrait you might have seen in a museum. More than 230 portraits have been added to the game to replace the vanilla portrait sets of ETW and give you an 18th century feeling.`
  },
  {
    image: "/img/info_gameplay.jpg",
    text:
      "Additionally, RotR gives a more authentic feeling on the campaign map. Several factions have a new UI and all have their historical flags. You might also recognize some of the cities and buildings as 3D recreations of their actual historical counterparts."
  }
];

export default () => (
  <section className="info-boxes">
    {InfoBoxes.map((box, i) =>
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
