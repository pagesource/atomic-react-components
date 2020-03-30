// @flow
/**
 *
 * TabPanel
 *
 */
import React from 'react';
import styled from 'styled-components';
import type { Node, ComponentType } from 'react';

import styles from './TabPanel.style';

type Props = {
  className?: string,
  children: Node,
  isSelected: boolean,
  index: number,
  inheritedStyles?: string,
  tabId: string,
};

const TabPanel = ({ children, className, index, isSelected, tabId, ...others }: Props): Node => (
  <div
    {...others}
    id={tabId}
    className={className}
    role="tabpanel"
    aria-expanded={isSelected}
    aria-hidden={!isSelected}
    aria-labelledby={`tab_${index}`}
    hidden={!isSelected}
  >
    {children}
  </div>
);

TabPanel.defaultProps = {
  className: '',
  inheritedStyles: '',
};

const StyledTabPanel: ComponentType<Props> = styled(TabPanel)`
  ${styles};
`;

export default StyledTabPanel;

export { TabPanel as TabPanelVanilla };
