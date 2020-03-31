// @flow
import React from 'react';
import type { Node, ComponentType } from 'react';
import uniqueId from 'lodash/uniqueId';
import styled from 'styled-components';
import Input from '../../../atoms/Input';
import FieldError from '../../../atoms/FieldError';
import Label from '../../../atoms/Label';
import styles from './FieldInput.style';
import Para from '../../../atoms/Para';

type Props = {
  id: string,
  className?: string,
  type?: string,
  name: string,
  label: Node,
  register: Function,
  errors: Object,
  labelProps?: Object,
  fieldProps?: Object,
  placeholder?: string,
  validationInstructions?: string,
  onChange?: Function,
  onBlur?: Function,
};

const FieldInput = ({
  id,
  className,
  type,
  name,
  label,
  onChange,
  onBlur,
  labelProps,
  fieldProps,
  validationInstructions,
  register,
  errors,
  ...others
}: Props): Node => {
  const inputID = id || uniqueId('input-');
  return (
    // TODO: Add support for label position
    <div className={className}>
      <Label htmlFor={id} {...labelProps}>
        {label}
      </Label>
      <Input
        type={type}
        name={name}
        {...others}
        aria-describedby={validationInstructions ? `${inputID}-instruction` : null}
        ref={register}
      />
      {validationInstructions ? (
        <Para id={`${inputID}-instruction`}>{validationInstructions}</Para>
      ) : (
        ''
      )}
      {errors[name] && <FieldError>{errors[name].message}</FieldError>}
    </div>
  );
};

FieldInput.defaultProps = {
  placeholder: '',
  validationInstructions: '',
  className: '',
  type: 'text',
  labelProps: {},
  fieldProps: {},
  onChange: null,
  onBlur: null,
};

const StyledFieldInput: ComponentType<Props> = styled(FieldInput)`
  ${styles};
`;

export default StyledFieldInput;
export { FieldInput as FieldInputVanilla };
