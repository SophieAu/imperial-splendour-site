import React from 'react';
import Helmet from 'react-helmet';

import { BASE_URL, TWITTER_HANDLE } from '../../data/config';

const webpSupportDetection =
  '!function(e){"use strict";function s(s){if(s){var t=e.documentElement;t.classList?t.classList.add("webp"):t.className+=" webp",window.sessionStorage.setItem("webpSupport",!0)}}!function(e){if(window.sessionStorage&&window.sessionStorage.getItem("webpSupport"))s(!0);else{var t=new Image;t.onload=t.onerror=function(){e(2===t.height)},t.src="data:image/webp;base64,UklGRi4AAABXRUJQVlA4TCEAAAAvAUAAEB8wAiMwAgSSNtse/cXjxyCCmrYNWPwmHRH9jwMA"}}(s)}(document);';

const noscriptDetection = `!function(b){'use strict';b.addEventListener("DOMContentLoaded",function(){var c=b.getElementsByClassName("noscript");Array.from(c).map(function(a){return a.classList.remove("noscript")})})}(document);`;

// JS Support detection (downcompiled with babel)
// (function(document) {
//   'use strict';

//   const testScript = function testScript() {
//     const a = document.getElementsByClassName('noscript');
//     Array.from(a).map(function(b) {
//       return b.classList.remove('noscript');
//     });
//   };

//   document.addEventListener('DOMContentLoaded', testScript);
// })(document);

interface Props {
  title: string;
  description: string;
  slug: string;
  children?: React.ReactNode;
}

const SEO: React.FC<Props> = ({ title, description, slug, children }) => (
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
    <script>{webpSupportDetection}</script>
    <script>{noscriptDetection}</script>
    {children}
  </Helmet>
);

export default SEO;
