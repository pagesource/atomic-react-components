// @flow
import React from 'react';
import type { Node } from 'react';
import { Field, ErrorMessage } from 'formik';
import styled from 'styled-components';
import InputChoice from '../../../atoms/InputChoice';
import FieldError from '../../../atoms/FieldError';
import styles from './FieldCheckbox.style';

type Props = {
  id?: string,
  className?: string,
  name: string,
  fieldProps?: Object,
};

const FieldCheckbox = ({ id, className, name, fieldProps, ...others }: Props): Node => (
  <div className={className}>
    <Field
      name={name}
      render={({ field }) => <InputChoice type="checkbox" id={id || name} {...field} {...others} />}
      {...fieldProps}
    />
    <ErrorMessage name={name} component={FieldError} />
  </div>
);

FieldCheckbox.defaultProps = {
  id: '',
  className: '',
  fieldProps: {},
};

export default styled(FieldCheckbox)`
  ${styles};
`;
export { FieldCheckbox as FieldCheckboxVanilla };
