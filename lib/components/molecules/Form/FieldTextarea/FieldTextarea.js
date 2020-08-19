import React from 'react';
import PropTypes from 'prop-types';
import { Field, ErrorMessage } from 'formik';
import styled from 'styled-components';
import Textarea from '../../../atoms/Textarea';
import FieldError from '../../../atoms/FieldError';
import Label from '../../../atoms/Label';
import styles from './FieldTextarea.style';

const FieldTextarea = ({ id, className, name, onChange, label, labelProps, ...others }) => (
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

FieldTextarea.propTypes = {
  id: PropTypes.string.isRequired,
  className: PropTypes.string,
  name: PropTypes.string.isRequired,
  label: PropTypes.node.isRequired,
  labelProps: PropTypes.objectOf(PropTypes.object),
  value: PropTypes.string,
  onChange: PropTypes.string,
};

FieldTextarea.defaultProps = {
  className: '',
  value: '',
  onChange: null,
  labelProps: {},
};

const StyledFieldTextarea = styled(FieldTextarea)`
  ${styles};
`;

export default StyledFieldTextarea;

export { FieldTextarea as FieldTextareaVanilla };
