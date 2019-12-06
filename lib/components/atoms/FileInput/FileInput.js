// @flow
import React from 'react';

import styled from 'styled-components';
import styles from './FileInput.style';

type Props = {
  id: string,
  className?: string,
  type?: string,
  name: string,
  value?: string | number,
  placeholder?: string,
  ariaLabel?: string,
  elementLocator?: string,
  ref: ?HTMLInputElement,
};

const FileInput = React.forwardRef(
  (
    { id, className, type, name, value, placeholder, ariaLabel, elementLocator, ...others }: Props,
    ref
  ) => (
    <input
      id={id}
      ref={ref}
      aria-label={ariaLabel}
      className={className}
      name={name}
      type={type}
      placeholder={placeholder}
      data-locator={elementLocator || `input-${type}-${name}`}
      {...others}
    />
  )
);
FileInput.defaultProps = {
  placeholder: '',
  ariaLabel: '',
  className: '',
  type: 'text',
  value: '',
  elementLocator: '',
};

export default styled(FileInput)`
  ${styles};
`;
export { FileInput };
