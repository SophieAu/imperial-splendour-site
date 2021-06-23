import { css } from 'linaria';

export const blogPost = css`
  padding: 2.5rem 0;
`;

export const text = css`
  margin: 3rem 0;

  img {
    width: auto;
    max-width: 100%;
  }

  li {
    padding: 0.2rem 0;
  }
`;

export const postFooter = css`
  display: flex;
  flex-direction: column;

  align-items: center;

  p:not(:nth-child(3)) {
    margin: 0.5rem 0;
  }

  p:nth-child(3) {
    margin: 0.5rem 0 -0.25rem;
  }
`;
