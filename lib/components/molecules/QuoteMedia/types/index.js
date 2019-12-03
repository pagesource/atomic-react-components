// @flow
import type { Node } from 'react';

export type Props = {
  className?: string,
  title?: string,
  author: string,
  quoteContent: string,
  childClassName?: string,
  children: Node,
};
