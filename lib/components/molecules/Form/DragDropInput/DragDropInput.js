// @flow
import React from 'react';
import type { Node } from 'react';
import { Field } from 'formik';
import styled from 'styled-components';

import Label from '../../../atoms/Label';
import Input from '../../../atoms/Input';
import styles from './DragDropInput.style';
import useOpenFileDialog from '../../../../hooks/file-upload/useOpenFileDialog';
import useDragandDrop from '../../../../hooks/file-upload/useDragandDrop';

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
  ...others
}: Props): Node => {
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
      Drop Files Here...
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
