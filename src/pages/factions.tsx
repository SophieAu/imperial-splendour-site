import './factions.scss';

import { graphql, navigate } from 'gatsby';
import React, { useLayoutEffect } from 'react';

import { slugs } from '../../data/config';
import { factions as factionStrings } from '../../data/strings';
import Layout from '../components/Layout';
import Carousel from '../components/ui/Carousel';
import { FactionsResponse } from '../types';

export const query = graphql`
  query {
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

const Factions: React.FC<FactionsResponse> = ({ data }) => {
  const factions = data.allMarkdownRemark.edges;
  const initialIndex = 0;
  const initalFaction = factions[initialIndex].node;

  useLayoutEffect(() => {
    navigate(`/factions/${initalFaction.frontmatter.slug}`);
  });
  return (
    <Layout
      title={factionStrings.pageTitle({ title: 'Factions' })}
      description={factionStrings.pageDescription}
      slug={slugs.factions}
    >
      <section className="factions">
        <Carousel selected={initialIndex} factions={factions} />
        <h1>{initalFaction.frontmatter.title}</h1>
        <div className="text" dangerouslySetInnerHTML={{ __html: initalFaction.html }} />
        {/* <ul>
          {factions.map(faction => (
            <li key={faction.node.id}>
              <Link to={`/factions/${faction.node.frontmatter.slug}`}>
                <h2>{faction.node.frontmatter.title}</h2>
              </Link>
              <Img fixed={faction.node.frontmatter.flag.childImageSharp.fixed} fadeIn={false} />
            </li>
          ))}
        </ul> */}
      </section>
    </Layout>
  );
};

export default Factions;
