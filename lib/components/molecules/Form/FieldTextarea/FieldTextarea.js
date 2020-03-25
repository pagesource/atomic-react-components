// @flow
import React from 'react';
import type { Node } from 'react';
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
  register: Function,
  errors: Object,
  labelProps?: {
    className?: string,
  },
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
  register,
  errors,
  ...others
}: Props): Node => (
  <div className={className}>
    <Label htmlFor={id} {...labelProps}>
      {label}
    </Label>
    <Textarea name={name} ref={register} {...others} />
    {errors[name] && <FieldError>{errors[name].message}</FieldError>}
  </div>
);

FieldTextarea.defaultProps = {
  className: '',
  labelProps: {},
  value: '',
  onChange: null,
};

export default styled(FieldTextarea)`
  ${styles};
`;

export { FieldTextarea as FieldTextareaVanilla };
