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
  ): Node => (
    <input
      {...others}
      id={id}
      ref={ref}
      aria-label={ariaLabel}
      className={className}
      name={name}
      type={type}
      value={type !== 'file' ? value : undefined}
      placeholder={placeholder}
      data-locator={elementLocator || (type ? `input-${type}-${name}` : '')}
    />
  )
);

// $flow-disable-line eslint-disable-line
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
