// @flow
import React from 'react';
import type { Node } from 'react';
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
  register?: Function,
  children?: Node,
  label?: string,
  labelProps?: {},
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
  register,
  ...otherProps
}: Props): Node => (
  <Label
    className={className}
    htmlFor={id}
    showlabelbeforeinput={showLabelBeforeInput.toString()}
    {...labelProps}
  >
    <Input
      id={id}
      name={name}
      type={type}
      defaultChecked={checked}
      disabled={disabled}
      ref={register}
      {...otherProps}
    />
    <span type={type} />
    <div>{children || label}</div>
  </Label>
);

InputChoice.defaultProps = {
  checked: undefined,
  disabled: false,
  className: '',
  children: '',
  label: '',
  labelProps: {},
  showLabelBeforeInput: false,
  register: null,
};

export default styled(InputChoice)`
  ${styles};
`;
export { InputChoice as InputChoiceVanilla };
