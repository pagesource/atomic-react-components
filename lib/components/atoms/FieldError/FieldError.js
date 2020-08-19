import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Para from '../Para';
import { getLabelFromChildren } from '../../../core/utils/elementLocator';
import styles from './FieldError.style';

const FieldError = ({
  className,
  children,
  dataSlnmId,
  inheritedStyles,
  elementLocator,
  ...others
}) => {
  return (
    <Para
      {...others}
      className={className}
      aria-live="assertive"
      role="alert"
      data-slnm-id={dataSlnmId ? `${dataSlnmId}-error` : ''}
      data-locator={elementLocator || `field-error-${getLabelFromChildren(children)}`}
    >
      {children}
    </Para>
  );
};

FieldError.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node.isRequired,
  dataSlnmId: PropTypes.string,
  inheritedStyles: PropTypes.string,
  elementLocator: PropTypes.string,
};

FieldError.defaultProps = {
  dataSlnmId: '',
  inheritedStyles: '',
  className: '',
  elementLocator: '',
};

const StyledFieldError = styled(FieldError)`
  ${styles};
`;

export default StyledFieldError;

export { FieldError as FieldErrorVanilla };
