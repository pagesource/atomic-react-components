// @flow
/**
 *
 * Tab
 *
 */
import React from 'react';
import styled from 'styled-components';
import type { Node, ComponentType } from 'react';

import styles from './Tab.style';
import Anchor from '../../../atoms/Anchor';

type Props = {
  tabId: string,
  index: number,
  className?: string,
  children: Node,
  isSelected: boolean,
  onClick: (SyntheticEvent<>, number) => void,
  onKeyDown: (SyntheticKeyboardEvent<>) => void,
  inheritedStyles?: string,
};

const Tab = ({
  children,
  className,
  tabId,
  index,
  isSelected,
  onClick,
  onKeyDown,
  inheritedStyles,
  ...others
}: Props): Node => (
  <li
    {...others}
    className={className}
    role="tab"
    aria-controls={tabId}
    aria-selected={isSelected}
    id={`tab_${index}`}
    onClick={(e) => onClick(e, index)}
    onKeyDown={(e) => onKeyDown(e)}
    tabIndex={isSelected ? 0 : -1}
  >
    <Anchor noLink to={`#${tabId}`}>
      {children}
    </Anchor>
  </li>
);

Tab.defaultProps = {
  className: '',
  inheritedStyles: '',
};

const StyledTab: ComponentType<Props> = styled(Tab)`
  ${styles};
`;

export default StyledTab;

export { Tab as TabVanilla };
