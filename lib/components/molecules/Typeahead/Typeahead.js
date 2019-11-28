// @flow
/**
 *
 * Typeahead
 *
 */
import React, { useState } from 'react';
import styled from 'styled-components';

import styles from './Typeahead.style';
import type { Props } from './types';
import { InputVanilla as Input } from '../../atoms/Input';
import { ListVanilla as List } from '../List/List';
//import { unorderedList } from '../List/List.mock';

const renderSuggestions = suggestions => {
  return suggestions.map(item => {
    return <li key={item}>{item}</li>;
  });
};

const Typeahead = ({
  id,
  name,
  type,
  checked,
  disabled,
  children,
  onChange,
  handleChange,
  suggestions,
  className,
  ...otherProps
}: Props): React.Element<any> => {
  const [inputText, setInputText] = useState('');
  const [updatedSuggestions, setFilteredSuggestions] = useState([]);

  return (
    <div className={className}>
      <Input
        id={id}
        name={name}
        type={type}
        defaultChecked={checked}
        disabled={disabled}
        {...otherProps}
        onChange={e => {
          const { value } = e.currentTarget;
          setInputText(value);
          if (value.length >= 3) {
            const filteredSuggestions = suggestions.filter(
              suggestion => suggestion.toLowerCase().indexOf(value.toLowerCase()) > -1
            );
            setFilteredSuggestions(filteredSuggestions);
          } else {
            setFilteredSuggestions([]);
          }
        }}
        value={inputText}
      />
      <List className={className}>{renderSuggestions(updatedSuggestions)}</List>
    </div>
  );
};

Typeahead.defaultProps = {
  suggestions: ['abc', 'bbc'],
  label: '',
  className: '',
};

export default styled(Typeahead)`
  ${styles};
`;

export { Typeahead as TypeaheadVanilla };
