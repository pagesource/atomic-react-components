// @flow
import type { ChildrenArray } from 'react';

export type Props = {
  width?: String,
  height?: String,
  autoPlay?: Boolean,
  controls: Boolean,
  loop?: Boolean,
  muted?: Boolean,
  poster?: String,
  src: String,
  type: String,
  children?: ChildrenArray<any>,
  className?: String,
  controlsList?: String,
  defaultCaption: Object,
};
