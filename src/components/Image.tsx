import React from 'react';

import { Image as ImageType } from '../types';

interface Props extends ImageType {
  alt: string;
  className: string;
}

const Image: React.FC<Props> = props => (
  <picture className={props.className}>
    <source srcSet={props.srcSet} />
    <source srcSet={props.srcSetWebp} type="image/webp" />
    <source srcSet={props.srcWebp} type="image/webp" />
    <img src={props.src} alt={props.alt} />
  </picture>
);

export default Image;
