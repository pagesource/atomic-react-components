/**
 *
 * List
 *
 */
import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import styles from './List.style';

const List = ({ className, ListType = 'ul', children, ...others }) => (
  <ListType {...others} className={className}>
    {children}
  </ListType>
);

List.propTypes = {
  ListType: PropTypes.oneOf(['ul', 'ol']),
  className: PropTypes.string,
  children: PropTypes.node.isRequired,
  nested: PropTypes.bool,
  inline: PropTypes.bool,
  noDefaultView: PropTypes.bool,
  borderSeparator: PropTypes.bool,
  noMargin: PropTypes.bool,
  inheritedStyles: PropTypes.string,
};

List.defaultProps = {
  inheritedStyles: '',
  ListType: 'ul',
  className: '',
  borderSeparator: false,
  noDefaultView: false,
  inline: false,
  nested: false,
  noMargin: false,
};

const StyledList = styled(List)`
  ${styles};
`;

export default StyledList;

export { List as ListVanilla };
