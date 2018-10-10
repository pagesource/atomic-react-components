// @flow
import React from 'react';
import type { Node } from 'react';
import { Field, ErrorMessage } from 'formik';
import styled from 'styled-components';
import AtomInput from '../../../atoms/Input';
import FieldError from '../../../atoms/FieldError';
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
  fieldProps ?: Object,
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
  fieldProps,
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
      {...fieldProps}
    />
    <ErrorMessage name={name} component={FieldError} />
  </div>

);

Input.defaultProps = {
  placeholder: '',
  className: '',
  title: '',
  type: 'text',
  labelProps: {},
  value: '',
  fieldProps: {},
};

export default styled(Input)`${styles}`;
export { Input as FormInputVanilla };
