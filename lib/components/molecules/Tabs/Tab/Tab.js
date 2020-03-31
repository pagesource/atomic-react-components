// @flow
/**
 *
 * Tab
 *
 */
import React from 'react';
import styled from 'styled-components';
import type { Node } from 'react';

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
    className={className}
    role="tab"
    aria-controls={tabId}
    aria-selected={isSelected}
    id={`tab_${index}`}
    onClick={e => onClick(e, index)}
    onKeyDown={e => onKeyDown(e)}
    tabIndex={isSelected ? 0 : -1}
    {...others}
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

export default styled(Tab)`
  ${styles};
`;

export { Tab as TabVanilla };
