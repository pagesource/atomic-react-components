import React from 'react';
import PropTypes from 'prop-types';
import { Field, ErrorMessage, FieldArray } from 'formik';
import styled from 'styled-components';
import InputChoice from '../../InputChoice';
import FieldError from '../../../atoms/FieldError';
import styles from './FieldRadioGroup.style';

const FieldRadioGroup = ({ id, className, name, radioGroupArray, ...others }) => (
  <FieldArray name={name}>
    {() => (
      <div {...others} className={className} id={id}>
        {radioGroupArray.map((radioGroup, index) => (
          <Field key={radioGroup.id || `${name}_${index}`} name={name}>
            {({ field, form }) => {
              const { handleChange } = form;
              const { onChange } = radioGroup;
              return (
                <InputChoice
                  type="radio"
                  id={radioGroup.id || `${name}_${index}`}
                  onChange={(e) => {
                    handleChange(e);
                    if (typeof onChange === 'function') onChange(e, form);
                  }}
                  {...field}
                  {...radioGroup}
                />
              );
            }}
          </Field>
        ))}
        <ErrorMessage name={name} component={FieldError} />
      </div>
    )}
  </FieldArray>
);

FieldRadioGroup.propTypes = {
  id: PropTypes.string,
  className: PropTypes.string,
  name: PropTypes.string.isRequired,
  radioGroupArray: PropTypes.arrayOf(PropTypes.object).isRequired,
};

FieldRadioGroup.defaultProps = {
  id: '',
  className: '',
};

const StyledFieldRadioGroup = styled(FieldRadioGroup)`
  ${styles};
`;

export default StyledFieldRadioGroup;

export { FieldRadioGroup as FieldRadioGroupVanilla };
