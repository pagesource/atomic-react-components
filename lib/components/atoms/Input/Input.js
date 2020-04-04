// @flow
import React from 'react';
import type { Node, ComponentType } from 'react';
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
  ): Node => {
    const propArray = {
      ...others,
      id,
      ref,
      'aria-label': ariaLabel,
      className,
      name,
      type,
      placeholder,
    };
    const propArrayforRadio = {
      ...others,
      id,
      ref,
      'aria-label': ariaLabel,
      className,
      name,
      type,
      placeholder,
      value,
    };
    let finalProp;
    if (type === 'radio') {
      finalProp = propArrayforRadio;
    } else {
      finalProp = propArray;
    }
    return React.createElement('input', finalProp);
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
