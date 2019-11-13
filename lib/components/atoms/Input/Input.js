// @flow
import React from 'react';
import type { Node } from 'react';
import styled from 'styled-components';
import styles from './Input.style';

export type Props = {
  id: string,
  className?: string,
  type?: string,
  name: string,
  value?: string | number,
  placeholder?: string,
  ariaLabel?: string,
  elementLocator?: string,
};

const Input = ({
  id,
  className,
  type,
  name,
  value,
  placeholder,
  ariaLabel,
  elementLocator,
  ...others
}: Props): Node => (
  <input
    id={id}
    aria-label={ariaLabel}
    className={className}
    name={name}
    type={type}
    value={value}
    placeholder={placeholder}
    data-locator={elementLocator || `input-${type}-${name}`}
    {...others}
  />
);

Input.defaultProps = {
  placeholder: '',
  ariaLabel: '',
  className: '',
  type: 'text',
  value: '',
  elementLocator: '',
};

export default styled(Input)`
  ${styles};
`;
export { Input as InputVanilla };
