// @flow
import type { Node } from 'react';

export type Props = {
  className?: string,
  data: Array,
  children: Node,
};

export type ColumnProps = {
  intent?: string,
  label?: string,
  value?: string | number,
  render?: Node,
  name?: string,
  header?: boolean,
};
