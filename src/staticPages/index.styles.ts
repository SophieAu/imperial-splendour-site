import { css } from '@emotion/react';

import {
  color,
  DOWNLOAD_BUTTON_HEIGHT,
  font,
  MAX_CONTENT_WIDTH,
  MAX_SITE_WIDTH,
  screenSize,
} from '../_variables.styles';

export const heroRoot = css`
  align-items: center;
  display: flex;
  flex-direction: column;
  margin-bottom: calc(-1 * ${DOWNLOAD_BUTTON_HEIGHT} / 2);

  max-width: 100vw !important;
  width: 100vw !important;

  @media all ${screenSize.TABLET_MIN} {
    height: 62.5vw;
    max-height: calc(${MAX_SITE_WIDTH} * 1080 / 1920);
  }

  @media all ${screenSize.MOBILE} {
    height: auto;
  }
`;

export const button = css`
  margin-top: calc(-1 * ${DOWNLOAD_BUTTON_HEIGHT} / 2);
`;

export const logo = css`
  width: min(50vw, 85rem);
`;

export const body = (heroImg: { webp: string; jpg: string }) => css`
  align-items: center;
  display: flex;
  flex: 1;
  flex-direction: column;
  justify-content: space-between;
  padding-top: 2.5rem;
  text-align: center;
  width: 100%;

  @media all ${screenSize.TABLET_MIN} {
    html:not(.webp) & {
      background: no-repeat bottom/100% url(${heroImg.jpg});
    }

    .webp & {
      background: no-repeat bottom/100% url(${heroImg.webp});
    }
  }
`;

export const text = css`
  max-width: calc(${MAX_CONTENT_WIDTH} + 2rem);
  padding-bottom: 5rem;

  font: ${font.hero};
  color: ${color.white};
  > * {
    margin: 0 1rem;
  }

  @media all ${screenSize.MOBILE} {
    color: black;
    p {
      margin: 1.5rem 1rem 0;
    }
  }
`;

export const infoBoxRoot = css`
  box-sizing: border-box;
  align-items: center;
  display: grid;
  grid: auto-flow dense / repeat(5, 1fr);
  grid-gap: 4rem 2rem;

  @media all ${screenSize.DESKTOP} {
    margin: 6rem 0;
  }

  @media all ${screenSize.TABLET_MAX} {
    display: flex;
    flex-direction: column;
    padding: 5rem 3rem 3rem;
    width: calc(100% - 3rem);
    grid-gap: 0;
  }

  @media all ${screenSize.MOBILE} {
    padding: 5rem 0 3rem;
  }

  > *:not(div):nth-child(4n + 1) {
    grid-column: 3/6;
  }

  > *:not(div):nth-child(4n + 3) {
    grid-column: 1/4;
  }
`;

export const infoText = css`
  font: ${font.info};
  grid-column: span 2;

  > * {
    margin: 0;

    @media all ${screenSize.TABLET_MAX} {
      margin: 0 1rem 3rem;
      text-align: center;
    }
  }
`;

export const image = css`
  margin: 1rem;
`;
