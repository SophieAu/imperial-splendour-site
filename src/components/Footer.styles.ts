import { css } from 'linaria';

import { screenSize } from '../_variables.styles';

export const root = css`
  height: var(--footer-height);

  @media all ${screenSize.MOBILE} {
    flex-direction: column;
    height: auto;
    min-height: var(--footer-height);
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

  svg,
  img {
    fill: var(--main-bg);
    height: 2.5rem;
  }

  @media all ${screenSize.MOBILE} {
    padding: 0.5rem;
  }
`;
