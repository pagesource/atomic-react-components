// @flow
import React from 'react';
import type { Node } from 'react';
import styled from 'styled-components';
import InputControl from '../InputControl';
import styles from './InputRadio.style';
import Label from '../Label/Label';

type Props = {
  id ?: string,
  name: string,
  className ?: string,
  inputClassName ?: string,
  showLabelBeforeInput ?: boolean,
  labelProps ?: {},
  label ?: Node,
  children ?: Node
};

const InputRadio = ({
  id,
  className,
  inputClassName,
  showLabelBeforeInput,
  name,
  children,
  label,
  labelProps,
  ...otherProps
}: Props): Node => (
  <Label className={className} htmlFor={id} {...labelProps}>
    {!showLabelBeforeInput && <InputControl id={id} type="radio" name={name} className={inputClassName} {...otherProps} />}
    {children || label}
    {showLabelBeforeInput && <InputControl id={id} type="radio" name={name} className={inputClassName} {...otherProps} />}
  </Label>
);

InputRadio.defaultProps = {
  id: '',
  className: '',
  inputClassName: '',
  labelProps: {},
  children: '',
  label: '',
  showLabelBeforeInput: false,
};

export default styled(InputRadio)`${styles}`;
