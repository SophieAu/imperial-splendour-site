import { css } from 'linaria';

import { screenSize } from '../../_variables.styles';

export const downloadConfirm = css`
  margin: 1rem;
  padding: 4rem 0;
  text-align: center;
`;

export const filehosts = css`
  align-items: center;
  display: flex;
  flex-direction: row;
  justify-content: center;
  list-style-type: none;
  margin: 0;
  padding: 2rem 0 0;

  > * {
    margin: 0;
    padding-right: 4rem;
  }

  > *:last-child {
    padding-right: 0;
  }

  img {
    max-height: 3.125rem;
    max-width: 16.25rem;
  }

  @media all ${screenSize.MOBILE} {
    flex-direction: column;
    padding: 1rem 0;
    > * {
      padding: 1rem 0;
    }
  }
`;
