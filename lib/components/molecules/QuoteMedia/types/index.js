// @flow
import type { Node } from 'react';

export type Props = {
  className?: string,
  title?: string,
  variation?: 'stacked' | 'column',
  children: Node,
  quoteContent?: Function,
  HeadingType?: string,
};
