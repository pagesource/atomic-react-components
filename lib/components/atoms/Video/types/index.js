// @flow
import type { Node } from 'react';

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
  children?: Node,
  className?: String,
  controlsList?: String,
  defaultCaption?: Object,
};
