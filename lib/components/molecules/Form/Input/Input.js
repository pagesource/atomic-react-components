// @flow
import React from 'react';
import type { Node } from 'react';
import { Field, ErrorMessage } from 'formik';
import styled from 'styled-components';
import AtomInput from '../../../atoms/Input';
import Label from '../../../atoms/Label';
import styles from './Input.style';


type Props = {
  id: string,
  className ?: string,
  type ?: string,
  title ?: string,
  name: string,
  label: Node,
  labelProps ?: Object,
  value ?: string | number,
  placeholder ?: string,
};

const Input = ({
  id,
  className,
  type,
  name,
  label,
  labelProps,
  ...others
}: Props): Node => (
  // TODO: Add support for label position
  <div className={className}>
    <Label htmlFor={id} {...labelProps}>{label}</Label>
    <Field
      id={id}
      name={name}
      type={type}
      render={({ field }) => <AtomInput type={type} {...others} {...field} />}
    />
    <ErrorMessage name={name} />
  </div>

);

Input.defaultProps = {
  placeholder: '',
  className: '',
  title: '',
  type: 'text',
  labelProps: {},
  value: '',
};

export default styled(Input)`${styles}`;
export { Input as FormInputVanilla };
