/**
 *
 * Tab
 *
 */
import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import styles from './Tab.style';
import Anchor from '../../../atoms/Anchor';

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
}) => (
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

Tab.propTypes = {
  tabId: PropTypes.string.isRequired,
  index: PropTypes.number.isRequired,
  className: PropTypes.string,
  children: PropTypes.node.isRequired,
  isSelected: PropTypes.bool.isRequired,
  onClick: PropTypes.func.isRequired,
  onKeyDown: PropTypes.func.isRequired,
  inheritedStyles: PropTypes.string,
};

Tab.defaultProps = {
  className: '',
  inheritedStyles: '',
};

const StyledTab = styled(Tab)`
  ${styles};
`;

export default StyledTab;

export { Tab as TabVanilla };
