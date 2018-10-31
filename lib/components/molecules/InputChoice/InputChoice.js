// @flow
import React from 'react';
import type { Node } from 'react';
import styled from 'styled-components';
import { InputVanilla as Input } from '../../atoms/Input';
import Label from '../../atoms/Label';
import styles from './InputChoice.style';

type Props = {
  id: string,
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
    <Input id={id} type={type} defaultChecked={checked} disabled={disabled} {...otherProps} />
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
};

export default styled(InputChoice)`
  ${styles};
`;
export { InputChoice as InputChoiceVanilla };
