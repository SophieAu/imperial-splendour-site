/** @jsx jsx */
import { jsx } from '@emotion/react';
import { graphql } from 'gatsby';
import React from 'react';
import ReactMarkdown from 'react-markdown';

import { paths, slugs } from '../../data/config';
import { downloadButton, home } from '../../data/strings';
import Image from '../components/Image';
import Layout from '../components/Layout';
import { LinkButton } from '../components/Link';
import { IndexResponse } from '../types';
import { strippedImg } from '../util';
import * as styles from './Index.styles';

export const query = graphql`
  query($id: String!, $maxWidth: Int = 1360) {
    markdownRemark(id: { eq: $id }) {
      frontmatter {
        description
        heroImage {
          ...fluidImage
        }
        heroLogo {
          ...fluidImage
        }
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
  const { description, heroImage, heroLogo, heroText, infoBoxes } = markdownRemark.frontmatter;
  const { src: jpg, srcWebp: webp } = strippedImg(heroImage);
  console.log(heroImage);

  return (
    <Layout title={home.pageTitle} description={description} slug={slugs.home}>
      <section css={styles.heroRoot}>
        <h1 style={{ display: 'none' }}>{home.heroTitle}</h1>
        <div css={styles.body({ jpg, webp })}>
          <Image css={styles.logo} {...strippedImg(heroLogo)} alt={home.heroLogoAlt} />
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
