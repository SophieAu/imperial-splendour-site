import { css } from 'linaria';

import {
  color,
  DOWNLOAD_BUTTON_HEIGHT,
  font,
  MAX_BODY_WIDTH,
  MAX_CONTENT_WIDTH,
  MAX_SITE_WIDTH,
  screenSize,
} from '../_variables.styles';
import heroJpg from '../../data/img/index/hero_bg.jpg';
import heroWebP from '../../data/img/index/hero_bg.webp';

export const root = css`
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
  max-width: ${MAX_BODY_WIDTH};
  width: 50vw;
`;

export const body = css`
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
      background: no-repeat bottom/100% url(${heroJpg});
    }

    .webp & {
      background: no-repeat bottom/100% url(${heroWebP});
    }
  }
`;

export const text = css`
  font: ${font.hero};
  max-width: ${MAX_CONTENT_WIDTH};
  padding-bottom: 5rem;

  @media all ${screenSize.DESKTOP} {
    color: ${color.white};
    margin: 0;
  }

  @media all ${screenSize.TABLET} {
    color: ${color.white};
    margin: 0 1rem;
  }

  @media all ${screenSize.MOBILE} {
    color: black;
    margin: 1.5rem 1rem 0;
  }
`;
