// @flow
import React from 'react';
import type { Node, ComponentType } from 'react';
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
  register: Function,
  errors: Object,
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
  register,
  errors,
  ...others
}: Props): Node => (
  <div className={className}>
    <Label htmlFor={id} {...labelProps}>
      {label}
    </Label>
    <Select {...others} ref={register} name={name} />
    {errors[name] && <FieldError>{errors[name].message}</FieldError>}
  </div>
);

FieldSelect.defaultProps = {
  labelProps: {},
  fieldProps: {},
  onChange: null,
};

const StyledFieldSelect: ComponentType<Props> = styled(FieldSelect)`
  ${styles};
`;

export default StyledFieldSelect;

export { FieldSelect as FieldSelectVanilla };
