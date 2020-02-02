import './Carousel.scss';

import Img, { FixedObject } from 'gatsby-image';
import React, { useEffect, useState } from 'react';

import { FactionsFrontmatter } from '../../types';
import Link from '../Link';

const circularModulo = (base: number) => (value: number) =>
  value < 0 ? base + value : value % base;

const FLAG_WIDTH = 132;
const FLAG_HEIGHT = 66;
const calcWidth = (offset: number) => FLAG_WIDTH / Math.abs(offset || 1);
const calcHeight = (offset: number) => FLAG_HEIGHT * (1 - (offset * offset) / 100);

interface Props {
  selected: number;
  factions: {
    node: {
      id: number;
      frontmatter: FactionsFrontmatter;
      html: string;
    };
  }[];
}

const desktopIndices = [-4, -3, -2, -1, 0, 1, 2, 3, 4];
const tabletIndices = [-2, -1, 0, 1, 2];
const mobileIndices = [0];

const Carousel: React.FC<Props> = ({ factions, selected }) => {
  const modulo = circularModulo(factions.length);
  const [indices, setIndices] = useState(mobileIndices);

  useEffect(() => {
    const updateIndices = () =>
      setIndices(
        window.innerWidth >= 992
          ? desktopIndices
          : window.innerWidth >= 768
          ? tabletIndices
          : mobileIndices
      );

    updateIndices();
    window.addEventListener('resize', updateIndices);

    return () => window.removeEventListener('resize', updateIndices);
  }, []);

  const onPress = (number: number) =>
    `/factions/${factions[modulo(selected + number)].node.frontmatter.slug}`;

  const imageProps = (index: number) => ({
    src: factions[modulo(selected + index)].node.frontmatter.flag.childImageSharp.fixed,
    title: factions[modulo(selected + index)].node.frontmatter.title,
    offset: index,
  });

  return (
    <div id="carousel">
      {indices.map(index =>
        index === 0 ? (
          <>
            <Link className="link" to={onPress(-1)}>
              {`<`}
            </Link>
            <Image {...imageProps(0)} side="center" />
            <Link className="link" to={onPress(1)}>
              {`>`}
            </Link>
          </>
        ) : (
          <Image {...imageProps(index)} side={index > 0 ? 'right' : 'left'} />
        )
      )}
    </div>
  );
};

const Image: React.FC<{
  src: FixedObject;
  offset: number;
  title: string;
  side: 'right' | 'left' | 'center';
}> = ({ src, offset, title, side }) => (
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

export default Carousel;
