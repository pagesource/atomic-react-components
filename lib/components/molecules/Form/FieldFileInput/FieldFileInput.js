// @flow
import React from 'react';
import type { Node } from 'react';
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
  register,
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
      <Input id={id} name={name} type="file" ref={fileInput} {...others} {...fieldProps} />
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
