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

export const link = css`
  display: none;
`;

export const homeLogo = css`
  flex: 1;
  height: var(--logo-height);
  line-height: 0;
  width: calc(var(--logo-height) * 300 / 92);
`;

export const menu = css`
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
      line-height: var(--header-height);
      margin: 0;
    }

    > li:not(:last-child) {
      padding-right: 4rem;
    }
  }
`;
