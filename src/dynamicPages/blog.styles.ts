import { css } from 'linaria';

export const postList = css`
  list-style-type: none;
  padding: 1.5rem 0;
`;

export const post = css`
  padding: 3rem 0;
`;

export const excerpt = css`
  margin: 0;
  padding: 1rem 0 0;
`;

export const pagination = css`
  font-size: 1.875rem;
  padding: 2rem 0 5rem;

  ul {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    list-style-type: none;
    margin: 0;
    padding: 0;

    > *:last-child {
      text-align: right;
    }

    li > * {
      text-decoration: none;
    }
  }
`;
