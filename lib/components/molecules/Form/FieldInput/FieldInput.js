// @flow
import React from 'react';
import type { Node } from 'react';
import { Field, ErrorMessage } from 'formik';
import styled from 'styled-components';
import Input from '../../../atoms/Input';
import FieldError from '../../../atoms/FieldError';
import Label from '../../../atoms/Label';
import styles from './FieldInput.style';


type Props = {
  id: string,
  className ?: string,
  type ?: string,
  name: string,
  label: Node,
  labelProps ?: Object,
  fieldProps ?: Object,
  value ?: string | number,
  placeholder ?: string,
};

const FieldInput = ({
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
      render={({ field }) => <Input type={type} {...others} {...field} />}
      {...fieldProps}
    />
    <ErrorMessage name={name} component={FieldError} />
  </div>

);

FieldInput.defaultProps = {
  placeholder: '',
  className: '',
  type: 'text',
  labelProps: {},
  value: '',
  fieldProps: {},
};

export default styled(FieldInput)`${styles}`;
export { FieldInput as FieldInputVanilla };
