import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import InputChoice from '../../InputChoice';
import FieldError from '../../../atoms/FieldError';
import styles from './FieldRadioGroup.style';

const FieldRadioGroup = ({ id, className, name, radioGroupArray, register, errors, ...others }) => (
  <div className={className} id={id} {...others}>
    {radioGroupArray.map((radioGroup, index) => (
      <InputChoice
        type="radio"
        id={radioGroup.id || `${name}_${index}`}
        name={name}
        {...radioGroup}
        register={register}
      />
    ))}
    {errors[name] && <FieldError>{errors[name].message}</FieldError>}
  </div>
);

FieldRadioGroup.propTypes = {
  id: PropTypes.string,
  className: PropTypes.string,
  name: PropTypes.string.isRequired,
  radioGroupArray: PropTypes.arrayOf(PropTypes.object).isRequired,
  register: PropTypes.func.isRequired,
  errors: PropTypes.objectOf(PropTypes.object).isRequired,
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
