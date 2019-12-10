// @flow
import type { Node } from 'react';

export type Props = {
  className?: string,
  title?: string,
  author: string,
  quoteContentProp: string,
  quoteClassName?: string,
  children: Node,
};
