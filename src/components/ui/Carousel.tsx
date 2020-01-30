import './Carousel.scss';

import Img, { FixedObject } from 'gatsby-image';
import React, { useState } from 'react';

const getBetterModulo = (base: number) => (value: number) =>
  value < 0 ? base + value : value % base;

const Carousel: React.FC<{ img: FixedObject[] }> = ({ img }) => {
  const [counter, setCounter] = useState(0);
  const getModulo = getBetterModulo(img.length);

  return (
    <div id="carousel">
      <div className="hideLeft">
        <Img fixed={img[getModulo(counter - 3)]} className="img" />
      </div>
      <div className="prevLeftSecond">
        <Img fixed={img[getModulo(counter - 2)]} className="img" />
      </div>
      <div className="prev">
        <Img fixed={img[getModulo(counter - 1)]} className="img" />
      </div>
      <button id="prev" onClick={() => setCounter(getModulo(counter - 1))}>
        Prev
      </button>
      <div className="selected">
        <Img fixed={img[getModulo(counter)]} className="img" />
      </div>
      <button id="next" onClick={() => setCounter(getModulo(counter + 1))}>
        Next
      </button>
      <div className="next">
        <Img fixed={img[getModulo(counter + 1)]} className="img" />
      </div>
      <div className="nextRightSecond">
        <Img fixed={img[getModulo(counter + 2)]} className="img" />
      </div>
      <div className="hideRight">
        <Img fixed={img[getModulo(counter + 3)]} className="img" />
      </div>
    </div>
  );
};

export default Carousel;
