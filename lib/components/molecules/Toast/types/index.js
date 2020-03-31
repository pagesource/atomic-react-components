// @flow
import type { Node } from 'react';

export type Props = {
  children: Node,
  className: String,
  variation: String,
  isVisible: Boolean,
  placement: String,
  autoDismissTimeout: number,
};
