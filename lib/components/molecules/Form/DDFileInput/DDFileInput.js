// @flow
import React, { useState } from 'react';
import type { Node } from 'react';
import { Field } from 'formik';
import styled from 'styled-components';

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
  const [highlight, setHighlight] = useState(false);
  let styleCls = className;

  function openFileDialog() {
    fileInput.current.click();
  }

  function fileListToArray(list) {
    const array = [];
    for (let i = 0; i < list.length; i += 1) {
      array.push(list.item(i));
    }
    return array;
  }

  function onDragOver(evt) {
    evt.preventDefault();
    setHighlight(true);
  }

  function onDragLeave() {
    setHighlight(false);
  }

  function onDrop(event) {
    event.preventDefault();
    const { files } = event.dataTransfer;
    const array = fileListToArray(files);
    setHighlight(false);
    return array;
  }

  function onFilesAdded(evt) {
    const { files } = evt.target;
    const array = fileListToArray(files);
    return array;
  }

  function handleKeyPress(evt) {
    // handle event
    if (evt.keyCode === 13) {
      openFileDialog();
    }
  }

  if (highlight) {
    styleCls = `${className} highLight`;
  }

  return (
    // TODO: Add support for label position
    <div
      className={styleCls}
      onClick={openFileDialog}
      onDragOver={onDragOver}
      onDragLeave={onDragLeave}
      onDrop={onDrop}
      onKeyDown={handleKeyPress}
      role="button"
      tabIndex="0"
    >
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
