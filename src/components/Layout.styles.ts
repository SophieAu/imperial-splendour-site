import { css } from 'linaria';

import bgTextureJpeg from '../../data/img/texture_bg.jpg';
import bgTextureWebP from '../../data/img/texture_bg.webp';
import textureHeadFootJpeg from '../../data/img/texture_headfoot.jpg';
import textureHeadFootWebP from '../../data/img/texture_headfoot.webp';
import { color, font, HEADER_HEIGHT, MAX_CONTENT_WIDTH, screenSize } from '../_variables.styles';

export const globalResets = css`
  :global() {
    :root {
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
      width: 100%;
    }

    picture {
      line-height: 0;
    }

    h2 {
      font: ${font.headline};
    }

    a {
      color: black;
      text-decoration: underline;
    }
    a:hover {
      color: ${color.linkHover};

      > * {
        fill: ${color.linkHover};
        opacity: 0.5;
      }
    }

    #___gatsby > * {
      display: flex;
      flex-direction: column;
      min-height: 100vh;
    }

    body {
      background: ${color.mainBg} url(${bgTextureJpeg});
      font: ${font.body};
    }

    .webp body {
      background: ${color.mainBg} url(${bgTextureWebP}));
    }
  }
`;

export const headFoot = css`
  align-items: center;
  background-color: ${color.headerFooterBg};
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
  padding: ${HEADER_HEIGHT} 1.5rem 0;

  > * {
    max-width: ${MAX_CONTENT_WIDTH};
    width: 100%;
  }

  @media all ${screenSize.MOBILE} {
    html:not(.yesscript) & {
      padding-top: 0;
    }
  }
`;
