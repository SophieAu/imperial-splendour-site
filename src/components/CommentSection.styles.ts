import { css } from 'linaria';

export const root = css`
  padding-bottom: 3rem;
  h2,
  p {
    margin: 0;
    padding: 0;
  }

  article {
    padding: 1rem 0;
  }
`;

export const header = css`
  align-items: baseline;
  display: flex;
  justify-content: space-between;
  padding-bottom: 0.25rem;
  width: 66%;
`;

export const author = css`
  font-size: 2rem;
`;

export const date = css`
  font-size: 1.25rem;
`;

export const body = css`
  width: 66%;
`;
