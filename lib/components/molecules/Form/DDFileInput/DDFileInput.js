// @flow
import React, { useState } from 'react';
import type { Node } from 'react';
import { Field } from 'formik';
import styled from 'styled-components';

import Label from '../../../atoms/Label';
import Input from '../../../atoms/FileInput';
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

export const useDragandDrop = () => {
  const [highlight, setHighlight] = useState(false);
  const openFileDialog = fileInput => {
    fileInput.current.click();
  };

  const fileListToArray = list => {
    const array = [];
    for (let i = 0; i < list.length; i += 1) {
      array.push(list.item(i));
    }
    return array;
  };

  const onDragOver = evt => {
    evt.preventDefault();
    setHighlight(true);
  };

  const onDragLeave = e => {
    e.preventDefault();
    setHighlight(false);
  };

  const onDrop = event => {
    event.preventDefault();
    const { files } = event.dataTransfer;
    const array = fileListToArray(files);
    return array;
  };

  const onFilesAdded = evt => {
    const { files } = evt.target;
    const array = fileListToArray(files);
    return array;
  };

  const handleKeyPress = (evt, fileInput) => {
    if (evt.keyCode === 13) {
      openFileDialog(fileInput);
    }
  };

  return {
    dragNDropField: {
      highlight,
      onDragOver,
      onDragLeave,
      onDrop,
      openFileDialog,
      handleKeyPress,
      onFilesAdded,
      fileListToArray,
    },
  };
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
  const fileInput = React.createRef();
  const { dragNDropField } = useDragandDrop();
  let styleCls = className;
  if (dragNDropField.highlight) {
    styleCls = `${className} highlight`;
  }
  return (
    // TODO: Add support for label position
    <div
      className={styleCls}
      onClick={() => dragNDropField.openFileDialog(fileInput)}
      onDragOver={dragNDropField.onDragOver}
      onDragLeave={dragNDropField.onDragLeave}
      onDrop={dragNDropField.onDrop}
      onKeyDown={e => dragNDropField.handleKeyPress(e, fileInput)}
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
                dragNDropField.onFilesAdded(e);
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
