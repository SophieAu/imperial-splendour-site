import './factions.scss';

import { graphql } from 'gatsby';
import Img, { FixedObject } from 'gatsby-image';
import React from 'react';

import { slugs } from '../../data/config';
import { factions } from '../../data/strings';
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
        };
      }[];
    };
  };
}

const Factions: React.FC<Props> = ({ data }) => (
  <Layout
    title={factions.pageTitle({ title: 'Factions' })}
    description={factions.pageDescription}
    slug={slugs.factions}
  >
    <section className="factions">
      <Carousel />
      <ul>
        {data.allMarkdownRemark.edges.map(faction => (
          <li key={faction.node.id}>
            <Link to={`/factions/${faction.node.frontmatter.slug}`}>
              <h2>{faction.node.frontmatter.title}</h2>
            </Link>
            <Img fixed={faction.node.frontmatter.flag.childImageSharp.fixed} fadeIn={false} />
          </li>
        ))}
      </ul>
    </section>
  </Layout>
);

export default Factions;
