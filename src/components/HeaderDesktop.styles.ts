import { css } from 'linaria';

import { HEADER_HEIGHT, screenSize } from '../_variables.styles';

export const link = css`
  display: none;
`;

export const root = css`
  align-items: flex-end;
  flex-direction: column;
  width: 100%;

  & > ul {
    display: flex;
    justify-content: flex-end;
    list-style-type: none;
    margin: 0;
    padding: 0;

    > li {
      line-height: ${HEADER_HEIGHT};
      margin: 0;
    }

    > li:not(:last-child) {
      padding-right: 4rem;
    }
  }
`;

export const toggle = css`
  @media all ${screenSize.TABLET_MAX} {
    display: none !important;
  }
`;
