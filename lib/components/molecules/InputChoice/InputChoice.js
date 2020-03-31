// @flow
import React from 'react';
import type { Node, ComponentType } from 'react';
import styled from 'styled-components';
import { InputVanilla as Input } from '../../atoms/Input';
import Label from '../../atoms/Label';
import styles from './InputChoice.style';

type Props = {
  id: string,
  name: string,
  type: string,
  disabled?: boolean,
  checked?: boolean,
  className?: string,
  children?: Node,
  label?: string,
  labelProps?: Object,
  showLabelBeforeInput?: boolean,
};

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
}: Props): Node => (
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

InputChoice.defaultProps = {
  checked: undefined,
  labelProps: {},
  disabled: false,
  className: '',
  children: '',
  label: '',
  showLabelBeforeInput: false,
};

const StyledInputChoice: ComponentType<Props> = styled(InputChoice)`
  ${styles};
`;

export default StyledInputChoice;

export { InputChoice as InputChoiceVanilla };
