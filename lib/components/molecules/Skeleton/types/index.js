// @flow
import type { Node } from 'react';

export type Props = {
  children: Node,
  className?: string,
};

export type LineProps = {
  className?: string,
};

export type CircleProps = {
  className?: string,
  marginBottom?: string,
  width?: string,
};

export type BarProps = {
  className?: string,
  marginBottom?: string,
  width?: string,
  height?: string,
};
