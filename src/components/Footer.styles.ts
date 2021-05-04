import { css } from 'linaria';

import { color, FOOTER_HEIGHT, screenSize } from '../_variables.styles';

export const root = css`
  height: ${FOOTER_HEIGHT};
  padding: 0 2rem;

  @media all ${screenSize.MOBILE} {
    flex-direction: column !important;
    height: auto;
    min-height: ${FOOTER_HEIGHT};
    padding: 0 1rem;
  }
`;

export const credits = css`
  margin: 0;
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
  justify-content: flex-end;
  grid-gap: 2rem;
  flex-wrap: wrap;

  list-style-type: none;

  margin: 0;

  li {
    display: flex;
    align-items: center;
  }

  img {
    fill: ${color.mainBg};
    height: 2.5rem;
    object-fit: contain;
    width: auto;
  }

  @media all ${screenSize.MOBILE} {
    justify-content: center;
    padding: 2rem 0;
  }
`;
