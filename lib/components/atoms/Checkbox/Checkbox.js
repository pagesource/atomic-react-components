// @flow
import React from 'react';
import type { Node } from 'react';
import styled from 'styled-components';
import InputControl from '../InputControl';
import styles from './Checkbox.style';
import Label from '../Label/Label';

type Props = {
  id ?: string,
  name: string,
  className ?: string,
  inputClassName ?: string,
  showLabelBeforeInput ?: boolean,
  label ?: string,
  labelProps ?: {},
  children ?: Node
};

const Checkbox = ({
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
    {!showLabelBeforeInput && <InputControl id={id} type="checkbox" name={name} className={inputClassName} {...otherProps} />}
    {children || label}
    {showLabelBeforeInput && <InputControl id={id} type="checkbox" name={name} className={inputClassName} {...otherProps} />}
  </Label>
);

Checkbox.defaultProps = {
  id: '',
  className: '',
  inputClassName: '',
  label: '',
  labelProps: {},
  children: '',
  showLabelBeforeInput: false,
};

export default styled(Checkbox)`${styles}`;
