import Img, { FixedObject, FluidObject } from 'gatsby-image';
import React from 'react';

interface Props {
  className?: string;
  imgStyle?: object;
  fluid?: FluidObject | FluidObject[];
  fixed?: FixedObject | FixedObject[];
  style?: object | undefined;
  placeholderStyle?: object | undefined;
  fadeIn?: boolean;
  alt?: string;
}

const GatsbyImage: React.FC<Props> = props => {
  const { className, imgStyle, fluid, fixed, style, fadeIn, alt, placeholderStyle } = props;

  return (
    <Img
      alt={alt}
      className={className}
      style={style}
      fluid={fluid ? fluid : undefined}
      fixed={fixed ? fixed : undefined}
      fadeIn={fadeIn ?? false}
      placeholderStyle={placeholderStyle}
      imgStyle={{ objectFit: 'contain', ...imgStyle }}
    />
  );
};

export default GatsbyImage;
