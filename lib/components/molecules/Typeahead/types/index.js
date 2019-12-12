// @flow
import type { Node } from 'react';

export type Props = {
  children: Node,
  id: string,
  name: string,
  type: string,
  disabled: boolean,
  children: Node,
  getResults?: any,
  results: any,
  inheritedStyles?: string,
  className?: string,
  renderCustomResultsView: any,
  placeholder: string,
  searchValue: string,
  onChangeHandler: any,
  getSelectedResultValue: any,
  label: string,
  isFieldLabel: boolean,
};

export type ListItemProps = {
  children: Node,
};
