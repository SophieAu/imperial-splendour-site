import { css } from '@emotion/react';

export const carousel = css`
  align-items: center;
  display: flex;
  justify-content: center;
  padding-top: 2rem;
`;

export const link = css`
  margin: 0 1rem;
`;

const IMAGE_WIDTH = 132;
const IMAGE_HEIGHT = 66;
const calcWidth = (offset: number) => IMAGE_WIDTH / Math.abs(offset || 1);
const calcHeight = (offset: number) => IMAGE_HEIGHT * (1 - (offset * offset) / 100);

export const flag = (side: 'right' | 'left' | 'center', offset: number) => css`
  height: ${calcHeight(offset)}px;
  width: ${calcWidth(offset)}px;
  z-index: ${-Math.abs(offset)};
  overflow: unset;
  position: relative;

  img {
    position: absolute;

    object-fit: cover;
    object-position: ${side} center;
    height: 100%;
    width: ${IMAGE_WIDTH}px;
    right: ${side === 'left' ? calcWidth(offset) - IMAGE_WIDTH : 0}px;
    left: ${side === 'right' ? calcWidth(offset) - IMAGE_WIDTH : 0}px;
  }
`;
