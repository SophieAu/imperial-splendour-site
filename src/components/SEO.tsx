import React from 'react';
import Helmet from 'react-helmet';

import { BASE_URL, TWITTER_HANDLE } from '../../data/config';

interface Props {
  title: string;
  description: string;
  slug: string;
  children?: React.ReactNode;
  ogImagePath?: string;
}

const SEO: React.FC<Props> = ({ title, description, slug, children, ogImagePath }) => (
  <Helmet
    htmlAttributes={{
      lang: 'en',
      prefix: 'og: http://ogp.me/ns#',
    }}
    title={title}
    meta={[
      {
        name: `description`,
        content: description,
      },
      {
        property: `og:title`,
        content: title,
      },
      {
        property: `og:description`,
        content: description,
      },
      {
        property: `og:type`,
        content: `website`,
      },
      {
        property: `og:image`,
        content: `${BASE_URL}${ogImagePath}`,
      },
      {
        property: `og:url`,
        content: `${BASE_URL}/${slug}`,
      },
      {
        name: `twitter:card`,
        content: `summary`,
      },
      {
        name: `twitter:url`,
        content: `${BASE_URL}/${slug}`,
      },
      {
        name: `twitter:title`,
        content: title,
      },
      {
        name: `twitter:description`,
        content: description,
      },
      {
        name: `twitter:site`,
        content: TWITTER_HANDLE,
      },
    ]}
  >
    {children}
  </Helmet>
);

export default SEO;
