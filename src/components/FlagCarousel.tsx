import './FlagCarousel.scss';

import { graphql, useStaticQuery } from 'gatsby';
import Img, { FixedObject } from 'gatsby-image';
import React, { useEffect, useState } from 'react';

import { paths } from '../../data/config';
import { factions as factionStrings } from '../../data/strings';
import { SingleFaction } from '../types';
import { circularModulo } from '../util';
import ImageLink from './ImageLink';

const query = graphql`
  query {
    buttonLeft: file(relativePath: { eq: "factions/button_left.png" }) {
      ...carouselButtonImage
    }
    buttonRight: file(relativePath: { eq: "factions/button_right.png" }) {
      ...carouselButtonImage
    }
  }
`;

const desktop = [-4, -3, -2, -1, 0, 1, 2, 3, 4];
const tablet = [-2, -1, 0, 1, 2];
const mobile = [0];

interface Props {
  selected: number;
  factions: SingleFaction[];
}

const FlagCarousel: React.FC<Props> = ({ factions, selected }) => {
  const [indices, setIndices] = useState(mobile);
  const buttons = useStaticQuery(query);

  useEffect(() => {
    const updateIndices = () =>
      setIndices(window.innerWidth >= 992 ? desktop : window.innerWidth >= 768 ? tablet : mobile);

    updateIndices();
    window.addEventListener('resize', updateIndices);

    return () => window.removeEventListener('resize', updateIndices);
  }, []);

  const modulo = circularModulo(factions.length);
  const frontmatter = (number: number) => factions[modulo(selected + number)].node.frontmatter;
  const onPress = (number: number) => `${paths.factions}/${frontmatter(number).slug}`;

  const wrapper = (index: number) => (children: React.ReactNode) =>
    index === 0 ? (
      <>
        <ImageLink className="link" to={onPress(-1)} title={factionStrings.previousButton}>
          <Img fixed={buttons.buttonLeft.childImageSharp.fixed} />
        </ImageLink>
        {children}
        <ImageLink className="link" to={onPress(1)} title={factionStrings.nextButton}>
          <Img fixed={buttons.buttonRight.childImageSharp.fixed} />
        </ImageLink>
      </>
    ) : (
      { children }
    );

  return (
    <div id="carousel">
      {indices.map(index =>
        wrapper(index)(
          <CarouselImage
            src={frontmatter(index).flag.childImageSharp.fixed}
            title={frontmatter(index).title}
            offset={index}
            side={index > 0 ? 'right' : 'left'}
          />
        )
      )}
    </div>
  );
};

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

export default FlagCarousel;
