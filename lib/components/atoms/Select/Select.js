// @flow
import React from 'react';
import type { Node, ComponentType } from 'react';
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
  ref?: ?HTMLSelectElement,
};

const Select = React.forwardRef<Props, HTMLSelectElement>(
  (
    {
      id,
      className,
      disabled,
      elementLocator,
      placeholder,
      options,
      selectedOption,
      name,
      ...others
    }: Props,
    ref
  ): Node => (
    <select
      {...others}
      id={id}
      name={name}
      className={className}
      disabled={disabled}
      data-locator={elementLocator || `select-input-${name}-${id}`}
      ref={ref}
    >
      {placeholder && <option value="">{placeholder}</option>}
      {options.map((opt) => (
        <option key={opt} value={opt}>
          {opt}
        </option>
      ))}
    </select>
  )
);

// $flow-disable-line  eslint-disable-line
Select.defaultProps = {
  disabled: false,
  selectedOption: '',
  placeholder: '',
  className: '',
  elementLocator: '',
  ref: null,
};

const StyledSelect: ComponentType<Props> = styled(Select)`
  ${styles};
`;

export default StyledSelect;
export { Select as SelectVanilla };
