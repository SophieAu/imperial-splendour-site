import './factions.scss';

import { graphql } from 'gatsby';
import Img, { FixedObject } from 'gatsby-image';
import React, { useState } from 'react';

import { slugs } from '../../data/config';
import { factions as factionStrings } from '../../data/strings';
import Layout from '../components/Layout';
import Link from '../components/Link';
import Carousel from '../components/ui/Carousel';

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

interface Props {
  data: {
    allMarkdownRemark: {
      edges: {
        node: {
          id: number;
          frontmatter: {
            title: string;
            slug: string;
            flag: {
              childImageSharp: {
                fixed: FixedObject;
              };
            };
          };
          html: string;
        };
      }[];
    };
  };
}

const Factions: React.FC<Props> = ({ data }) => {
  const [counter, setCounter] = useState(0);
  const factions = data.allMarkdownRemark.edges;

  return (
    <Layout
      title={factionStrings.pageTitle({ title: 'Factions' })}
      description={factionStrings.pageDescription}
      slug={slugs.factions}
    >
      <section className="factions">
        <Carousel
          img={factions.map(faction => faction.node.frontmatter.flag.childImageSharp.fixed)}
          selected={counter}
          onPress={(counter: number) => setCounter(counter)}
        />
        <h1>{factions[counter].node.frontmatter.title}</h1>
        <div className="text" dangerouslySetInnerHTML={{ __html: factions[counter].node.html }} />
      </section>
    </Layout>
  );
};

export default Factions;
