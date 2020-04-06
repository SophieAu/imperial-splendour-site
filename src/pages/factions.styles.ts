import { css } from 'linaria';

import { font } from '../_variables.styles';

export const faction = css`
  margin: 2.5rem 0 5.5rem;

  & > h1 {
    font: ${font.headline};
    margin: 0 0 1.5rem;
    text-decoration: none;
  }

  img {
    max-width: 100%;
  }
`;
