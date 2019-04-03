// @flow
import type { Node } from 'react';

export type Props = {
  children: Node,
  className: String,
  onClick: Function,
};

export type State = {
  isOpen: boolean,
};
