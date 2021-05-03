import React from 'react';

import buttonRightPng from '../../data/img/button_right.png';
import buttonRightWebP from '../../data/img/button_right.webp';
import { ImageLink } from './Link';

interface Props {
  target: string;
  title: string;
  className?: string;
}

const ButtonRight: React.FC<Props> = ({ target, title, className }) => (
  <ImageLink className={className} to={target} title={title}>
    <picture>
      <source src={buttonRightWebP} type="image/webp" />
      <img src={buttonRightPng} alt={title} />
    </picture>
  </ImageLink>
);

export default ButtonRight;
