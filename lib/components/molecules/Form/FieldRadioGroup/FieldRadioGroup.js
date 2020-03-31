// @flow
import React from 'react';
import type { Node, ComponentType } from 'react';
import styled from 'styled-components';
import InputChoice from '../../InputChoice';
import FieldError from '../../../atoms/FieldError';
import styles from './FieldRadioGroup.style';

type radioGroupProps = {
  id: string,
  onChange?: Function,
};

type Props = {
  id?: string,
  className?: string,
  name: string,
  register: Function,
  errors: Object,
  radioGroupArray: Array<radioGroupProps>,
};

const FieldRadioGroup = ({
  id,
  className,
  name,
  radioGroupArray,
  register,
  errors,
  ...others
}: Props): Node => (
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

FieldRadioGroup.defaultProps = {
  id: '',
  className: '',
};

const StyledFieldRadioGroup: ComponentType<Props> = styled(FieldRadioGroup)`
  ${styles};
`;

export default StyledFieldRadioGroup;

export { FieldRadioGroup as FieldRadioGroupVanilla };
