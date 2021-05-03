import { graphql, navigate } from 'gatsby';
import React, { useLayoutEffect } from 'react';

import { paths, slugs } from '../../data/config';
import { factions as factionStrings } from '../../data/strings';
import FlagCarousel from '../components/FlagCarousel';
import Layout from '../components/Layout';
import { FactionsResponse } from '../types';
import * as styles from './factions.styles';

export const query = graphql`
  query($height: Int, $width: Int) {
    allMarkdownRemark(filter: { fileAbsolutePath: { regex: "/data/content/factions/" } }) {
      nodes {
        ...faction
      }
    }
  }
`;

const Factions: React.FC<{ data: FactionsResponse }> = ({ data }) => {
  const { frontmatter, html } = data.allMarkdownRemark.nodes[0];

  useLayoutEffect(() => {
    navigate(`${paths.factions}/${frontmatter.slug}`);
  });

  return (
    <Layout
      title={factionStrings.pageTitle('Factions')}
      description={frontmatter.description || factionStrings.pageDescription}
      slug={slugs.factions}
      additionalHead={
        <noscript>
          {`<meta
            httpEquiv="refresh"
            content="0;URL='${paths.factions}/${frontmatter.slug}'"
          />`}
        </noscript>
      }
    >
      <section className="factions">
        <FlagCarousel selected={frontmatter.slug} />
        <article className={styles.faction}>
          <h1>{frontmatter.title}</h1>
          <div dangerouslySetInnerHTML={{ __html: html }} />
        </article>
      </section>
    </Layout>
  );
};

export default Factions;
