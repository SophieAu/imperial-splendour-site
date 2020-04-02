import { css } from 'linaria';

import textureJpeg from '../../data/img/texture_bg.jpg';
import textureWebp from '../../data/img/texture_bg.webp';

export const root = css`
  --logo-height: 3.5rem;
  --button-padding: calc((4.5rem - 1.25rem) / 2);

  font: var(--headline-font);
  font-size: 2.5rem;
  height: var(--header-height);
  padding: 0 2.5rem 0 1rem;
  position: fixed;
  top: 0;
  width: calc(100vw - 1rem - 2.5rem);

  a {
    text-decoration: none;
  }

  html:not(.yesscript) & {
    align-items: stretch;
    flex-direction: column;
    height: auto;
    padding: 1rem;
    position: relative;
    width: auto;
  }
`;

export const homeLogo = css`
  flex: 1;
  height: var(--logo-height);
  line-height: 0;
  width: calc(var(--logo-height) * 300 / 92);
`;

export const menu = css`
  .webp & {
    background: var(--main-bg) url(${textureWebp});
  }

  ul {
    display: flex;
    justify-content: flex-end;
    list-style-type: none;
    margin: 0;
    padding: 0;
    flex-direction: column;

    li {
      line-height: var(--header-height);
      margin: 0;
    }
  }

  html.yesscript & {
    align-items: flex-start;
    background: var(--main-bg) url(${textureJpeg});
    bottom: 0;
    display: flex;
    flex-direction: row;
    height: calc(100vh - 3rem - var(--button-padding));
    justify-content: space-between;
    left: 0;
    padding: var(--button-padding) 2.5rem 3rem 3rem;
    position: absolute;
    right: 0;
    top: 0;
    width: calc(100vw - 5.5rem);
    z-index: 99;

    li {
      padding: 0;
    }
  }

  html:not(.yesscript) & {
    background: none;

    > ul {
      text-align: right;
    }
  }
`;

export const button = css`
  line-height: 0;
  margin: 0;
  padding: 0;

  html:not(.yesscript) & {
    display: none;
  }
`;

export const hamburger = css`
  fill: var(--main-bg);
`;

export const exit = css`
  fill: var(--header-footer-bg);
`;
