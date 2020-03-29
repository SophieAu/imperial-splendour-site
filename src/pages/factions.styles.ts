import { css } from 'linaria';

export const faction = css`
  margin: 2.5rem 0 5.5rem;

  & > h1 {
    font: var(--headline-font);
    margin: 0 0 1.5rem;
    text-decoration: none;
  }

  img {
    max-width: 100%;
  }
`;
