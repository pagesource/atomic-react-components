/**
 *
 * StickyBar
 *
 */
import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import styles from './StickyBar.style';
import List from '../List';

const Item = ({ children }) => <li>{children}</li>;

const StickyBar = ({ className, children }) => {
  return (
    <nav aria-labelledby="StickyToolBar">
      <List className={className} id="StickyToolBar" noMargin noDefaultView>
        {children}
      </List>
    </nav>
  );
};

StickyBar.Item = Item;

StickyBar.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node.isRequired,
};

Item.propTypes = {
  children: PropTypes.node.isRequired,
};

StickyBar.defaultProps = {
  className: 'sticky-bar',
};

const StyledStickyBar = styled(StickyBar)`
  ${styles};
`;

export default StyledStickyBar;

export { StickyBar as StickyBarVanilla };
