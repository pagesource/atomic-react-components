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
  labelProps?: Object,
  fieldProps?: Object,
  onChange?: Function,
};

const FieldSelect = ({
  id,
  className,
  name,
  label,
  onChange,
  labelProps,
  fieldProps,
  ...others
}: Props): Node => (
  <div className={className}>
    <Label htmlFor={id} {...labelProps}>
      {label}
    </Label>
    <Field name={name} {...fieldProps}>
      {({ field, form }) => {
        const { handleChange } = form;
        return (
          <Select
            {...others}
            {...field}
            onChange={e => {
              handleChange(e);
              if (typeof onChange === 'function') onChange(e, form);
            }}
          />
        );
      }}
    </Field>
    <ErrorMessage name={name} component={FieldError} />
  </div>
);

FieldSelect.defaultProps = {
  labelProps: {},
  fieldProps: {},
  onChange: null,
};

export default styled(FieldSelect)`
  ${styles};
`;
export { FieldSelect as FieldSelectVanilla };
