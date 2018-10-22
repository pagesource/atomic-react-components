// @flow
import React from 'react';
import type { Node } from 'react';
import { Field, ErrorMessage, FieldArray } from 'formik';
import styled from 'styled-components';
import InputRadio from '../../../atoms/InputRadio';
import FieldError from '../../../atoms/FieldError';
import styles from './FieldRadioGroup.style';


type Props = {
  id ?: string,
  className ?: string,
  name: string,
  radioGroupArray: Array,
};

const FieldRadioGroup = ({
  id,
  className,
  name,
  radioGroupArray,
  ...others
}: Props): Node => (
  <FieldArray
    name={name}
    render={() => (
      <div className={className} id={id} {...others}>
        {radioGroupArray.map((radioGroup, index) => (<Field key={radioGroup.id || `${name}_${index}`} name={name} render={({ field }) => (<InputRadio id={radioGroup.id || `${name}_${index}`} {...field} {...radioGroup} />)} />))}
        <ErrorMessage name={name} component={FieldError} />
      </div>)}
  />
);

FieldRadioGroup.defaultProps = {
  id: '',
  className: '',
};

export default styled(FieldRadioGroup)`${styles}`;
export { FieldRadioGroup as FieldRadioGroupVanila };
