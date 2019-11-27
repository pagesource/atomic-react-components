// @flow
/**
 *
 * TabPanel
 *
 */
import React from 'react';
import styled from 'styled-components';
import type { Node } from 'react';

import styles from './TabPanel.style';

type Props = {
  className?: string,
  children: Node,
  isSelected: boolean,
  index: number,
  inheritedStyles?: string,
  tabId: string,
};

const TabPanel = ({
  children,
  className,
  index,
  isSelected,
  inheritedStyles,
  tabId,
  ...others
}: Props): Node => (
  <div
    id={tabId}
    className={className}
    role="tabpanel"
    aria-expanded={isSelected}
    aria-hidden={!isSelected}
    aria-labelledby={`tab_${index}`}
    hidden={!isSelected}
    {...others}
  >
    {children}
  </div>
);

TabPanel.defaultProps = {
  className: '',
  inheritedStyles: '',
};

export default styled(TabPanel)`
  ${styles};
`;

export { TabPanel as TabPanelVanilla };
