/** @jsx jsx */
import { jsx } from '@emotion/react';
import { FixedObject } from 'gatsby-image';
import React from 'react';

import { imgStyle } from './CarouselImage.styles';
import Image from './Image';

interface Props {
  src: FixedObject;
  offset: number;
  title: string;
  side: 'right' | 'left' | 'center';
}

const CarouselImage: React.FC<Props> = ({ src, offset, title, side }) => (
  <Image
    src={src.src}
    srcWebp={src.srcWebp || ''}
    srcSetWebp={''}
    srcSet={''}
    alt={title}
    css={imgStyle(side, offset)}
  />
);

export default CarouselImage;
