import { graphql, useStaticQuery } from 'gatsby';
import { cx } from 'linaria';
import React from 'react';

import { hardCodedStrings, imgAlt, socialMediaImages } from '../../data/config';
import { ClassNameProp, FooterResponse } from '../types';
import * as styles from './Footer.styles';
import { ImageLink } from './Link';
import MarkdownWithLink from './MarkdownWithLink';

const query = graphql`
  query {
    allMarkdownRemark(filter: { fileAbsolutePath: { regex: "/data/content/general/footer.md/" } }) {
      nodes {
        frontmatter {
          siteBuilders {
            name
            link
          }
          socialMedia {
            platform
            link
          }
        }
      }
    }
  }
`;

const Footer: React.FC<ClassNameProp> = ({ className }) => {
  const data = useStaticQuery<FooterResponse>(query).allMarkdownRemark.nodes[0].frontmatter;

  return (
    <footer className={cx(className, styles.root)}>
      <MarkdownWithLink className={styles.credits}>
        {hardCodedStrings.creditsCopyright(data.siteBuilders)}
      </MarkdownWithLink>
      <ul className={styles.socialMedia}>
        {data.socialMedia.map(({ platform, link }) => (
          <li key={link}>
            <ImageLink to={link} title={imgAlt.socialMedia(platform)}>
              <img
                src={socialMediaImages.find(({ platform: p }) => p === platform)?.image}
                alt={imgAlt.socialMedia(platform)}
              />
            </ImageLink>
          </li>
        ))}
      </ul>
    </footer>
  );
};

export default Footer;
