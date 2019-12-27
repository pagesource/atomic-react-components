// @flow
import type { Node } from 'react';

export type TableProps = {
  className?: string,
  data: Array<mixed>,
  children: Node,
  vertical?: boolean,
  dataMappingKey: string,
};

export type CellProps = {
  children: Node,
  item: { key: string },
};

export type HeadProps = {
  children: node,
};
