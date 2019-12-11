// @flow
import React, { useState } from 'react';
import type { Node } from 'react';
import { Field } from 'formik';
import styled from 'styled-components';

import Label from '../../../atoms/Label';
import Input from '../../../atoms/Input';
import styles from './DDFileInput.style';
import useOpenFileDialog from '../../../../core/utils/useOpenFileDialog';

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

const { FileInputField } = useOpenFileDialog();

export const useDragandDrop = () => {
  const [highlight, setHighlight] = useState(false);
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
      FileInputField.openFileDialog(fileInput);
    }
  };

  const getHighlightClass = className => {
    let styleCls = className;
    highlight ? (styleCls = `${className} highlight`) : false;
    return styleCls;
  };

  return {
    dragNDropField: {
      highlight,
      onDragOver,
      onDragLeave,
      onDrop,
      handleKeyPress,
      onFilesAdded,
      fileListToArray,
      getHighlightClass,
      setHighlight,
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
  const styleCls = dragNDropField.getHighlightClass(className);

  return (
    // TODO: Add support for label position
    <div
      className={styleCls}
      onClick={() => FileInputField.openFileDialog(fileInput)}
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
