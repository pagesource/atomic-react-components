/**
 *
 * Icon
 *
 */
import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import classnames from 'classnames';

import styles from './Icon.style';

const Icon = ({ className, width, title, height, children, fill }) => {
  const childrenNode = React.Children.map(children, (child) => {
    return React.cloneElement(child, {
      width: width || '25px',
      fill: fill || '#000',
      height: height || '25px',
      display: 'inline-flex',
    });
  });
  return (
    <span role="presentation" aria-label={title} className={classnames('icon-wrapper', className)}>
      {childrenNode}
    </span>
  );
};

const StyledIcon = styled(Icon)`
  ${styles};
`;

Icon.propTypes = {
  className: PropTypes.string,
  width: PropTypes.string,
  height: PropTypes.string,
  title: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
  fill: PropTypes.string,
};

Icon.defaultProps = {
  className: '',
  width: '',
  height: '',
  fill: '',
};

export default StyledIcon;

export { Icon as IconVanilla };
