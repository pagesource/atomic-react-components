// @flow
import React from 'react';
import type { Node } from 'react';
import { Field } from 'formik';
import styled from 'styled-components';

import Input from '../../../atoms/Input';
import Label from '../../../atoms/Label';
import Button from '../../../atoms/Button';
import styles from './FieldFileInput.style';
import type { FieldFileInputProps } from './types';
import useOpenFileDialog from '../../../../hooks/useOpenFileDialog';

const FieldFileInput = ({
  id,
  className,
  name,
  label,
  onChange,
  onBlur,
  labelProps,
  fieldProps,
  localeText,
  ...others
}: FieldFileInputProps): Node => {
  const fileInput = React.createRef();
  const { openFileDialog } = useOpenFileDialog();

  return (
    <div className={className}>
      <Label htmlFor={id} {...labelProps}>
        {label}
      </Label>
      <Field
        id={id}
        name={name}
        render={({ field, form }) => {
          const { handleChange, handleBlur } = form;
          return (
            <Input
              type="file"
              ref={fileInput}
              {...others}
              {...field}
              onChange={e => {
                handleChange(e);
                if (onChange) onChange(e, form);
              }}
              onBlur={e => {
                handleBlur(e);
                if (onBlur) onBlur(e, form);
              }}
            />
          );
        }}
        {...fieldProps}
      />
      <Button tertiary type="button" onClick={() => openFileDialog(fileInput)}>
        {localeText.btnTextPrimary}
      </Button>
      <Button primary type="button">
        {localeText.btnTextSecondary}
      </Button>
    </div>
  );
};

FieldFileInput.defaultProps = {
  className: 'fieldFileInput',
  labelProps: {},
  fieldProps: {},
  onChange: null,
  onBlur: null,
  localeText: {
    btnTextPrimary: 'Choose File(s)',
    btnTextSecondary: 'Upload...',
  },
};

export default styled(FieldFileInput)`
  ${styles};
`;

export { FieldFileInput as FieldFileInputVanilla };
