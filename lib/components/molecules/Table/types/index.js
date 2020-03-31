// @flow
import type { Node, Element } from 'react';

export type TableProps = {
  className?: string,
  data: Array<mixed>,
  children: Node,
  vertical?: boolean,
  dataMappingKey: string,
};

export type CellProps = {
  children: Element<any>,
  item: { key: string },
};

export type HeadProps = {
  children: Node,
};
