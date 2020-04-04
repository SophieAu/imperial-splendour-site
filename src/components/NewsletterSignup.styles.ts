import { css } from 'linaria';

export const root = css`
  line-height: 2rem;
  margin-bottom: 5rem;
  text-align: center;

  p {
    margin: 0.125rem;
  }

  #mc_embed_signup > form {
    align-items: center;
    display: flex;
    flex-direction: column;
    margin-top: 1rem;

    input[type='email'] {
      box-shadow: inset 0 0 4rem 0.25rem rgba(142, 142, 142, 0.2);
      box-shadow: inset 0 0 1.25rem 0.625rem rgba(142, 142, 142, 0.5);
      box-shadow: inset 0 0 0.5rem 0.25rem rgba(142, 142, 142, 0.8);
      box-sizing: border-box;
      font: 1rem var(--body-font-family);
      height: 5rem;
      max-width: calc(100vw - 2rem);
      padding-left: 1.75rem;
      width: 25rem;
    }

    input {
      background-color: rgba(0, 0, 0, 0);
      border: none;
    }

    #newsletter-input {
      left: -5000px;
      position: absolute;
    }
  }
`;

export const button = css`
  margin-top: 1.5rem;
`;
