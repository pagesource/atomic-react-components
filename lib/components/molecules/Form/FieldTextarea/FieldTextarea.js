import React from 'react';
import PropTypes from 'prop-types';

import styled from 'styled-components';
import Textarea from '../../../atoms/Textarea';
import FieldError from '../../../atoms/FieldError';
import Label from '../../../atoms/Label';
import styles from './FieldTextarea.style';

const FieldTextarea = ({
  id,
  className,
  name,
  onChange,
  label,
  labelProps,
  register,
  errors,
  ...others
}) => (
  <div className={className}>
    <Label htmlFor={id} {...labelProps}>
      {label}
    </Label>
    <Textarea name={name} ref={register} {...others} />
    {errors[name] && <FieldError>{errors[name].message}</FieldError>}
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
  register: PropTypes.func.isRequired,
  errors: PropTypes.objectOf(PropTypes.object),
};

FieldTextarea.defaultProps = {
  className: '',
  value: '',
  onChange: null,
  labelProps: {},
  errors: {},
};

const StyledFieldTextarea = styled(FieldTextarea)`
  ${styles};
`;

export default StyledFieldTextarea;

export { FieldTextarea as FieldTextareaVanilla };
