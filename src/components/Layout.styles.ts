import { css } from 'linaria';

import { screenSize } from '../_variables.styles';
import bgTextureJpeg from '../../data/img/texture_bg.jpg';
import bgTextureWebP from '../../data/img/texture_bg.webp';
import textureHeadFootJpeg from '../../data/img/texture_headfoot.jpg';
import textureHeadFootWebP from '../../data/img/texture_headfoot.webp';

export const globalResets = css`
  :global() {
    :root {
      --header-footer-bg: #b19776;
      --link-hover: #5c4e3c;
      --blog-meta: #444;
      --main-bg: #f9eeda;
      --white: #fff;
      --body-font-family: 'IM FELL English', georgia, times, serif;
      --headline-font-family: 'IM FELL English SC', georgia, serif;
      --headline-font: normal 3rem var(--headline-font-family);
      --body-font: normal 1.5rem var(--body-font-family);
      --button-font: normal 2.5rem / var(--download-button-height) var(--headline-font-family);
      --hero-font: normal 2.15rem var(--body-font-family);
      --info-font: normal 1.75rem var(--body-font-family);
      --blog-meta-font: italic 1.25rem var(--body-font-family);
      --max-content-width: 65rem;
      --max-body-width: 85rem;
      --max-site-width: 100rem;
      --header-height: 4.5rem;
      --footer-height: 4.5rem;
      --footer-mobile-height: 6.5rem;
      --download-button-height: 6.25rem;
      --download-button-width: 18.125rem;

      font-size: 16px;
    }

    html,
    body {
      border: 0;
      margin: 0;
      padding: 0;
    }

    img {
      object-fit: contain;
    }

    h2 {
      font: var(--headline-font);
    }

    a {
      color: black;
      text-decoration: underline;
    }
    a:hover {
      color: var(--link-hover);

      > * {
        fill: var(--link-hover);
        opacity: 0.5;
      }
    }

    #___gatsby > * {
      display: flex;
      flex-direction: column;
      min-height: 100vh;
    }

    body {
      background: var(--main-bg) url(${bgTextureJpeg});
      font: var(--body-font);
    }

    .webp body {
      background: var(--main-bg) url(${bgTextureWebP}));
    }
  }
`;

export const headFoot = css`
  align-items: center;
  background-color: var(--header-footer-bg);
  background-image: url(${textureHeadFootJpeg});
  box-shadow: 0 0 1.25rem 1rem rgba(142, 142, 142, 0.4);
  box-shadow: 0 0 1.25rem 0.75rem rgba(0, 0, 0, 0.5);
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  z-index: 99;

  .webp & {
    background-image: url(${textureHeadFootWebP});
  }
`;

export const main = css`
  align-items: center;
  display: flex;
  flex: 1;
  flex-direction: column;
  padding: var(--header-height) 1.5rem 0;

  > * {
    max-width: var(--max-content-width);
    width: 100%;
  }

  @media all ${screenSize.MOBILE} {
    html:not(.yesscript) & {
      padding-top: 0;
    }
  }
`;
