import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import styles from './Input.style';

const Input = React.forwardRef(
  (
    { id, className, type, name, value, placeholder, ariaLabel, elementLocator, ...others },
    ref
  ) => {
    const propArray = {
      id,
      ref,
      'aria-label': ariaLabel,
      className,
      name,
      type,
      placeholder,
      'data-locator': elementLocator || `input-${type}-${name}`,
      ...others,
    };
    if (type === 'radio') propArray.value = value;
    return React.createElement('input', propArray);
  }
);

Input.propTypes = {
  id: PropTypes.string.isRequired,
  className: PropTypes.string,
  type: PropTypes.string,
  name: PropTypes.string.isRequired,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  placeholder: PropTypes.string,
  ariaLabel: PropTypes.string,
  elementLocator: PropTypes.string,
  ref: PropTypes.element,
};

Input.defaultProps = {
  placeholder: '',
  ariaLabel: '',
  className: '',
  type: 'text',
  value: '',
  elementLocator: '',
  ref: null,
};

const StyledInput = styled(Input)`
  ${styles};
`;

export default StyledInput;
export { Input as InputVanilla };
