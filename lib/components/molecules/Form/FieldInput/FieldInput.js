import React from 'react';
import PropTypes from 'prop-types';
import uniqueId from 'lodash/uniqueId';
import styled from 'styled-components';
import Input from '../../../atoms/Input';
import FieldError from '../../../atoms/FieldError';
import Label from '../../../atoms/Label';
import styles from './FieldInput.style';
import Para from '../../../atoms/Para';

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
}) => {
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

FieldInput.propTypes = {
  id: PropTypes.string.isRequired,
  className: PropTypes.string,
  type: PropTypes.string,
  name: PropTypes.string.isRequired,
  label: PropTypes.node.isRequired,
  labelProps: PropTypes.objectOf(PropTypes.object),
  fieldProps: PropTypes.objectOf(PropTypes.object),
  placeholder: PropTypes.string,
  validationInstructions: PropTypes.string,
  onChange: PropTypes.func,
  onBlur: PropTypes.func,
  register: PropTypes.func.isRequired,
  errors: PropTypes.objectOf(PropTypes.object),
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
  errors: {},
};

const StyledFieldInput = styled(FieldInput)`
  ${styles};
`;

export default StyledFieldInput;
export { FieldInput as FieldInputVanilla };
