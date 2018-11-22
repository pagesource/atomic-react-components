// @flow
import type { Node } from 'react';

type tabsContent = {
  tabTitle: Node | string,
  panelContent: Node,
  panelClassName?: string,
  tabClassName?: string,
};

export type Props = {
  className?: string,
  tabsContent: Array<tabsContent>,
  tabsId?: string,
  inheritedStyles?: string,
  initialSelectedIndex: number,
  isVerticalView?: boolean,
  tabWrapClassName?: string,
  panelWrapClassName?: string,
  onTabChange?: Function,
};

export type State = {
  selectedIndex: number,
};
