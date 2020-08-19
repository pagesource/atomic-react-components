import React from 'react';
import PropTypes from 'prop-types';
import { Field, ErrorMessage } from 'formik';
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
  ...others
}) => {
  const inputID = id || uniqueId('input-');
  return (
    // TODO: Add support for label position
    <div className={className}>
      <Label htmlFor={id} {...labelProps}>
        {label}
      </Label>
      <Field id={id} name={name} type={type} {...fieldProps}>
        {({ field, form }) => {
          const { handleChange, handleBlur } = form;
          return (
            <Input
              type={type}
              {...others}
              {...field}
              aria-describedby={validationInstructions ? `${inputID}-instruction` : null}
              onChange={(e) => {
                handleChange(e);
                if (typeof onChange === 'function') onChange(e, form);
              }}
              onBlur={(e) => {
                handleBlur(e);
                if (typeof onBlur === 'function') onBlur(e, form);
              }}
            />
          );
        }}
      </Field>
      {validationInstructions ? (
        <Para id={`${inputID}-instruction`}>{validationInstructions}</Para>
      ) : (
        ''
      )}
      <ErrorMessage name={name} component={FieldError} />
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
  value: PropTypes.string,
  placeholder: PropTypes.string,
  validationInstructions: PropTypes.string,
  onChange: PropTypes.func,
  onBlur: PropTypes.func,
};

FieldInput.defaultProps = {
  placeholder: '',
  validationInstructions: '',
  className: '',
  type: 'text',
  labelProps: {},
  value: '',
  fieldProps: {},
  onChange: null,
  onBlur: null,
};

const StyledFieldInput = styled(FieldInput)`
  ${styles};
`;

export default StyledFieldInput;
export { FieldInput as FieldInputVanilla };
