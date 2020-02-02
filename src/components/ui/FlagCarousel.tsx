import './FlagCarousel.scss';

import React, { useEffect, useState } from 'react';

import { paths } from '../../../data/config';
import { FactionsFrontmatter } from '../../types';
import Link from '../Link';
import CarouselImage from './CarouselImage';

const circularModulo = (base: number) => (value: number) =>
  value < 0 ? base + value : value % base;

const desktopIndices = [-4, -3, -2, -1, 0, 1, 2, 3, 4];
const tabletIndices = [-2, -1, 0, 1, 2];
const mobileIndices = [0];

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
const FlagCarousel: React.FC<Props> = ({ factions, selected }) => {
  const [indices, setIndices] = useState(mobileIndices);
  const modulo = circularModulo(factions.length);

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
    `${paths.factions}/${factions[modulo(selected + number)].node.frontmatter.slug}`;

  return (
    <div id="carousel">
      {indices.map(index => {
        const faction = factions[modulo(selected + index)].node.frontmatter;

        return index === 0 ? (
          <>
            <Link className="link" to={onPress(-1)}>
              {`<`}
            </Link>
            <CarouselImage
              src={faction.flag.childImageSharp.fixed}
              title={faction.title}
              offset={index}
              side="center"
            />
            <Link className="link" to={onPress(1)}>
              {`>`}
            </Link>
          </>
        ) : (
          <CarouselImage
            src={faction.flag.childImageSharp.fixed}
            title={faction.title}
            offset={index}
            side={index > 0 ? 'right' : 'left'}
          />
        );
      })}
    </div>
  );
};

export default FlagCarousel;
