// @flow
import type { Node } from 'react';

export type Props = { popOverBody: String, popOverHeader: String, children: Node };

export type State = {
  showPopover: boolean,
};
