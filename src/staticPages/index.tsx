import { graphql } from 'gatsby';
import React from 'react';

import { paths, slugs } from '../../data/config';
import { downloadButton, home } from '../../data/strings';
import Image from '../components/Image';
import Layout from '../components/Layout';
import { LinkButton } from '../components/Link';
import { IndexResponse } from '../types';
import { strippedImg } from '../util';
import * as styles from './Index.styles';

export const query = graphql`
  query($id: String!, $maxWidth: Int = 1360, $width: Int, $height: Int) {
    markdownRemark(id: { eq: $id }) {
      frontmatter {
        description
        heroImage {
          ...fixedImage
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

  return (
    <Layout title={home.pageTitle} description={description} slug={slugs.home}>
      <section className={styles.heroRoot}>
        <h1 style={{ display: 'none' }}>{home.heroTitle}</h1>
        <div className={styles.body}>
          <Image className={styles.logo} {...strippedImg(heroLogo)} alt={home.heroLogoAlt} />
          <p className={styles.text}>{heroText}</p>
        </div>
        <LinkButton to={paths.downloadIndex} className={styles.button}>
          {downloadButton.buttonText}
        </LinkButton>
      </section>
      <section className={styles.infoBoxRoot}>
        {infoBoxes.map(({ text, image, imgAlt }, i) => (
          <React.Fragment key={i}>
            <Image {...strippedImg(image)} data-pos={i % 2} className={styles.image} alt={imgAlt} />
            <p className={styles.infoText}>{text}</p>
          </React.Fragment>
        ))}
      </section>
    </Layout>
  );
};

export default Home;
