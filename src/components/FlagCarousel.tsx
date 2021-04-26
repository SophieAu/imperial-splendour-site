import { graphql, useStaticQuery } from 'gatsby';
import React, { useEffect, useState } from 'react';

import { paths } from '../../data/config';
import { factions as factionStrings } from '../../data/strings';
import { SingleFaction } from '../types';
import { circularModulo } from '../util';
import CarouselImage from './CarouselImage';
import * as styles from './FlagCarousel.styles';
import Img from './GatsbyImage';
import { ImageLink } from './Link';

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
  const frontmatter = (number: number) => factions[modulo(selected + number)].frontmatter;
  const onPress = (number: number) => `${paths.factions}/${frontmatter(number).slug}`;

  const wrapper = (index: number) => (children: React.ReactNode) =>
    index === 0 ? (
      <React.Fragment key={index}>
        <ImageLink className={styles.link} to={onPress(-1)} title={factionStrings.previousButton}>
          <Img fixed={buttons.buttonLeft.childImageSharp.fixed} />
        </ImageLink>
        {children}
        <ImageLink className={styles.link} to={onPress(1)} title={factionStrings.nextButton}>
          <Img fixed={buttons.buttonRight.childImageSharp.fixed} />
        </ImageLink>
      </React.Fragment>
    ) : (
      <React.Fragment key={index}>{children}</React.Fragment>
    );

  return (
    <div className={styles.carousel}>
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

export default FlagCarousel;
