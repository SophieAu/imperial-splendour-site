import { graphql } from 'gatsby';
import React from 'react';

import { slugs } from '../../data/config';
import { buildPageTitle } from '../../data/strings';
import FlagCarousel from '../components/FlagCarousel';
import Layout from '../components/Layout';
import * as styles from '../staticPages/factions.styles';
import { FactionResponse, SlugContext } from '../types';

export const query = graphql`
  query($id: String!, $height: Int = 66, $width: Int) {
    markdownRemark(id: { eq: $id }) {
      ...faction
    }
  }
`;

interface Props extends FactionResponse, SlugContext {}

const Faction: React.FC<Props> = ({ data: { markdownRemark } }) => {
  const { frontmatter, html } = markdownRemark;

  return (
    <Layout
      title={buildPageTitle(frontmatter.title)}
      description={frontmatter.description || frontmatter.title}
      slug={`${slugs.factions}/${frontmatter.slug}`}
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

export default Faction;
