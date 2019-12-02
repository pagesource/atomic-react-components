// @flow
import React, { useState } from 'react';
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
  const [highlight, setHighlight] = useState(false);

  function openFileDialog() {
    fileInput.current.click();
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
    const files = event.dataTransfer.files;
    const array = fileListToArray(files);
    setHighlight(false);
  }

  function onFilesAdded(evt) {
    const files = evt.target.files;
    const array = fileListToArray(files);
  }

  function fileListToArray(list) {
    const array = [];
    for (var i = 0; i < list.length; i++) {
      array.push(list.item(i));
    }
    return array;
  }
  let styleCls = className;
  if (highlight) {
    styleCls = className + ' ' + 'highLight';
  }
  console.log(styleCls);
  return (
    // TODO: Add support for label position
    <div
      className={styleCls}
      onClick={openFileDialog}
      onDragOver={onDragOver}
      onDragLeave={onDragLeave}
      onDrop={onDrop}
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
