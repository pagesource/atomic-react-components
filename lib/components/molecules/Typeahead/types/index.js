// @flow
import type { Node } from 'react';

export type Props = {
  children: Node,
  id: string,
  name: string,
  type: string,
  disabled: boolean,
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
  isFieldLabel?: boolean,
  customFilter?: any,
  minSearchChars?: number,
  minItemsInList?: number,
  ariaInitialInstructions?: string,
};

export type ListItemProps = {
  children: Node,
  index: number,
  activeResult: number,
  handleClick: any,
  item: any,
  onMouseEnter: any,
  onMouseDown: any,
};
