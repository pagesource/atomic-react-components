// @flow
import React from 'react';
import type { Node } from 'react';
import styled from 'styled-components';
import styles from './Select.style';

type Props = {
  id: string,
  className ?: string,
  name: string,
  disabled ?: string | boolean,
  options: any,
  selectedOption ?: string,
  placeholder ?: Node,
};

const Select = ({
  id,
  className,
  disabled,
  placeholder,
  options,
  selectedOption,
  name,
  ...others
}: Props): Node => (
  <select
    id={id}
    name={name}
    className={className}
    value={selectedOption}
    disabled={disabled}
    {...others}
  >
    {placeholder && <option value="">{placeholder}</option>}
    {options.map(opt => (
      <option
        key={opt}
        value={opt}
      >
        {opt}
      </option>
    ))}
  </select>
);

Select.defaultProps = {
  disabled: false,
  selectedOption: '',
  placeholder: '',
  className: '',
};

export default styled(Select)`${styles}`;
export { Select as SelectVanilla };
