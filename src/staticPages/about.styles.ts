import { css } from 'linaria';

export const aboutText = css`
  padding: 2.5rem 0 0;
`;

export const contributors = css`
  margin-bottom: 2.5rem;

  h2 {
    margin-bottom: 0.75rem;
  }
`;

export const avatars = css`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  list-style-type: none;
  margin: 0;
  padding: 0;
`;

export const contributor = css`
  flex: 0 0 10rem;
  max-width: 10rem;
  text-align: center;

  p {
    margin: 0.5rem 0;
  }

  img {
    width: 66px;
  }
`;
