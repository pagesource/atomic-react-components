/**
 *
 * Textarea
 *
 */
import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import styles from './Textarea.style';

const Textarea = React.forwardRef(
  ({ id, className, elementLocator, title, name, placeholder, value, resize, ...others }, ref) => (
    <textarea
      id={id}
      className={className}
      name={name}
      title={title}
      placeholder={placeholder}
      defaultValue={value}
      resize={resize}
      ref={ref}
      data-locator={elementLocator || `textarea-input-${name}-${id}`}
      {...others}
    />
  )
);

Textarea.propTypes = {
  id: PropTypes.string.isRequired,
  className: PropTypes.string,
  elementLocator: PropTypes.string,
  title: PropTypes.string,
  name: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
  value: PropTypes.string,
  resize: PropTypes.string,
  ref: PropTypes.element,
};

Textarea.defaultProps = {
  className: '',
  elementLocator: '',
  title: '',
  placeholder: '',
  value: '',
  resize: 'none',
  ref: null,
};

const StyledTextArea = styled(Textarea)`
  ${styles};
`;

export default StyledTextArea;
export { Textarea as TextareaVanilla };
