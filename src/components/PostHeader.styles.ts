import { css } from 'linaria';

import { screenSize } from '../_variables.styles';

export const root = css`
  display: grid;
  grid-gap: 1rem 1.5rem;
  grid-template-columns: repeat(2, auto);

  h1,
  a {
    font: var(--headline-font);
    margin: 0;
    text-decoration: none;
  }

  @media all ${screenSize.MOBILE} {
    h1 {
      grid-column: 1/3;
      grid-row: 2/3;
    }
  }
`;

export const date = css`
  color: var(--blog-meta);
  font: var(--blog-meta-font);
  margin: 0;
  padding: 0.5rem 0 0;
  text-align: right;

  @media all ${screenSize.MOBILE} {
    grid-column: 1/3;
    grid-row: 1/2;
  }
`;

export const author = css`
  color: var(--blog-meta);
  font: var(--blog-meta-font);
  margin: 0;
  padding: 0;

  @media all ${screenSize.MOBILE} {
    grid-column: 1/3;
    grid-row: 3/4;
  }
`;
