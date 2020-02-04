import './FlagCarousel.scss';

import { graphql, useStaticQuery } from 'gatsby';
import Img from 'gatsby-image';
import React, { useEffect, useState } from 'react';

import { paths } from '../../data/config';
import { factions as factionStrings } from '../../data/strings';
import { SingleFaction } from '../types';
import CarouselImage from './CarouselImage';
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

const circularModulo = (base: number) => (value: number) =>
  value < 0 ? base + value : value % base;

const desktopIndices = [-4, -3, -2, -1, 0, 1, 2, 3, 4];
const tabletIndices = [-2, -1, 0, 1, 2];
const mobileIndices = [0];

interface Props {
  selected: number;
  factions: SingleFaction[];
}

const FlagCarousel: React.FC<Props> = ({ factions, selected }) => {
  const [indices, setIndices] = useState(mobileIndices);
  const modulo = circularModulo(factions.length);

  const buttons = useStaticQuery(query);

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
            <ImageLink className="link" to={onPress(-1)} title={factionStrings.previousButton}>
              <Img fixed={buttons.buttonLeft.childImageSharp.fixed} />
            </ImageLink>
            <CarouselImage
              src={faction.flag.childImageSharp.fixed}
              title={faction.title}
              offset={index}
              side="center"
            />
            <ImageLink className="link" to={onPress(1)} title={factionStrings.nextButton}>
              <Img fixed={buttons.buttonRight.childImageSharp.fixed} />
            </ImageLink>
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
