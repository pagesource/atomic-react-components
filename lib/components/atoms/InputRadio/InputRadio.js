// @flow
import React from 'react';
import type { Node } from 'react';
import styled from 'styled-components';
import InputControl from '../InputControl';
import styles from './InputRadio.style';
import Label from '../Label';

type Props = {
  id ?: string,
  name: string,
  className ?: string,
  showLabelBeforeInput ?: boolean,
  labelProps ?: {},
  label ?: Node,
  children ?: Node
};

const InputRadio = ({
  id,
  className,
  showLabelBeforeInput,
  name,
  children,
  label,
  labelProps,
  ...otherProps
}: Props): Node => (
  <Label className={className} htmlFor={id} {...labelProps}>
    <InputControl id={id} type="radio" name={name} {...otherProps} />
    <span>{children || label}</span>
  </Label>
);

InputRadio.defaultProps = {
  id: '',
  className: '',
  labelProps: {},
  children: '',
  label: '',
  showLabelBeforeInput: false,
};

export default styled(InputRadio)`${styles}`;
export { InputRadio as InputRadioVanilla };
