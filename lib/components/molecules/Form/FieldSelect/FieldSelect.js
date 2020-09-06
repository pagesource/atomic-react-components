import React from 'react';
import PropTypes from 'prop-types';
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
  register,
  errors,
  ...others
}) => (
  <div className={className}>
    <Label htmlFor={id} {...labelProps}>
      {label}
    </Label>
    <Select {...others} ref={register} name={name} />
    {errors[name] && <FieldError>{errors[name].message}</FieldError>}
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
  register: PropTypes.func.isRequired,
  errors: PropTypes.objectOf(PropTypes.object),
};

FieldSelect.defaultProps = {
  labelProps: {},
  fieldProps: {},
  onChange: null,
  errors: {},
};

const StyledFieldSelect = styled(FieldSelect)`
  ${styles};
`;

export default StyledFieldSelect;

export { FieldSelect as FieldSelectVanilla };
