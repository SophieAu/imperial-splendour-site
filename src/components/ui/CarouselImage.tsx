import './CarouselImage.scss';

import Img, { FixedObject } from 'gatsby-image';
import React from 'react';

const IMAGE_WIDTH = 132;
const IMAGE_HEIGHT = 66;
const calcWidth = (offset: number) => IMAGE_WIDTH / Math.abs(offset || 1);
const calcHeight = (offset: number) => IMAGE_HEIGHT * (1 - (offset * offset) / 100);

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
      width: `${IMAGE_WIDTH}px`,
      right: `${side === 'left' ? calcWidth(offset) - IMAGE_WIDTH : 0}px`,
      left: `${side === 'right' ? calcWidth(offset) - IMAGE_WIDTH : 0}px`,
    }}
  />
);

export default CarouselImage;
