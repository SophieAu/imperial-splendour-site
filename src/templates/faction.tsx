import './post.scss';

import { graphql } from 'gatsby';
import React from 'react';

import { slugs } from '../../data/config';
import { factions as factionStrings } from '../../data/strings';
import Layout from '../components/Layout';
import FlagCarousel from '../components/ui/FlagCarousel';
import { FactionsResponse, SlugContext } from '../types';

export const query = graphql`
  query($id: String!) {
    markdownRemark(id: { eq: $id }) {
      id
      html
      frontmatter {
        title
      }
    }
    allMarkdownRemark(filter: { fileAbsolutePath: { regex: "/data/content/factions/" } }) {
      edges {
        node {
          id
          frontmatter {
            title
            slug
            flag {
              childImageSharp {
                fixed(height: 66, quality: 90) {
                  ...GatsbyImageSharpFixed_withWebp
                }
              }
            }
          }
          html
        }
      }
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
      <FlagCarousel selected={index} factions={factions} />
      <article className="blog-post">
        <h1>{frontmatter.title}</h1>
        <div className="text" dangerouslySetInnerHTML={{ __html: html }} />
      </article>
    </Layout>
  );
};

export default Faction;
