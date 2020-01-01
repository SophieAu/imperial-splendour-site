import './Info.scss';

import React from 'react';

import { home } from '../../strings';

const Info = () => (
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

export default Info;
