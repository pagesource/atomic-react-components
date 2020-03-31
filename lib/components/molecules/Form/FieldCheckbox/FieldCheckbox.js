// @flow
import React from 'react';
import type { Node, ComponentType } from 'react';
import styled from 'styled-components';
import InputChoice from '../../InputChoice';
import FieldError from '../../../atoms/FieldError';
import styles from './FieldCheckbox.style';

type Props = {
  id?: string,
  className?: string,
  name: string,
  onChange?: Function,
  register: Function,
  errors: Object,
};

const FieldCheckbox = ({ id, className, name, register, errors, ...others }: Props): Node => (
  <div className={className}>
    <InputChoice type="checkbox" id={id || name} {...others} name={name} register={register} />
    {errors[name] && <FieldError>{errors[name].message}</FieldError>}
  </div>
);

FieldCheckbox.defaultProps = {
  id: '',
  className: '',
  onChange: null,
};

const StyledFieldCheckbox: ComponentType<Props> = styled(FieldCheckbox)`
  ${styles};
`;

export default StyledFieldCheckbox;

export { FieldCheckbox as FieldCheckboxVanilla };
