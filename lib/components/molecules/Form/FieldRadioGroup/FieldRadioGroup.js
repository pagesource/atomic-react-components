// @flow
import React from 'react';
import type { Node, ComponentType } from 'react';
import { Field, ErrorMessage, FieldArray } from 'formik';
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
  radioGroupArray: Array<radioGroupProps>,
};

const FieldRadioGroup = ({ id, className, name, radioGroupArray, ...others }: Props): Node => (
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

FieldRadioGroup.defaultProps = {
  id: '',
  className: '',
};

const StyledFieldRadioGroup: ComponentType<Props> = styled(FieldRadioGroup)`
  ${styles};
`;

export default StyledFieldRadioGroup;

export { FieldRadioGroup as FieldRadioGroupVanilla };
