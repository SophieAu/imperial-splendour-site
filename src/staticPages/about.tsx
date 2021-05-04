import { graphql } from 'gatsby';
import React from 'react';

import { imgAlt, slugs } from '../../data/config';
import { buildPageTitle } from '../../data/strings';
import Image from '../components/Image';
import Layout from '../components/Layout';
import { AboutResponse } from '../types';
import * as styles from './about.styles';

export const query = graphql`
  query($id: String!, $width: Int = 66, $height: Int = 88) {
    markdownRemark(id: { eq: $id }) {
      frontmatter {
        title
        description
        contributorsTitle
        contributors {
          avatar {
            ...fixedImage
          }
          name
        }
      }
      html
    }
  }
`;

const About: React.FC<AboutResponse> = ({ data: { markdownRemark } }) => (
  <Layout
    title={buildPageTitle(markdownRemark.frontmatter.title)}
    description={markdownRemark.frontmatter.description}
    slug={slugs.about}
  >
    <div className={styles.aboutText} dangerouslySetInnerHTML={{ __html: markdownRemark.html }} />
    <section className={styles.contributors}>
      <h2>{markdownRemark.frontmatter.contributorsTitle}</h2>
      <ul className={styles.avatars}>
        {markdownRemark.frontmatter.contributors.map(({ avatar, name }) => (
          <li key={name} className={styles.contributor}>
            <Image alt={imgAlt.avatar(name)} {...avatar.childImageSharp.fixed} />
            <p>{name}</p>
          </li>
        ))}
      </ul>
    </section>
  </Layout>
);

export default About;
