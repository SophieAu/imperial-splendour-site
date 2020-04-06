import { css } from 'linaria';

import { font, HEADER_HEIGHT } from '../_variables.styles';

export const root = css`
  --logo-height: 3.5rem;
  --button-padding: calc((4.5rem - 1.25rem) / 2);

  font: ${font.headline};
  font-size: 2.5rem;
  height: ${HEADER_HEIGHT};
  padding: 0 2.5rem 0 1rem;
  position: fixed;
  top: 0;
  width: calc(100vw - 1rem - 2.5rem);

  a {
    text-decoration: none;
  }
`;

export const homeLogo = css`
  flex: 1;
  height: var(--logo-height);
  line-height: 0;
  width: calc(var(--logo-height) * 300 / 92);
`;
