/**
 *
 * Textarea
 *
 */
import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import styles from './Textarea.style';

const Textarea = ({
  id,
  className,
  elementLocator,
  title,
  name,
  placeholder,
  value,
  resize,
  ...others
}) => (
  <textarea
    {...others}
    id={id}
    className={className}
    name={name}
    title={title}
    placeholder={placeholder}
    defaultValue={value}
    resize={resize}
    data-locator={elementLocator || `textarea-input-${name}-${id}`}
  />
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
};

Textarea.defaultProps = {
  className: '',
  elementLocator: '',
  title: '',
  placeholder: '',
  value: '',
  resize: 'none',
};

const StyledTextArea = styled(Textarea)`
  ${styles};
`;

export default StyledTextArea;
export { Textarea as TextareaVanilla };
