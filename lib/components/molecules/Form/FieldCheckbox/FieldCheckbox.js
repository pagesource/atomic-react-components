import React from 'react';
import PropTypes from 'prop-types';
import { Field, ErrorMessage } from 'formik';
import styled from 'styled-components';
import InputChoice from '../../InputChoice';
import FieldError from '../../../atoms/FieldError';
import styles from './FieldCheckbox.style';

const FieldCheckbox = ({ id, className, name, onChange, ...others }) => (
  <div className={className}>
    <Field name={name}>
      {({ field, form }) => {
        const { handleChange } = form;
        return (
          <InputChoice
            type="checkbox"
            id={id || name}
            {...field}
            {...others}
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

FieldCheckbox.propTypes = {
  id: PropTypes.string,
  className: PropTypes.string,
  name: PropTypes.string,
  onChange: PropTypes.func,
};

FieldCheckbox.defaultProps = {
  id: '',
  className: '',
  onChange: null,
  name: '',
};

const StyledFieldCheckbox = styled(FieldCheckbox)`
  ${styles};
`;

export default StyledFieldCheckbox;

export { FieldCheckbox as FieldCheckboxVanilla };
