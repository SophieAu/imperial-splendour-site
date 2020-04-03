import { css } from 'linaria';

export const root = css`
  --logo-height: 3.5rem;
  --button-padding: calc((4.5rem - 1.25rem) / 2);

  font: var(--headline-font);
  font-size: 2.5rem;
  height: var(--header-height);
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
