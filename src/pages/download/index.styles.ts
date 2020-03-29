import { css } from 'linaria';

import { screenSize } from '../../_variables.styles';

export const container = css`
  h2,
  ul,
  li {
    margin: 0 0 1rem;
  }

  ul {
    line-height: 2rem;
    list-style: disc;
  }

  display: flex;
  padding-top: 0.5rem;

  @media all ${screenSize.TABLET_MIN} {
    align-items: center;
    justify-content: space-between;
    margin: 2rem 0;
  }

  @media all ${screenSize.MOBILE} {
    flex-direction: column-reverse;

    > * {
      margin: 2rem 0;
    }
  }
`;

export const download = css`
  align-items: center;
  display: flex;
  flex-direction: column;

  p {
    font-size: 1.25rem;
    margin: 0.5rem 0 0;
    max-width: calc(var(--download-button-width) + 6rem);
    text-align: center;
  }
`;
