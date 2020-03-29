import { css } from 'linaria';

export const root = css`
  .site-header {
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

    .header-logo {
      .header-img {
        flex: 1;
        height: var(--logo-height);
        line-height: 0;
        width: calc(var(--logo-height) * 300 / 92);
      }
    }

    #header-menu > ul {
      display: flex;
      justify-content: flex-end;
      list-style-type: none;
      margin: 0;
      padding: 0;

      > li {
        line-height: var(--header-height);
        margin: 0;
      }
    }

    #exit-button,
    #hamburger-button {
      line-height: 0;
      margin: 0;
      padding: 0;
    }

    #hamburger-button {
      fill: var(--main-bg);
    }

    #exit-button {
      fill: var(--header-footer-bg);
    }
  }

  @media (min-width: $tablet-breakpoint) {
    #hamburger-button,
    #exit-button,
    .home-link {
      display: none;
    }

    #header-menu {
      align-items: flex-end;
      flex-direction: column;
      width: 100%;

      > ul > li:not(:last-child) {
        padding-right: 4rem;
      }
    }
  }

  @media (max-width: $tablet-breakpoint - 1) {
    .webp #header-menu {
      background: var(--main-bg) url(../../data/img/texture_bg.webp);
    }

    html.yesscript .site-header #header-menu {
      align-items: flex-start;
      background: var(--main-bg) url(../../data/img/texture_bg.jpg);
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

      > ul {
        flex-direction: column;
        > li {
          padding: 0;
        }
      }
    }

    html:not(.yesscript) .site-header {
      align-items: stretch;
      flex-direction: column;
      height: auto;
      padding: 1rem;
      position: relative;
      width: auto;

      #header-menu {
        background: none;
        > ul {
          flex-direction: column;
          text-align: right;
        }
      }

      #hamburger-button,
      #exit-button {
        display: none;
      }
    }
  }
`;
