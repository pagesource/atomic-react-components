// @flow
import React from 'react';
import type { Node } from 'react';
import { Field } from 'formik';
import styled from 'styled-components';

import Label from '../../../atoms/Label';
import Input from '../../../atoms/Input';
import styles from './DragDropInput.style';
import useOpenFileDialog from '../../../../hooks/useOpenFileDialog';
import useDragandDrop from '../../../../hooks/useDragandDrop';
import type { DragDropInputProps } from './types';

const { openFileDialog } = useOpenFileDialog();

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
  localeText,
  ...others
}: DragDropInputProps): Node => {
  const fileInput = React.createRef();
  const {
    onDragOver,
    onDragLeave,
    onDrop,
    handleKeyPress,
    onFilesAdded,
    getHighlightClass,
  } = useDragandDrop();
  const styleCls = getHighlightClass(className);

  return (
    // TODO: Add support for label position
    <div
      className={styleCls}
      onClick={() => openFileDialog(fileInput)}
      onDragOver={onDragOver}
      onDragLeave={onDragLeave}
      onDrop={onDrop}
      onKeyDown={e => handleKeyPress(e, fileInput)}
      role="button"
      tabIndex="0"
    >
      <Label htmlFor={id} {...labelProps}>
        {label}
      </Label>
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
                onFilesAdded(e);
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
      {localeText.dragHelperText}
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
  localeText: {
    dragHelperText: 'Drop Files Here...',
  },
};

export default styled(DDFieldInput)`
  ${styles};
`;

export { DDFieldInput };
