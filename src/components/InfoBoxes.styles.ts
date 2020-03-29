import { css } from 'linaria';

import { screenSize } from '../_variables.styles';

export const root = css`
  align-items: center;
  display: grid;
  grid: auto-flow dense / repeat(5, 1fr);
  grid-column-gap: 2rem;
  grid-row-gap: 4rem;
  max-width: var(--max-body-width);

  @media all ${screenSize.DESKTOP} {
    margin: 6rem 0;
  }

  @media all ${screenSize.TABLET_MAX} {
    display: flex;
    flex-direction: column;
    padding: 5rem 3rem 3rem;
    width: calc(100% - 3rem);
  }

  @media all ${screenSize.MOBILE} {
    padding: 5rem 0 3rem;
    width: 100%;
  }
`;

export const text = css`
  font: var(--info-font);
  grid-column: span 2;
  margin: 0;

  @media all ${screenSize.TABLET_MAX} {
    object-fit: contain;
    padding: 1rem;
    text-align: center;
  }
`;

export const image = css`
  height: auto;
  margin: 1rem;

  &.even {
    grid-column: 1/4;
  }

  &.odd {
    grid-column: 3/6;
  }

  & > img {
    object-fit: contain !important;
  }

  @media all ${screenSize.TABLET_MAX} {
    width: calc(100% - 2rem);
  }
`;
