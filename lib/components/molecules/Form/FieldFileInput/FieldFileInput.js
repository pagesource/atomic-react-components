// @flow
import React from 'react';
import type { Node } from 'react';
import { Field } from 'formik';
import styled from 'styled-components';

import Input from '../../../atoms/Input';
import Button from '../../../atoms/Button';
import styles from './FieldFileInput.style';

type Props = {
  id: string,
  className?: string,
  type?: string,
  name: string,
  label: Node,
  labelProps?: Object,
  fieldProps?: Object,
  value?: string | number,
  placeholder?: string,
  onChange?: Function,
  onBlur?: Function,
};

const FieldFileInput = ({
  id,
  className,
  type,
  name,
  label,
  onChange,
  onBlur,
  labelProps,
  fieldProps,
  ...others
}: Props): Node => (
  // TODO: Add support for label position
  <div className={className}>
    <Field
      id={id}
      name={name}
      type={type}
      render={({ field, form }) => {
        const { handleChange, handleBlur } = form;
        return (
          <Input
            type={type}
            {...others}
            {...field}
            onChange={e => {
              handleChange(e);
              if (typeof onChange === 'function') onChange(e, form);
            }}
            onBlur={e => {
              handleBlur(e);
              if (typeof onBlur === 'function') onBlur(e, form);
            }}
          />
        );
      }}
      {...fieldProps}
    />
    <Button secondary type="button">
      Upload...
    </Button>
  </div>
);

FieldFileInput.defaultProps = {
  placeholder: '',
  className: '',
  type: 'text',
  labelProps: {},
  value: '',
  fieldProps: {},
  onChange: null,
  onBlur: null,
};

export default styled(FieldFileInput)`
  ${styles};
`;

export { FieldFileInput };
