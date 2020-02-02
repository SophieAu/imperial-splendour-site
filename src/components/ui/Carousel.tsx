import './Carousel.scss';

import Img, { FixedObject } from 'gatsby-image';
import React from 'react';

import { FactionsFrontmatter } from '../../types';
import Link from '../Link';

const getBetterModulo = (base: number) => (value: number) =>
  value < 0 ? base + value : value % base;

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

const preSelected = [4, 3, 2, 1];

const postSelected = [1, 2, 3, 4];

const Carousel: React.FC<Props> = ({ factions, selected }) => {
  const getModulo = getBetterModulo(factions.length);

  const onPress = (number: number) => `/factions/${factions[number].node.frontmatter.slug}`;

  return (
    <div id="carousel">
      {preSelected.map(index => (
        <Image
          key={factions[getModulo(selected - index)].node.id}
          src={factions[getModulo(selected - index)].node.frontmatter.flag.childImageSharp.fixed}
          title={factions[getModulo(selected - index)].node.frontmatter.title}
          offset={-index}
          side="left"
        />
      ))}
      <Link className="link prev" to={onPress(getModulo(selected - 1))}>
        {`<`}
      </Link>
      <Image
        src={factions[getModulo(selected)].node.frontmatter.flag.childImageSharp.fixed}
        title={factions[getModulo(selected)].node.frontmatter.title}
        offset={0}
      />
      <Link className="link next" to={onPress(getModulo(selected + 1))}>
        {`>`}
      </Link>
      {postSelected.map(index => (
        <Image
          key={factions[getModulo(selected + index)].node.id}
          src={factions[getModulo(selected + index)].node.frontmatter.flag.childImageSharp.fixed}
          title={factions[getModulo(selected + index)].node.frontmatter.title}
          offset={index}
          side="right"
        />
      ))}
    </div>
  );
};

const Image: React.FC<{
  src: FixedObject;
  offset: number;
  title: string;
  side?: 'right' | 'left';
}> = ({ src, offset, title, side }) => (
  <Img
    fixed={src}
    style={{
      height: `${(66 * (100 - offset * offset)) / 100}px`,
      width: `${132 / Math.abs(offset || 1)}px`,
      zIndex: -Math.abs(offset),
      overflow: 'unset',
    }}
    fadeIn={false}
    placeholderStyle={{ display: 'none', overflow: 'auto' }}
    alt={title}
    imgStyle={{
      objectFit: 'cover',
      objectPosition: `${side || 'center'} center`,
      width: '132px',
      right: `${side === 'left' ? 132 / Math.abs(offset || 1) - 132 : 0}px`,
      left: `${side === 'right' ? 132 / Math.abs(offset || 1) - 132 : 0}px`,
    }}
  />
);

export default Carousel;
