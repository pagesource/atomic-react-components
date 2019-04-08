// @flow
import type { Node } from 'react';

export type Props = {
  popOverHeader?: Node | string,
  children: Node | string,
  isVisible?: boolean,
  hidePopoverCloseBtn?: boolean,
  className?: string,
  trigger: React$Element<*>,
};

export type State = {
  showPopover: boolean,
};
