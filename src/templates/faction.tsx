import { graphql } from 'gatsby';
import React from 'react';

import { slugs } from '../../data/config';
import { factions as factionStrings } from '../../data/strings';
import FlagCarousel from '../components/FlagCarousel';
import Layout from '../components/Layout';
import * as styles from '../pages/factions.styles';
import { FactionsResponse, SlugContext } from '../types';

export const query = graphql`
  query($id: String!, $height: Int = 66, $width: Int) {
    markdownRemark(id: { eq: $id }) {
      ...faction
    }
    allMarkdownRemark(filter: { fileAbsolutePath: { regex: "/data/content/factions/" } }) {
      nodes {
        ...faction
      }
    }
  }
`;

interface Props extends FactionsResponse, SlugContext {}

const Faction: React.FC<Props> = ({ data, pageContext: { slug } }) => {
  const factions = data.allMarkdownRemark.nodes;

  const index = factions.findIndex(faction => faction.frontmatter.slug === slug);
  if (index === -1) return null;

  const { frontmatter, html } = factions[index];

  return (
    <Layout
      title={factionStrings.pageTitle(frontmatter.title)}
      description={frontmatter.description || frontmatter.title}
      slug={`${slugs.factions}/${slug}`}
    >
      <section className="factions">
        <FlagCarousel selected={index} factions={factions} />
        <article className={styles.faction}>
          <h1>{frontmatter.title}</h1>
          <div dangerouslySetInnerHTML={{ __html: html }} />
        </article>
      </section>
    </Layout>
  );
};

export default Faction;
