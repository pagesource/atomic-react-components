// @flow
import type { Node } from 'react';

export type Props = {
  className?: string,
  data: Array<mixed>,
  children: Node,
  content: string,
  vertical?: boolean,
  showComponentInHeader?: boolean,
  showComponentInCell?: boolean,
  dataMappingKey: mixed,
};
