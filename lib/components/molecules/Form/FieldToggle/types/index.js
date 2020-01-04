// @flow
import type { Node } from 'react';

export type Props = {
  children: Node,
  id: String,
  name: String,
  disabled: Boolean,
  className?: String,
  inheritedStyles?: String,
  labelName: String,
  indicatorOn?: String,
  indicatorOff?: String,
  displayIndicators?: Boolean,
  intialToggleState: Boolean,
  onChange?: Function,
  handleToggleCallback: Function,
};
