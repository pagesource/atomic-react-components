// @flow
import type { Node } from 'react';

export type Props = {
  popOverBody: Node | string,
  popOverHeader: Node | string,
  children: React$Element<*>,
  isVisible: boolean,
  wrapperBackground: string,
  hidePopoverCloseBtn: boolean,
};

export type State = {
  showPopover: boolean,
};
