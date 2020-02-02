import './Carousel.scss';

import Img, { FixedObject } from 'gatsby-image';
import React from 'react';

import Link from '../Link';

type Faction = {
  node: {
    id: number;
    frontmatter: {
      title: string;
      slug: string;
      flag: {
        childImageSharp: {
          fixed: FixedObject;
        };
      };
    };
    html: string;
  };
};

const getBetterModulo = (base: number) => (value: number) =>
  value < 0 ? base + value : value % base;

interface Props {
  selected: number;
  factions: Faction[];
}

const Carousel: React.FC<Props> = ({ factions, selected }) => {
  const getModulo = getBetterModulo(factions.length);

  const onPress = (number: number) => `/factions/${factions[number].node.frontmatter.slug}`;

  return (
    <div id="carousel">
      <Image
        src={factions[getModulo(selected - 4)].node.frontmatter.flag.childImageSharp.fixed}
        title={factions[getModulo(selected - 4)].node.frontmatter.title}
        offset={-4}
      />
      <Image
        src={factions[getModulo(selected - 3)].node.frontmatter.flag.childImageSharp.fixed}
        title={factions[getModulo(selected - 3)].node.frontmatter.title}
        offset={-3}
      />
      <Image
        src={factions[getModulo(selected - 2)].node.frontmatter.flag.childImageSharp.fixed}
        title={factions[getModulo(selected - 2)].node.frontmatter.title}
        offset={-2}
      />
      <Image
        src={factions[getModulo(selected - 1)].node.frontmatter.flag.childImageSharp.fixed}
        title={factions[getModulo(selected - 1)].node.frontmatter.title}
        offset={-1}
      />
      <Link className="link prev" to={onPress(getModulo(selected - 1))}>
        Prev
      </Link>
      <Image
        src={factions[getModulo(selected)].node.frontmatter.flag.childImageSharp.fixed}
        title={factions[getModulo(selected)].node.frontmatter.title}
        offset={0}
      />
      <Link className="link next" to={onPress(getModulo(selected + 1))}>
        Next
      </Link>
      <Image
        src={factions[getModulo(selected + 1)].node.frontmatter.flag.childImageSharp.fixed}
        title={factions[getModulo(selected + 1)].node.frontmatter.title}
        offset={1}
      />
      <Image
        src={factions[getModulo(selected + 2)].node.frontmatter.flag.childImageSharp.fixed}
        title={factions[getModulo(selected + 2)].node.frontmatter.title}
        offset={2}
      />
      <Image
        src={factions[getModulo(selected + 3)].node.frontmatter.flag.childImageSharp.fixed}
        title={factions[getModulo(selected + 3)].node.frontmatter.title}
        offset={3}
      />
      <Image
        src={factions[getModulo(selected + 4)].node.frontmatter.flag.childImageSharp.fixed}
        offset={4}
        title={factions[getModulo(selected + 4)].node.frontmatter.title}
      />
    </div>
  );
};

const Image: React.FC<{ src: FixedObject; offset: number; title: string }> = ({
  src,
  offset,
  title,
}) => (
  <Img
    fixed={src}
    style={{
      height: `${(66 * (100 - offset * offset)) / 100}px`,
      width: `${132 / Math.abs(offset || 1)}px`,
    }}
    fadeIn={false}
    placeholderStyle={{ display: 'none' }}
    alt={title}
    imgStyle={{ objectFit: 'cover', objectPosition: `${offset > 0 ? 'right' : 'left'} center` }}
  />
);

export default Carousel;
