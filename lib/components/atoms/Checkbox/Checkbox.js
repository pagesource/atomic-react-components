// @flow
import React from 'react';
import type { Node } from 'react';
import styled from 'styled-components';
import { InputVanilla } from '../Input/Input';
import { inputStyles, labelStyles } from './Checkbox.style';
import Label from '../Label/Label';

type Props = {
  id ?: string,
  name: string,
  ariaLabel ?: string,
  value: string,
  inputClassName ?: string,
  labelClassName ?: string,
  inputProps ?: {},
  disabled ?: boolean,
  checked ?: boolean,
  children ?: Node
};

const StyledInput = styled(InputVanilla)`${inputStyles}`;
const StyledLabel = styled(Label)`${labelStyles}`;


const Checkbox = ({
  id,
  name,
  ariaLabel,
  value,
  inputClassName,
  labelClassName,
  disabled,
  checked,
  inputProps,
  children,
}: Props): Node => (
  <React.Fragment>
    <StyledInput
      type="checkbox"
      id={id || `${name}_${value}`}
      name={name}
      className={inputClassName}
      aria-label={ariaLabel}
      value={value}
      disabled={disabled}
      defaultChecked={checked}
      {...inputProps}
    />
    <StyledLabel htmlFor={id || `${name}_${value}`} className={labelClassName}>
      <span />
      <div>{children}</div>
    </StyledLabel>
  </React.Fragment>
);

Checkbox.defaultProps = {
  id: '',
  inputClassName: '',
  labelClassName: '',
  ariaLabel: '',
  inputProps: {},
  disabled: false,
  checked: false,
  children: '',
};

export default Checkbox;
