// @flow
import React from 'react';
import type { Node } from 'react';
import { Field, ErrorMessage } from 'formik';
import styled from 'styled-components';
import Label from '../../../atoms/Label';
import AtomSelect from '../../../atoms/Select';
import FieldError from '../../../atoms/FieldError';
import styles from './Select.style';


type Props = {
  id: string,
  className: string,
  name: string,
  label: Node,
  labelProps ?: Object,
  fieldProps ?: Object,
};

const Select = ({
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
      render={({ field }) => <AtomSelect {...others} {...field} />}
      {...fieldProps}
    />
    <ErrorMessage name={name} component={FieldError} />
  </div>
);

Select.defaultProps = {
  labelProps: {},
  fieldProps: {},
};

export default styled(Select)`${styles}`;
export { Select as SelectVanilla };
