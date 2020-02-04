import '../pages/factions.scss';

import { graphql } from 'gatsby';
import React from 'react';

import { slugs } from '../../data/config';
import { factions as factionStrings } from '../../data/strings';
import FlagCarousel from '../components/FlagCarousel';
import Layout from '../components/Layout';
import { FactionsResponse, SlugContext } from '../types';

export const query = graphql`
  query($id: String!) {
    markdownRemark(id: { eq: $id }) {
      ...faction
    }
    allMarkdownRemark(filter: { fileAbsolutePath: { regex: "/data/content/factions/" } }) {
      ...factions
    }
  }
`;

interface Props extends FactionsResponse, SlugContext {}

const Faction: React.FC<Props> = ({ data, pageContext: { slug } }) => {
  const factions = data.allMarkdownRemark.edges;

  const index = factions.findIndex(faction => faction.node.frontmatter.slug === slug);
  if (index === -1) return null;

  const { frontmatter, html } = factions[index].node;

  return (
    <Layout
      title={factionStrings.pageTitle({ title: frontmatter.title })}
      description={frontmatter.title}
      slug={`${slugs.factions}/${slug}`}
    >
      <section className="factions">
        <FlagCarousel selected={index} factions={factions} />
        <article className="faction">
          <h1>{frontmatter.title}</h1>
          <div dangerouslySetInnerHTML={{ __html: html }} />
        </article>
      </section>
    </Layout>
  );
};

export default Faction;
