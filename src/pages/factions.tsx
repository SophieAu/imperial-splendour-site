import './factions.scss';

import { graphql, navigate } from 'gatsby';
import React, { useLayoutEffect } from 'react';

import { paths, slugs } from '../../data/config';
import { factions as factionStrings } from '../../data/strings';
import FlagCarousel from '../components/FlagCarousel';
import Layout from '../components/Layout';
import { FactionsResponse } from '../types';

export const query = graphql`
  query {
    allMarkdownRemark(filter: { fileAbsolutePath: { regex: "/data/content/factions/" } }) {
      ...factions
    }
  }
`;

const Factions: React.FC<FactionsResponse> = ({ data }) => {
  const factions = data.allMarkdownRemark.edges;
  const initialIndex = 0;
  const initalFaction = factions[initialIndex].node;

  useLayoutEffect(() => {
    navigate(`${paths.factions}/${initalFaction.frontmatter.slug}`);
  });

  return (
    <Layout
      title={factionStrings.pageTitle({ title: 'Factions' })}
      description={factionStrings.pageDescription}
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
        <article className="faction">
          <h1>{initalFaction.frontmatter.title}</h1>
          <div dangerouslySetInnerHTML={{ __html: initalFaction.html }} />
        </article>
      </section>
    </Layout>
  );
};

export default Factions;
