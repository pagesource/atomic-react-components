// @flow
import React from 'react';
import type { Node } from 'react';
import { Field, ErrorMessage } from 'formik';
import styled from 'styled-components';
import Label from '../../../atoms/Label';
import Select from '../../../atoms/Select';
import FieldError from '../../../atoms/FieldError';
import styles from './FieldSelect.style';


type Props = {
  id: string,
  className: string,
  name: string,
  label: Node,
  labelProps ?: Object,
  fieldProps ?: Object,
};

const FieldSelect = ({
  id,
  className,
  name,
  label,
  labelProps,
  fieldProps,
  ...others
}: Props): Node => (
  <div className={className}>
    <Label htmlFor={id} {...labelProps}>{label}</Label>
    <Field
      name={name}
      component="select"
      render={({ field }) => <Select {...others} {...field} />}
      {...fieldProps}
    />
    <ErrorMessage name={name} component={FieldError} />
  </div>
);

FieldSelect.defaultProps = {
  labelProps: {},
  fieldProps: {},
};

export default styled(FieldSelect)`${styles}`;
export { FieldSelect as FieldSelectVanilla };
