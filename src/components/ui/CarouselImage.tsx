import './CarouselImage.scss';

import Img, { FixedObject } from 'gatsby-image';
import React from 'react';

const FLAG_WIDTH = 132;
const FLAG_HEIGHT = 66;
const calcWidth = (offset: number) => FLAG_WIDTH / Math.abs(offset || 1);
const calcHeight = (offset: number) => FLAG_HEIGHT * (1 - (offset * offset) / 100);

interface ImageProps {
  src: FixedObject;
  offset: number;
  title: string;
  side: 'right' | 'left' | 'center';
}

const CarouselImage: React.FC<ImageProps> = ({ src, offset, title, side }) => (
  <Img
    fixed={src}
    style={{
      height: `${calcHeight(offset)}px`,
      width: `${calcWidth(offset)}px`,
      zIndex: -Math.abs(offset),
      overflow: 'unset',
    }}
    fadeIn={false}
    placeholderStyle={{ display: 'none', overflow: 'auto' }}
    alt={title}
    imgStyle={{
      objectFit: 'cover',
      objectPosition: `${side} center`,
      width: `${FLAG_WIDTH}px`,
      right: `${side === 'left' ? calcWidth(offset) - FLAG_WIDTH : 0}px`,
      left: `${side === 'right' ? calcWidth(offset) - FLAG_WIDTH : 0}px`,
    }}
  />
);

export default CarouselImage;
