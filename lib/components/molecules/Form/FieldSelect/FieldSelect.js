import React from 'react';
import PropTypes from 'prop-types';
import { Field, ErrorMessage } from 'formik';
import styled from 'styled-components';
import Label from '../../../atoms/Label';
import Select from '../../../atoms/Select';
import FieldError from '../../../atoms/FieldError';
import styles from './FieldSelect.style';

const FieldSelect = ({
  id,
  className,
  name,
  label,
  onChange,
  labelProps,
  fieldProps,
  ...others
}) => (
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

FieldSelect.propTypes = {
  id: PropTypes.string.isRequired,
  className: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  label: PropTypes.node.isRequired,
  labelProps: PropTypes.objectOf(PropTypes.object),
  fieldProps: PropTypes.objectOf(PropTypes.object),
  onChange: PropTypes.func,
};

FieldSelect.defaultProps = {
  labelProps: {},
  fieldProps: {},
  onChange: null,
};

const StyledFieldSelect = styled(FieldSelect)`
  ${styles};
`;

export default StyledFieldSelect;

export { FieldSelect as FieldSelectVanilla };
