import './Carousel.scss';

import Img, { FixedObject } from 'gatsby-image';
import React from 'react';

const getBetterModulo = (base: number) => (value: number) =>
  value < 0 ? base + value : value % base;

interface Props {
  img: FixedObject[];
  onPress: (counter: number) => void;
  selected: number;
}

const Carousel: React.FC<Props> = ({ img, onPress, selected }) => {
  const getModulo = getBetterModulo(img.length);

  return (
    <div id="carousel">
      <div className="hideLeft">
        <Img
          fixed={img[getModulo(selected - 3)]}
          className="img"
          fadeIn={false}
          placeholderStyle={{ display: 'none' }}
        />
      </div>
      <div className="prevLeftSecond">
        <Img
          fixed={img[getModulo(selected - 2)]}
          className="img"
          fadeIn={false}
          placeholderStyle={{ display: 'none' }}
        />
      </div>
      <div className="prev">
        <Img
          fixed={img[getModulo(selected - 1)]}
          className="img"
          fadeIn={false}
          placeholderStyle={{ display: 'none' }}
        />
      </div>
      <button id="prev" onClick={() => onPress(getModulo(selected - 1))}>
        Prev
      </button>
      <div className="selected">
        <Img
          fixed={img[getModulo(selected)]}
          className="img"
          fadeIn={false}
          placeholderStyle={{ display: 'none' }}
        />
      </div>
      <button id="next" onClick={() => onPress(getModulo(selected + 1))}>
        Next
      </button>
      <div className="next">
        <Img
          fixed={img[getModulo(selected + 1)]}
          className="img"
          fadeIn={false}
          placeholderStyle={{ display: 'none' }}
        />
      </div>
      <div className="nextRightSecond">
        <Img
          fixed={img[getModulo(selected + 2)]}
          className="img"
          fadeIn={false}
          placeholderStyle={{ display: 'none' }}
        />
      </div>
      <div className="hideRight">
        <Img
          fixed={img[getModulo(selected + 3)]}
          className="img"
          fadeIn={false}
          placeholderStyle={{ display: 'none' }}
        />
      </div>
    </div>
  );
};

export default Carousel;
