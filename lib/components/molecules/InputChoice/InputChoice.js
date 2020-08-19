import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { InputVanilla as Input } from '../../atoms/Input';
import Label from '../../atoms/Label';
import styles from './InputChoice.style';

const InputChoice = ({
  id,
  name,
  type,
  checked,
  disabled,
  className,
  label,
  children,
  showLabelBeforeInput,
  labelProps,
  ...otherProps
}) => (
  <Label
    className={className}
    htmlFor={id}
    showLabelBeforeInput={showLabelBeforeInput}
    {...labelProps}
  >
    <Input
      {...otherProps}
      id={id}
      name={name}
      type={type}
      defaultChecked={checked}
      disabled={disabled}
    />
    <span type={type} />
    <div>{children || label}</div>
  </Label>
);

InputChoice.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  disabled: PropTypes.bool,
  checked: PropTypes.bool,
  className: PropTypes.string,
  children: PropTypes.node,
  label: PropTypes.string,
  labelProps: PropTypes.objectOf(PropTypes.object),
  showLabelBeforeInput: PropTypes.bool,
};

InputChoice.defaultProps = {
  checked: undefined,
  labelProps: {},
  disabled: false,
  className: '',
  children: '',
  label: '',
  showLabelBeforeInput: false,
};

const StyledInputChoice = styled(InputChoice)`
  ${styles};
`;

export default StyledInputChoice;

export { InputChoice as InputChoiceVanilla };
