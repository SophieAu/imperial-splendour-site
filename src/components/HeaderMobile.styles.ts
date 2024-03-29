import { css } from 'linaria';

import textureJpeg from '../../data/img/texture_bg.jpg';
import textureWebp from '../../data/img/texture_bg.webp';
import { color, HEADER_HEIGHT, screenSize } from '../_variables.styles';

export const root = css`
  html:not(.yesscript) & {
    align-items: stretch;
    flex-direction: column;
    height: auto;
    padding: 1rem;
    position: relative;
    width: auto;
  }

  @media all ${screenSize.DESKTOP} {
    display: none !important;
  }
`;

export const hide = css`
  display: none !important;
`;

export const menu = css`
  .webp & {
    background: ${color.mainBg} url(${textureWebp});
  }

  ul {
    display: flex;
    justify-content: flex-end;
    list-style-type: none;
    margin: 0;
    padding: 0;
    flex-direction: column;

    li {
      line-height: ${HEADER_HEIGHT};
      margin: 0;
    }
  }

  html.yesscript & {
    align-items: flex-start;
    background: ${color.mainBg} url(${textureJpeg});
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
  background-color: transparent;
  border: none;
  line-height: 0;
  margin: 0;
  padding: 0;

  html:not(.yesscript) & {
    display: none;
  }
`;

export const hamburger = css`
  fill: ${color.mainBg};
`;

export const exit = css`
  fill: ${color.headerFooterBg};
`;
