// @flow
import type { Node } from 'react';

export type Props = {
  children: Node,
  className?: String,
  variation?: 'stacked' | 'side-by-side' | 'positioned',
  inheritedStyles?: string,
  renderMediaContent?: Function,
};
