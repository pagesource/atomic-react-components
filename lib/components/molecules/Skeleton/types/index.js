// @flow
import type { Node } from 'react';

export type Props = {
  children: Node,
  className?: string,
};

export type LineProps = {
  className?: string,
  lineHeight?: number,
  lineWidth?: number,
  lineGutter?: number,
};

export type CircleProps = {
  className?: string,
  circleWidth?: number,
  circleRadius?: number,
  circleGutter?: number,
};
