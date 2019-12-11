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
  results: any,
  inheritedStyles?: string,
  className?: string,
  renderSuggestionItem: any,
  placeholder: string,
  searchValue: string,
  onChangeHandler: any,
  getSelectedSuggestionValue: any,
  label: string,
  isFieldLabel: boolean,
};

export type ListItemProps = {
  children: Node,
};
