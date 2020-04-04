// @flow
import React from 'react';
import type { Node, ComponentType } from 'react';
import styled from 'styled-components';
import InputChoice from '../../InputChoice';
import FieldError from '../../../atoms/FieldError';
import styles from './FieldRadioGroup.style';

type Props = {
  id?: string,
  className?: string,
  name: string,
  register: Function,
  errors: Object,
  radioGroupArray: [
    {
      id: string,
      onChange?: Function,
    }
  ],
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
  <div {...others} className={className} id={id}>
    {radioGroupArray.map((radioGroup, index) => (
      <InputChoice
        {...radioGroup}
        type="radio"
        id={radioGroup.id || `${name}_${index}`}
        name={name}
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
