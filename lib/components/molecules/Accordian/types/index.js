// @flow
import type { Node } from 'react';

export type Props = {
  children: Node,
  className: string,
  AccordianWrapper: string,
  accordianHeader: Node | string,
  accordianBody: Node | string,
};

export type State = {
  isOpen: boolean,
};
