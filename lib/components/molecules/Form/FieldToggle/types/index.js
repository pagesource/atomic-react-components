// @flow
import type { Node } from 'react';

export type Props = {
  children: Node,
  id: string,
  name: string,
  disabled: Boolean,
  className?: string,
  inheritedStyles?: string,
  labelName: string,
  indicatorOn?: string,
  indicatorOff?: string,
  displayIndicators?: Boolean,
  intialToggleState: Boolean,
  onChange?: Function,
  handleToggleCallback: Function,
  label?: string,
};
