// @flow
import type { Node } from 'react';

export type Props = {
  className?: string,
  title?: string,
  label?: string,
  author: string,
  quoteContent: string,
  contentSrc: string,
  children: Node,
};
