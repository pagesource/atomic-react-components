// @flow
import type { Node } from 'react';

export type Props = {
  children: Node,
  id: string,
  name: string,
  type: string,
  disabled: boolean,
  children: Node,
  getSuggestions?: any,
  suggestions: any,
  inheritedStyles?: string,
  className: string,
  renderSuggestion: any,
  placeholder: string,
  value: any,
  onChangeHandler: any,
  getSelectedSuggestionValue: any,
};

export type ListItemProps = {
  children: Node,
};
