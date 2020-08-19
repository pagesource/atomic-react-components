import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import styles from './Select.style';

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
}) => (
  <select
    {...others}
    id={id}
    name={name}
    className={className}
    value={selectedOption}
    disabled={disabled}
    data-locator={elementLocator || `select-input-${name}-${id}`}
  >
    {placeholder && <option value="">{placeholder}</option>}
    {options.map((opt) => (
      <option key={opt} value={opt}>
        {opt}
      </option>
    ))}
  </select>
);

Select.propTypes = {
  id: PropTypes.string.isRequired,
  className: PropTypes.string,
  name: PropTypes.string,
  disabled: PropTypes.string,
  elementLocator: PropTypes.string,
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
  selectedOption: PropTypes.string,
  placeholder: PropTypes.node,
};

Select.defaultProps = {
  disabled: false,
  selectedOption: '',
  placeholder: '',
  className: '',
  elementLocator: '',
  name: '',
};

const StyledSelect = styled(Select)`
  ${styles};
`;

export default StyledSelect;
export { Select as SelectVanilla };
