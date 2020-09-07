import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import styles from './Para.style';

const Para = ({ children, className, inheritedStyles, elementLocator, ...others }) => {
  const dataLocator = elementLocator
    ? {
        'data-locator': `para-${elementLocator}`,
      }
    : {};

  return (
    <p {...others} className={className} {...dataLocator}>
      {children}
    </p>
  );
};

Para.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  inheritedStyles: PropTypes.string,
  elementLocator: PropTypes.string,
};

Para.defaultProps = {
  inheritedStyles: '',
  className: '',
  elementLocator: '',
};

const StyledPara = styled(Para)`
  ${styles};
`;

export default StyledPara;

export { Para as ParaVanilla };
