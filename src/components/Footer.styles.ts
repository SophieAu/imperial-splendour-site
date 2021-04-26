import { css } from 'linaria';

import { color, FOOTER_HEIGHT, screenSize } from '../_variables.styles';

export const root = css`
  height: ${FOOTER_HEIGHT};

  @media all ${screenSize.MOBILE} {
    flex-direction: column !important;
    height: auto;
    min-height: ${FOOTER_HEIGHT};
  }
`;

export const credits = css`
  margin: 0;
  padding-left: 2rem;
  text-align: center;

  a {
    text-decoration: none;
  }

  a:hover {
    text-decoration: underline;
  }

  @media all ${screenSize.MOBILE} {
    padding: 0.5rem;
  }
`;

export const socialMedia = css`
  display: flex;
  list-style-type: none;
  margin: 0;
  padding-right: 2rem;

  > *,
  > * > a {
    display: block;
  }

  > *:not(:last-child) {
    padding-right: 2rem;
  }

  > *:not(:first-child) {
    width: 2.5rem;
  }
  > *:first-child {
    width: 208px;
  }

  img {
    fill: ${color.mainBg};
    height: 2.5rem;
  }

  @media all ${screenSize.MOBILE} {
    padding: 0.5rem;

    place-items: center;
    flex-direction: column;

    > *:not(:last-child) {
      padding-right: 0;
    }
  }
`;
