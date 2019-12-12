// @flow
import type { Node } from 'react';

export type Props = {
  children: Node,
  id: String,
  name: String,
  disabled: Boolean,
  className?: String,
  labelName: String,
  labelOn: String,
  labelOff: String,
  toggleValue: Boolean,
  onChange?: Function,
  toggleCheckboxClick: Function,
};
