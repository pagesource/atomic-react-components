// @flow
import React from 'react';
import type { ComponentType } from 'react';
import styled from 'styled-components';
import styles from './Input.style';

type Props = {
  id: string,
  className?: string,
  type?: string,
  name: string,
  value?: string | number,
  placeholder?: string,
  ariaLabel?: string,
  elementLocator?: string,
  ref?: ?HTMLInputElement,
};

const Input = React.forwardRef<Props, HTMLInputElement>(
  (
    { id, className, type, name, value, placeholder, ariaLabel, elementLocator, ...others }: Props,
    ref
  ) => {
    const propArray = {
      id,
      ref,
      'aria-label': ariaLabel,
      className,
      name,
      type,
      placeholder,
      'data-locator': elementLocator || `input-${type}-${name}`,
      ...others,
    };
    if (type === 'radio') propArray.value = value;
    return React.createElement('input', propArray);
  }
);

// $flow-disable-line  eslint-disable-line
Input.defaultProps = {
  placeholder: '',
  ariaLabel: '',
  className: '',
  type: 'text',
  value: '',
  elementLocator: '',
  ref: null,
};

const StyledInput: ComponentType<Props> = styled(Input)`
  ${styles};
`;

export default StyledInput;
export { Input as InputVanilla };
