// @flow
import type { Node } from 'react';

export type Props = {
  children: Node,
  id: String,
  name: String,
  type: String,
  disabled: Boolean,
  className?: String,
  labelName: String,
  toggleLabel: String,
  labelOn: String,
  labelOff: String,
};
