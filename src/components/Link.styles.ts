import { css } from 'linaria';

import { color, DOWNLOAD_BUTTON_HEIGHT, DOWNLOAD_BUTTON_WIDTH, font } from '../_variables.styles';
import texturePng from '../../data/img/texture_btn.png';
import textureWebp from '../../data/img/texture_btn.webp';

export const button = css`
  background: no-repeat center/100% url(${texturePng});
  font: ${font.button};
  height: ${DOWNLOAD_BUTTON_HEIGHT};
  text-align: center;
  text-decoration: none;
  width: ${DOWNLOAD_BUTTON_WIDTH};

  &:hover {
    color: ${color.linkHover};
    cursor: pointer;
  }

  .webp & {
    background: no-repeat center/100% url(${textureWebp});
  }
`;
