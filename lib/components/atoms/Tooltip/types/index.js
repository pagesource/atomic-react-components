// @flow
import type { Node } from 'react';

export type Props = {
  message?: string,
  position?: string,
  className?: string,
  children: Node,
  tabIndex?: number,
};

export type State = {
  displayTooltip?: boolean,
};
