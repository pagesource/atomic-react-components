// @flow
import React from 'react';
import type { Node } from 'react';
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
};

const Input = ({
  id,
  className,
  type,
  name,
  value,
  placeholder,
  ariaLabel,
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
    {...others}
  />
);

Input.defaultProps = {
  placeholder: '',
  ariaLabel: '',
  className: '',
  type: 'text',
  value: '',
};

export default styled(Input)`
  ${styles};
`;
export { Input as InputVanilla };
