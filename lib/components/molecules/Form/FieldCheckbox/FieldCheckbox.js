import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import InputChoice from '../../InputChoice';
import FieldError from '../../../atoms/FieldError';
import styles from './FieldCheckbox.style';

const FieldCheckbox = ({ id, className, name, register, errors, ...others }) => (
  <div className={className}>
    <InputChoice type="checkbox" id={id || name} {...others} name={name} register={register} />
    {errors[name] && <FieldError>{errors[name].message}</FieldError>}
  </div>
);

FieldCheckbox.propTypes = {
  id: PropTypes.string,
  className: PropTypes.string,
  name: PropTypes.string,
  onChange: PropTypes.func,
  register: PropTypes.func.isRequired,
  errors: PropTypes.objectOf(PropTypes.object).isRequired,
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
