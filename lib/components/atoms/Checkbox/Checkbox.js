// @flow
import React from 'react';
import type { Node } from 'react';
import styled from 'styled-components';
import InputControl from '../InputControl';
import styles from './Checkbox.style';
import Label from '../Label';

type Props = {
  id ?: string,
  name: string,
  className ?: string,
  showLabelBeforeInput ?: boolean,
  label ?: string,
  labelProps ?: {},
  children ?: Node
};

const Checkbox = ({
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
    <InputControl id={id} type="checkbox" name={name} {...otherProps} />
    <span>{children || label}</span>
  </Label>
);

Checkbox.defaultProps = {
  id: '',
  className: '',
  label: '',
  labelProps: {},
  children: '',
  showLabelBeforeInput: false,
};

export default styled(Checkbox)`${styles}`;
export { Checkbox as CheckboxVanilla };
