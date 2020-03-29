import { css } from 'linaria';

import { screenSize } from '../_variables.styles';
import heroJpg from '../../data/img/hero_bg.jpg';
import heroWebP from '../../data/img/hero_bg.webp';

export const root = css`
  align-items: center;
  display: flex;
  flex-direction: column;
  margin-bottom: calc(-1 * var(--download-button-height) / 2);
  max-width: 100vw;
  width: 100vw;

  @media all ${screenSize.TABLET_MIN} {
    height: 62.5vw;
    max-height: calc(var(--max-site-width) * 1080 / 1920);
  }

  @media all ${screenSize.MOBILE} {
    height: auto;
  }
`;

export const button = css`
  margin-top: calc(-1 * var(--download-button-height) / 2);
`;

export const logo = css`
  max-width: var(--max-body-width);
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
    :not(.webp) & {
      background: no-repeat bottom/100% url(${heroJpg});
    }

    .webp & {
      background: no-repeat bottom/100% url(${heroWebP});
    }
  }
`;

export const text = css`
  font: var(--hero-font);
  max-width: var(--max-content-width);
  padding-bottom: 5rem;

  @media all ${screenSize.DESKTOP} {
    color: var(--white);
    margin: 0;
  }

  @media all ${screenSize.TABLET} {
    color: var(--white);
    margin: 0 1rem;
  }

  @media all ${screenSize.MOBILE} {
    color: black;
    margin: 1.5rem 1rem 0;
  }
`;
