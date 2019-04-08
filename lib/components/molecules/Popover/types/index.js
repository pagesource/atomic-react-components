// @flow
import type { Node } from 'react';

export type Props = {
  popOverBody: Node | string,
  popOverHeader: Node | string,
  children: React$Element<*>,
  isVisible: boolean,
  hidePopoverCloseBtn: boolean,
  className: string,
};

export type State = {
  showPopover: boolean,
};
