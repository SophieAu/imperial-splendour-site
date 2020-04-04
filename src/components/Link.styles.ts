import { css } from 'linaria';

import texturePng from '../../data/img/texture_btn.png';
import textureWebp from '../../data/img/texture_btn.webp';

export const button = css`
  background: no-repeat center/100% url(${texturePng});
  font: var(--button-font);
  height: var(--download-button-height);
  text-align: center;
  text-decoration: none;
  width: var(--download-button-width);

  &:hover {
    color: var(--link-hover);
    cursor: pointer;
  }

  .webp & {
    background: no-repeat center/100% url(${textureWebp});
  }
`;
