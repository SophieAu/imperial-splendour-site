import './post.scss';

import { graphql } from 'gatsby';
import { FixedObject } from 'gatsby-image';
import React from 'react';

import { factions as factionStrings } from '../../data/strings';
import Layout from '../components/Layout';
import Carousel from '../components/ui/Carousel';

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

interface Props {
  pageContext: {
    slug: string;
  };
  data: {
    markdownRemark: {
      frontmatter: {
        title: string;
      };
      html: string;
    };
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

const Faction: React.FC<Props> = ({ data: { allMarkdownRemark, markdownRemark }, pageContext }) => {
  const factions = allMarkdownRemark.edges;
  const { html, frontmatter } = markdownRemark;

  const current = factions.find(faction => faction.node.frontmatter.slug === pageContext.slug);
  if (!current) return null;
  const index = factions.indexOf(current);
  if (index === -1) return null;

  const willPress = (number: number) => `/factions/${factions[number].node.frontmatter.slug}`;

  return (
    <Layout
      title={factionStrings.pageTitle({ title: frontmatter.title })}
      description={frontmatter.title}
      slug={pageContext.slug}
    >
      <Carousel
        img={factions.map(faction => faction.node.frontmatter.flag.childImageSharp.fixed)}
        selected={index}
        onPress={willPress}
      />
      <article className="blog-post">
        <h1>{frontmatter.title}</h1>
        <div className="text" dangerouslySetInnerHTML={{ __html: html }} />
      </article>
    </Layout>
  );
};

export default Faction;
