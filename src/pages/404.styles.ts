import { css } from 'linaria';

import { MAX_CONTENT_WIDTH, screenSize } from '../_variables.styles';

export const root = css`
  display: grid;
  place-items: center;

  margin-top: 4rem;
`;

export const contributors = css`
  margin-bottom: 2.5rem;

  h2 {
    margin-bottom: 0.75rem;
  }
`;

export const avatars = css`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  list-style-type: none;
  margin: 0;
  padding: 0;
`;

export const contributor = css`
  flex: 0 0 10rem;
  max-width: 10rem;
  text-align: center;

  p {
    margin: 0.5rem 0;
  }
`;

export const image = css`
  width: min(80vw, ${MAX_CONTENT_WIDTH});
  height: 100%;

  margin-top: 1rem;

  @media all ${screenSize.MOBILE} {
    display: none;
  }
`;

export const title = css`
  @media all ${screenSize.TABLET_MIN} {
    display: none;
  }
`;
