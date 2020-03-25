// @flow
import React from 'react';
import type { Node } from 'react';
import styled from 'styled-components';

import Label from '../../../atoms/Label';
import { ButtonVanilla as Button } from '../../../atoms/Button/Button';
import Input from '../../../atoms/Input';
import useOpenFileDialog from '../../../../hooks/useOpenFileDialog';
import useDragAndDrop from '../../../../hooks/useDragNDrop';
import type { DragDropInputProps } from './types';
import styles from './DragDropInput.style';

const { openFileDialog } = useOpenFileDialog();

const DDFieldInput = ({
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
}: DragDropInputProps): Node => {
  const fileInput = React.createRef();
  const { onDragOver, onDragLeave, onDrop, onFilesAdded, getHighlightClass } = useDragAndDrop();
  const styleCls = getHighlightClass(className);

  return (
    <Button
      className={styleCls}
      onClick={() => openFileDialog(fileInput)}
      onDragOver={onDragOver}
      onDragLeave={onDragLeave}
      onDrop={onDrop}
    >
      <Label htmlFor={id} {...labelProps}>
        {label}
      </Label>
      <Input
        type="file"
        ref={fileInput}
        {...others}
        onChange={e => {
          onFilesAdded(e);
        }}
        {...fieldProps}
      />
      {localeText.dragHelperText}
    </Button>
  );
};

DDFieldInput.defaultProps = {
  className: 'dragAndDrop',
  labelProps: {},
  fieldProps: {},
  onChange: null,
  onBlur: null,
  localeText: {
    dragHelperText: 'Drop Files Here...',
  },
};

export default styled(DDFieldInput)`
  ${styles};
`;

export { DDFieldInput as DDFieldInputVanilla };
