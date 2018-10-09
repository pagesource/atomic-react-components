// @flow
import React from 'react';
import type { Node } from 'react';
import { Field, ErrorMessage } from 'formik';
import styled from 'styled-components';
import Label from '../../../atoms/Label';
import AtomSelect from '../../../atoms/Select';
import styles from './Select.style';


type Props = {
  id: string,
  className: string,
  name: string,
  label: Node,
  labelProps: any,
};

const Select = ({
  id,
  className,
  name,
  label,
  labelProps,
  ...others
}: Props): Node => (
  <div className={className}>
    <Label htmlFor={id} {...labelProps}>{label}</Label>
    <Field
      name={name}
      component="select"
      render={({ field }) => <AtomSelect {...others} {...field} />}
    />
    <ErrorMessage name={name} />
  </div>
);

export default styled(Select)`${styles}`;
export { Select as SelectVanilla };
