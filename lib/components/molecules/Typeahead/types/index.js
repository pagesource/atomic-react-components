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
  onChange?: Function,
  handleChange?: Function,
  suggestions: Array,
  inheritedStyles?: string,
};
