/** @jsx jsx */
import { jsx } from '@emotion/react';
import { graphql, useStaticQuery } from 'gatsby';
import React, { useEffect, useState } from 'react';

import { paths } from '../../data/config';
import { factions as strings } from '../../data/strings';
import { FactionsResponse } from '../types';
import { circularModulo, strippedImg } from '../util';
import ButtonLeft from './ButtonLeft';
import ButtonRight from './ButtonRight';
import * as styles from './FlagCarousel.styles';
import Image from './Image';

const desktop = [-4, -3, -2, -1, 0, 1, 2, 3, 4];
const tablet = [-2, -1, 0, 1, 2];
const mobile = [0];

const query = graphql`
  query($height: Int, $width: Int) {
    allMarkdownRemark(filter: { fileAbsolutePath: { regex: "/data/content/factions/" } }) {
      nodes {
        ...faction
      }
    }
  }
`;

interface Props {
  selected: string;
}

const FlagCarousel: React.FC<Props> = ({ selected }) => {
  const [indices, setIndices] = useState(mobile);

  const factions = useStaticQuery<FactionsResponse>(query).allMarkdownRemark.nodes;
  const selectedIndex = factions.findIndex(faction => faction.frontmatter.slug === selected);

  useEffect(() => {
    const updateIndices = () =>
      setIndices(window.innerWidth >= 992 ? desktop : window.innerWidth >= 768 ? tablet : mobile);

    updateIndices();
    window.addEventListener('resize', updateIndices);

    return () => window.removeEventListener('resize', updateIndices);
  }, []);

  const modulo = circularModulo(factions.length);
  const frontmatter = (offset: number) => factions[modulo(selectedIndex + offset)].frontmatter;
  const onPress = (offset: number) => `${paths.factions}/${frontmatter(offset).slug}`;

  const wrapper = (index: number) => (children: React.ReactNode) =>
    index === 0 ? (
      <React.Fragment key={index}>
        <ButtonLeft css={styles.link} target={onPress(-1)} title={strings.previousButton} />
        {children}
        <ButtonRight css={styles.link} target={onPress(1)} title={strings.nextButton} />
      </React.Fragment>
    ) : (
      <React.Fragment key={index}>{children}</React.Fragment>
    );

  return (
    <div css={styles.carousel}>
      {indices.map(index =>
        wrapper(index)(
          <Image
            {...strippedImg(frontmatter(index).flag)}
            alt={frontmatter(index).title}
            css={styles.flag(index == 0 ? 'center' : index > 0 ? 'right' : 'left', index)}
          />
        )
      )}
    </div>
  );
};

export default FlagCarousel;
