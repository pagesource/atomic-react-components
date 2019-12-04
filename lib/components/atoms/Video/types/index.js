// @flow
import type { Node } from 'react';

export type Props = {
  width?: Number,
  height?: Number,
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
  captionData: Array,
};
