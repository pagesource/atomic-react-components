// @flow
import type { Node } from 'react';

export type Props = {
  children: Node,
  className?: string,
};

export type ShapesProps = {
  className?: string,
  radius?: number,
  height?: number,
  width?: number,
  gutter?: number,
  shapeType?: string,
};
