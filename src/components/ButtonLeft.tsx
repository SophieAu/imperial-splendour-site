/** @jsx jsx */
import { jsx } from '@emotion/react';
import React from 'react';

import buttonLeftPng from '../../data/img/button_left.png';
import buttonLeftWebP from '../../data/img/button_left.webp';
import { ImageLink } from './Link';

interface Props {
  target: string;
  title: string;
  className?: string;
}

const ButtonLeft: React.FC<Props> = ({ target, title, className }) => (
  <ImageLink className={className} to={target} title={title}>
    <picture>
      <source src={buttonLeftWebP} type="image/webp" />
      <img src={buttonLeftPng} alt={title} />
    </picture>
  </ImageLink>
);

export default ButtonLeft;
