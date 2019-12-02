// @flow
import React from 'react';
import type { Node } from 'react';
import { Field } from 'formik';
import styled from 'styled-components';

import Input from '../../../atoms/Input';
import styles from './DDFileInput.style';

type Props = {
  id: string,
  className?: string,
  type?: string,
  name: string,
  label: Node,
  labelProps?: Object,
  fieldProps?: Object,
  value?: string | number,
  placeholder?: string,
  onChange?: Function,
  onBlur?: Function,
};

const DDFieldInput = ({
  id,
  className,
  type,
  name,
  label,
  onChange,
  onBlur,
  labelProps,
  fieldProps,
  ...others
}: Props): Node => {
  let fileInput = React.createRef();
  function handleClick() {
    fileInput.current.click();
  }
  return (
    // TODO: Add support for label position
    <div className={className}>
      <Field
        id={id}
        name={name}
        type={type}
        render={({ field, form }) => {
          const { handleChange, handleBlur } = form;
          return (
            <Input
              type={type}
              ref={fileInput}
              {...others}
              {...field}
              onChange={e => {
                handleChange(e);
                if (typeof onChange === 'function') onChange(e, form);
              }}
              onBlur={e => {
                handleBlur(e);
                if (typeof onBlur === 'function') onBlur(e, form);
              }}
            />
          );
        }}
        {...fieldProps}
      />
    </div>
  );
};

DDFieldInput.defaultProps = {
  placeholder: '',
  className: '',
  type: 'file',
  labelProps: {},
  value: '',
  fieldProps: {},
  onChange: null,
  onBlur: null,
};

export default styled(DDFieldInput)`
  ${styles};
`;

export { DDFieldInput };
