// @flow
import React from 'react';
import type { Node } from 'react';
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
      <div className={className} id={id} {...others}>
        {radioGroupArray.map((radioGroup, index) => (
          <Field key={radioGroup.id || `${name}_${index}`} name={name}>
            {({ field, form }) => {
              const { handleChange } = form;
              const { onChange } = radioGroup;
              return (
                <InputChoice
                  type="radio"
                  id={radioGroup.id || `${name}_${index}`}
                  onChange={e => {
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

export default styled(FieldRadioGroup)`
  ${styles};
`;
export { FieldRadioGroup as FieldRadioGroupVanilla };
