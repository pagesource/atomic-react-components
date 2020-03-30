// @flow
import React from 'react';
import type { Node, ComponentType } from 'react';
import { Field, ErrorMessage } from 'formik';
import styled from 'styled-components';
import Textarea from '../../../atoms/Textarea';
import FieldError from '../../../atoms/FieldError';
import Label from '../../../atoms/Label';
import styles from './FieldTextarea.style';

type Props = {
  id: string,
  className?: string,
  name: string,
  label: Node,
  labelProps?: Object,
  value?: string,
  onChange?: string,
};

const FieldTextarea = ({
  id,
  className,
  name,
  onChange,
  label,
  labelProps,
  ...others
}: Props): Node => (
  <div className={className}>
    <Label htmlFor={id} {...labelProps}>
      {label}
    </Label>
    <Field id={id} name={name}>
      {({ field, form }) => {
        const { handleChange } = form;
        return (
          <Textarea
            {...others}
            {...field}
            onChange={(e) => {
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

FieldTextarea.defaultProps = {
  className: '',
  value: '',
  onChange: null,
  labelProps: {},
};

const StyledFieldTextarea: ComponentType<Props> = styled(FieldTextarea)`
  ${styles};
`;

export default StyledFieldTextarea;

export { FieldTextarea as FieldTextareaVanilla };
