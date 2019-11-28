// @flow
import type { Node } from 'react';

export type Props = {
  children: Node,
  id: string,
  name: string,
  type: string,
  checked: boolean,
  disabled: boolean,
  children: Node,
  onChange?: any,
  handleChange?: any,
  suggestions: any,
  inheritedStyles?: string,
  className: string,
  renderListItem: any,
};
