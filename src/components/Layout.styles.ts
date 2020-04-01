import { css } from 'linaria';

import { screenSize } from '../_variables.styles';

export const globals = css`
  :global() {
    html,
    body {
      border: 0;
      margin: 0;
      padding: 0;
    }

    button {
      background-color: transparent;
      border: none;
    }
    // ---

    :root {
      font-size: 16px;
    }

    body {
      background: var(--main-bg) url(../../data/img/texture_bg.jpg);
      font: var(--body-font);
    }

    .webp body {
      background: var(--main-bg) url(../../data/img/texture_bg.webp);
    }

    #___gatsby > * {
      display: flex;
      flex-direction: column;
      min-height: 100vh;
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
      &:hover {
        color: var(--link-hover);

        > * {
          fill: var(--link-hover);
          opacity: 0.5;
        }
      }
    }

    #newsletter-input {
      left: -5000px;
      position: absolute;
    }

    .head-foot {
      align-items: center;
      background-color: var(--header-footer-bg);
      background-image: url(../../data/img/texture_headfoot.jpg);
      box-shadow: 0 0 1.25rem 1rem rgba(142, 142, 142, 0.4);
      box-shadow: 0 0 1.25rem 0.75rem rgba(0, 0, 0, 0.5);
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      z-index: 99;
    }
    .webp .head-foot {
      background-image: url(../../data/img/texture_headfoot.webp);
    }

    .button {
      background: no-repeat center/100% url(../../data/img/texture_btn.png);
      font: var(--button-font);
      height: var(--download-button-height);
      text-align: center;
      text-decoration: none;
      width: var(--download-button-width);

      &:hover {
        color: var(--link-hover);
        cursor: pointer;
      }
    }

    .webp .button {
      background: no-repeat center/100% url(../../data/img/texture_btn.webp);
    }
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