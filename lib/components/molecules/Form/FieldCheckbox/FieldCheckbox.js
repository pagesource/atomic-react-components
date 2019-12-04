// @flow
import React from 'react';
import type { Node } from 'react';
import { Field, ErrorMessage } from 'formik';
import styled from 'styled-components';
import InputChoice from '../../InputChoice';
import FieldError from '../../../atoms/FieldError';
import styles from './FieldCheckbox.style';

type Props = {
  id?: string,
  className?: string,
  name: string,
  onChange?: Function,
};

const FieldCheckbox = ({ id, className, name, onChange, ...others }: Props): Node => (
  <div className={className}>
    <Field name={name}>
      {({ field, form }) => {
        const { handleChange } = form;
        return (
          <InputChoice
            type="checkbox"
            id={id || name}
            {...field}
            {...others}
            onChange={e => {
              handleChange(e);
              if (typeof onChange === 'function') onChange(e, form);
            }}
          />
        );
      }}
    </Field>
    <ErrorMessage name={name} component={FieldError} />
  </div>
);

FieldCheckbox.defaultProps = {
  id: '',
  className: '',
  onChange: null,
};

export default styled(FieldCheckbox)`
  ${styles};
`;
export { FieldCheckbox as FieldCheckboxVanilla };
