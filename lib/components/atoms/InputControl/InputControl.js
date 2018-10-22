// @flow
import React from 'react';
import type { Node } from 'react';
import styled from 'styled-components';
import { InputVanilla as Input } from '../Input/Input';
import styles from './InputControl.style';

type Props = {
  id ?: string,
  type: string,
  disabled ?: boolean,
  checked ?: boolean,
  className ?: string,
};

const StyledInput = styled(Input)`${styles}`;

const InputControl = ({
  id,
  type,
  checked,
  disabled,
  className,
  ...otherProps
}: Props): Node => (
  <React.Fragment>
    <StyledInput
      id={id}
      className={className}
      type={type}
      defaultChecked={checked}
      disabled={disabled}
      {...otherProps}
    />
    <span type={type} disabled={disabled} />
  </React.Fragment>
);

InputControl.defaultProps = {
  id: '',
  checked: false,
  disabled: false,
  className: '',
};

export default InputControl;
