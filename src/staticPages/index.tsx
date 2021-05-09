/** @jsx jsx */
import { jsx } from '@emotion/react';
import { graphql } from 'gatsby';
import React from 'react';
import ReactMarkdown from 'react-markdown';

import { paths, slugs } from '../../data/config';
import { buildPageTitle, downloadButton } from '../../data/strings';
import Image from '../components/Image';
import Layout from '../components/Layout';
import { LinkButton } from '../components/Link';
import { IndexResponse } from '../types';
import { strippedImg } from '../util';
import * as styles from './index.styles';

export const query = graphql`
  query($id: String!, $maxWidth: Int = 1360) {
    markdownRemark(id: { eq: $id }) {
      frontmatter {
        title
        description
        heroImage {
          ...fluidImage
        }
        heroLogo {
          ...fluidImage
        }
        heroLogoAlt
        heroText
        infoBoxes {
          text
          image {
            ...fluidImage
          }
          imgAlt
        }
      }
    }
  }
`;

/*
    global: sanityGlobals {
      siteTitle
    }
*/

const Home: React.FC<IndexResponse> = ({ data: { markdownRemark } }) => {
  const { title, description, infoBoxes } = markdownRemark.frontmatter;
  const { heroImage, heroLogo, heroLogoAlt, heroText } = markdownRemark.frontmatter;
  const { src: jpg, srcWebp: webp } = strippedImg(heroImage);

  return (
    <Layout title={buildPageTitle(title)} description={description} slug={slugs.home}>
      <section css={styles.heroRoot}>
        <h1 style={{ display: 'none' }}>{title}</h1>
        <div css={styles.body({ jpg, webp })}>
          <Image css={styles.logo} {...strippedImg(heroLogo)} alt={heroLogoAlt} />
          <div css={styles.text}>
            <ReactMarkdown>{heroText}</ReactMarkdown>
          </div>
        </div>
        <LinkButton to={paths.downloadIndex} css={styles.button}>
          {downloadButton.buttonText}
        </LinkButton>
      </section>
      <section css={styles.infoBoxRoot}>
        {infoBoxes.map(({ text, image, imgAlt }, i) => (
          <React.Fragment key={i}>
            <Image {...strippedImg(image)} data-pos={i % 2} css={styles.image} alt={imgAlt} />
            <div css={styles.infoText}>
              <ReactMarkdown>{text}</ReactMarkdown>
            </div>
          </React.Fragment>
        ))}
      </section>
    </Layout>
  );
};

export default Home;
