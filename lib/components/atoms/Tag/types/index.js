// @flow
import type { Node } from 'react';

export type TagProps = {
  children: Node,
  tagName?: String,
  className?: String,
  variation?: String,
  onRemove?: Function,
  removeBtnLabel?: String,
  inheritedStyles?: String,
};
