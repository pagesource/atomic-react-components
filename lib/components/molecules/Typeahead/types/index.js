// @flow
import type { Node } from 'react';

export type Props = {
  children: Node,
  id: string,
  name: string,
  type: string,
  disabled: boolean,
  children: Node,
  onSuggestionsRequested?: any,
  suggestions: any,
  inheritedStyles?: string,
  className: string,
  renderListItem: any,
};

export type ListItemProps = {
  children: Node,
};
