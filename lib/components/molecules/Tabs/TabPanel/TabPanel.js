/**
 *
 * TabPanel
 *
 */
import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import styles from './TabPanel.style';

const TabPanel = ({ children, className, index, isSelected, tabId, ...others }) => (
  <div
    {...others}
    id={tabId}
    className={className}
    role="tabpanel"
    aria-hidden={!isSelected}
    aria-labelledby={`tab_${index}`}
    hidden={!isSelected}
  >
    {children}
  </div>
);

TabPanel.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node.isRequired,
  isSelected: PropTypes.bool.isRequired,
  index: PropTypes.number.isRequired,
  inheritedStyles: PropTypes.string,
  tabId: PropTypes.string.isRequired,
};

TabPanel.defaultProps = {
  className: '',
  inheritedStyles: '',
};

const StyledTabPanel = styled(TabPanel)`
  ${styles};
`;

export default StyledTabPanel;

export { TabPanel as TabPanelVanilla };
