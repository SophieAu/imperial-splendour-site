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
      <div className="hideLeft">
        <Img
          fixed={factions[getModulo(selected - 3)].node.frontmatter.flag.childImageSharp.fixed}
          className="img"
          fadeIn={false}
          placeholderStyle={{ display: 'none' }}
          alt={factions[getModulo(selected - 3)].node.frontmatter.title}
        />
      </div>
      <div className="prevLeftSecond">
        <Img
          fixed={factions[getModulo(selected - 2)].node.frontmatter.flag.childImageSharp.fixed}
          className="img"
          fadeIn={false}
          placeholderStyle={{ display: 'none' }}
          alt={factions[getModulo(selected - 2)].node.frontmatter.title}
        />
      </div>
      <div className="prev">
        <Img
          fixed={factions[getModulo(selected - 1)].node.frontmatter.flag.childImageSharp.fixed}
          className="img"
          fadeIn={false}
          placeholderStyle={{ display: 'none' }}
          alt={factions[getModulo(selected - 1)].node.frontmatter.title}
        />
      </div>
      <Link className="link prev" to={onPress(getModulo(selected - 1))}>
        Prev
      </Link>
      <div className="selected">
        <Img
          fixed={factions[getModulo(selected)].node.frontmatter.flag.childImageSharp.fixed}
          className="img"
          fadeIn={false}
          placeholderStyle={{ display: 'none' }}
          alt={factions[getModulo(selected)].node.frontmatter.title}
        />
      </div>
      <Link className="link next" to={onPress(getModulo(selected + 1))}>
        Next
      </Link>
      <div className="next">
        <Img
          fixed={factions[getModulo(selected + 1)].node.frontmatter.flag.childImageSharp.fixed}
          className="img"
          fadeIn={false}
          placeholderStyle={{ display: 'none' }}
          alt={factions[getModulo(selected + 1)].node.frontmatter.title}
        />
      </div>
      <div className="nextRightSecond">
        <Img
          fixed={factions[getModulo(selected + 2)].node.frontmatter.flag.childImageSharp.fixed}
          className="img"
          fadeIn={false}
          placeholderStyle={{ display: 'none' }}
          alt={factions[getModulo(selected + 2)].node.frontmatter.title}
        />
      </div>
      <div className="hideRight">
        <Img
          fixed={factions[getModulo(selected + 3)].node.frontmatter.flag.childImageSharp.fixed}
          className="img"
          fadeIn={false}
          placeholderStyle={{ display: 'none' }}
          alt={factions[getModulo(selected + 3)].node.frontmatter.title}
        />
      </div>
    </div>
  );
};

export default Carousel;
