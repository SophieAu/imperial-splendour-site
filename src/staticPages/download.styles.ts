import { css } from 'linaria';

import { screenSize } from '../_variables.styles';

export const container = css`
  display: grid;
  grid-template-columns: 1fr max-content;
  align-items: start;
  padding-top: 0.5rem;
  margin: 2rem 0;

  @media all ${screenSize.TABLET_MAX} {
    grid-template-columns: 1fr;
  }
`;

export const info = css`
  grid-row: span 3;

  h2,
  ul,
  li {
    margin: 0 0 1rem;
  }

  ul {
    line-height: 2rem;
    list-style: disc;
  }
`;

export const dlHeading = css`
  margin: 0;
  text-align: center;
`;

export const filehosts = css`
  align-items: center;
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: 0rem;

  line-height: 2rem;
  list-style: disc;
  list-style: none;
  list-style-type: none;

  margin: 0;
  padding: 0;

  li {
    margin: 0;
    padding: 0;

    display: grid;
    place-items: center;
  }
`;

export const hostButton = css`
  display: grid;
  place-items: center;

  img {
    max-height: 3.125rem;
    max-width: min(16.25rem, 80%);
  }
`;

export const versionInfo = css`
  margin: 0.5rem auto 0;
  font-size: 1.125rem;
  text-align: center;
  max-width: 24rem;
`;

export const otherContainer = css`
  margin: 2.5rem 0 5.5rem;
`;

export const mirrorTable = css`
  border-collapse: collapse;
  width: 100%;
  margin: auto;

  td {
    padding: 1rem;
    border: solid 1px;
    font-size: 1.25rem;
  }

  td:first-child {
    vertical-align: top;
  }

  td:nth-child(2) {
    white-space: nowrap;
    p {
      margin: 0;
    }

    p:not(:last-child) {
      margin: 0 0 0.25rem;
    }
  }
`;
