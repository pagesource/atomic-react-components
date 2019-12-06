// @flow
/**
 *
 * Typeahead
 *
 */
import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

import styles from './Typeahead.style';
import type { Props } from './types';
import { InputVanilla as Input } from '../../atoms/Input';
import { ListVanilla as List } from '../List/List';
import { ENTER_KEY, UP_ARROW, DOWN_ARROW } from './constants';

const Typeahead = ({
  id,
  name,
  disabled,
  handleChange,
  suggestions,
  className,
  renderListItem,
}: Props): React.Element<any> => {
  const [inputText, setInputText] = useState('');
  const [updatedSuggestions, setFilteredSuggestions] = useState([]);
  const [activeSuggestion, setActiveSuggestion] = useState(0);
  const [showSuggestion, setShowSuggestion] = useState(true);

  useEffect(() => {
    const filteredSuggestions = suggestions.filter(
      suggestion => suggestion.toLowerCase().indexOf(inputText.toLowerCase()) > -1
    );

    setFilteredSuggestions(filteredSuggestions);
  }, [suggestions]);

  const onClick = e => {
    setActiveSuggestion(0);
    const { innerText } = e.currentTarget;
    setInputText(innerText);
    setFilteredSuggestions([]);
    setShowSuggestion(false);
  };

  const onKeyDown = e => {
    if (e.keyCode === ENTER_KEY) {
      setActiveSuggestion(0);
      setInputText(updatedSuggestions[activeSuggestion]);
      setShowSuggestion(false);
    } else if (e.keyCode === UP_ARROW) {
      if (activeSuggestion === 0) {
        setActiveSuggestion(updatedSuggestions.length - 1);
        return;
      }
      setActiveSuggestion(activeSuggestion - 1);
    } else if (e.keyCode === DOWN_ARROW) {
      if (activeSuggestion + 1 === updatedSuggestions.length) {
        setActiveSuggestion(0);
        return;
      }
      setActiveSuggestion(activeSuggestion + 1);
    }
  };

  const onChange = e => {
    const { value } = e.currentTarget;
    setInputText(value);
    if (value.length >= 3) {
      handleChange(false);
      setShowSuggestion(true);
    } else {
      handleChange(true);
    }
  };

  return (
    <div className={className}>
      <Input
        id={id}
        name={name}
        type="search"
        disabled={disabled}
        value={inputText}
        onChange={onChange}
        onKeyDown={onKeyDown}
      />
      <List>
        {showSuggestion &&
          updatedSuggestions.map((item, index) => {
            return (
              // eslint-disable-next-line jsx-a11y/no-noninteractive-element-interactions
              <li
                className={index === activeSuggestion ? 'active' : ''}
                key={item}
                onClick={onClick}
                onKeyDown={() => {}}
              >
                {renderListItem(item)}
              </li>
            );
          })}
      </List>
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
