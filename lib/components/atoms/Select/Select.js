// @flow
import React from 'react';
import type { Node } from 'react';
import styled from 'styled-components';
import styles from './Select.style';

type Props = {
  id: string,
  className?: string,
  name: string,
  disabled?: string | boolean,
  elementLocator?: string,
  options: any,
  selectedOption?: string,
  placeholder?: Node,
};

const Select = ({
  id,
  className,
  disabled,
  elementLocator,
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
    data-locator={elementLocator || `select-input-${name}-${id}`}
    {...others}
  >
    {placeholder && (
      <option value="" disabled selected>
        {placeholder}
      </option>
    )}
    {options.map((opt, index) => (
      <option key={`${name}_${index.toString()}`} value={opt}>
        {opt}
      </option>
    ))}
  </select>
);

Select.defaultProps = {
  disabled: false,
  selectedOption: 'select',
  placeholder: 'Select',
  className: 'select',
  elementLocator: 'select',
};

export default styled(Select)`
  ${styles};
`;
export { Select as SelectVanilla };
