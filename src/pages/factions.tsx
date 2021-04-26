import { graphql, navigate } from 'gatsby';
import React, { useLayoutEffect } from 'react';

import { paths, slugs } from '../../data/config';
import { factions as factionStrings } from '../../data/strings';
import FlagCarousel from '../components/FlagCarousel';
import Layout from '../components/Layout';
import { FactionsResponse } from '../types';
import * as styles from './factions.styles';

export const query = graphql`
  query($height: Int = 66, $width: Int) {
    allMarkdownRemark(filter: { fileAbsolutePath: { regex: "/data/content/factions/" } }) {
      nodes {
        ...faction
      }
    }
  }
`;

const Factions: React.FC<FactionsResponse> = ({ data }) => {
  const factions = data.allMarkdownRemark.nodes;
  const initialIndex = 0;
  const initalFaction = factions[initialIndex];

  useLayoutEffect(() => {
    navigate(`${paths.factions}/${initalFaction.frontmatter.slug}`);
  });

  return (
    <Layout
      title={factionStrings.pageTitle('Factions')}
      description={initalFaction.frontmatter.description || factionStrings.pageDescription}
      slug={slugs.factions}
      additionalHead={
        <noscript>
          {`<meta
            httpEquiv="refresh"
            content="0;URL='${paths.factions}/${initalFaction.frontmatter.slug}'"
          />`}
        </noscript>
      }
    >
      <section className="factions">
        <FlagCarousel selected={initialIndex} factions={factions} />
        <article className={styles.faction}>
          <h1>{initalFaction.frontmatter.title}</h1>
          <div dangerouslySetInnerHTML={{ __html: initalFaction.html }} />
        </article>
      </section>
    </Layout>
  );
};

export default Factions;
