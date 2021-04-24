import { css } from 'linaria';

import { font, MAX_BODY_WIDTH, screenSize } from '../_variables.styles';

export const root = css`
  box-sizing: border-box;
  align-items: center;
  display: grid;
  grid: auto-flow dense / repeat(5, 1fr);
  grid-gap: 4rem 2rem;
  width: min(100%, ${MAX_BODY_WIDTH});

  @media all ${screenSize.DESKTOP} {
    margin: 6rem 0;
  }

  @media all ${screenSize.TABLET_MAX} {
    display: flex;
    flex-direction: column;
    padding: 5rem 3rem 3rem;
    grid-gap: 0;
  }

  @media all ${screenSize.MOBILE} {
    padding: 5rem 0 3rem;
  }
`;

export const text = css`
  font: ${font.info};
  grid-column: span 2;
  margin: 0;

  @media all ${screenSize.TABLET_MAX} {
    margin: 0 1rem 3rem;
    text-align: center;
  }
`;

export const image = css`
  margin: 1rem;

  &.even {
    grid-column: 1/4;
  }

  &.odd {
    grid-column: 3/6;
  }
`;
