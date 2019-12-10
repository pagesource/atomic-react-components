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
import Input from '../../atoms/Input';
import List from '../List';
import { ENTER_KEY, UP_ARROW, DOWN_ARROW, ESCAPE } from './constants';

const Typeahead = ({
  id,
  name,
  disabled,
  onChange,
  suggestions,
  className,
  renderListItem,
}: Props): React.Element<any> => {
  const [inputText, setInputText] = useState('');
  const [updatedSuggestions, setFilteredSuggestions] = useState(suggestions);
  const [activeSuggestion, setActiveSuggestion] = useState(0);
  const [showSuggestions, setShowSuggestions] = useState(true);

  /**
   * Function to handle item selection
   * @param {'*'} e
   */
  const handleClick = e => {
    setActiveSuggestion(0);
    const { innerText } = e.currentTarget;
    setInputText(innerText);
    setFilteredSuggestions([]);
    setShowSuggestions(false);
  };

  /**
   * Function to handle uparrow, downarrow, enter and escape
   * @param {*} e
   */
  const handleKeyDown = e => {
    switch (e.keyCode) {
      case ENTER_KEY: {
        setActiveSuggestion(0);
        setInputText(updatedSuggestions[activeSuggestion]);
        setShowSuggestions(false);
        break;
      }
      case UP_ARROW: {
        if (activeSuggestion === 0) {
          setActiveSuggestion(updatedSuggestions.length - 1);
          return;
        }
        setActiveSuggestion(activeSuggestion - 1);
        break;
      }
      case DOWN_ARROW: {
        if (activeSuggestion + 1 === updatedSuggestions.length) {
          setActiveSuggestion(0);
          return;
        }
        setActiveSuggestion(activeSuggestion + 1);
        break;
      }
      case ESCAPE: {
        setActiveSuggestion(0);
        setShowSuggestions(false);
        break;
      }
      default:
        break;
    }
  };

  /**
   * Function to handle text change in input
   * @param {*} e
   */
  const handleChange = e => {
    //Note: handle Debouncing
    const { value } = e.currentTarget;
    setInputText(value);
    const filteredSuggestions = suggestions.filter(
      suggestion => suggestion.toLowerCase().indexOf(inputText.toLowerCase()) > -1
    );
    setFilteredSuggestions(filteredSuggestions);
    if (value.length >= 3) {
      onChange();
      setShowSuggestions(true);
    } else {
      setShowSuggestions(false);
    }
  };

  const listOptions = {
    inline: false,
    nested: false,
    noMargin: true,
    inheritedStyles: '',
    borderSeparator: false,
    noDefaultView: false,
  };

  return (
    <div className={className}>
      <Input
        id={id}
        name={name}
        type="search"
        disabled={disabled}
        value={inputText}
        onChange={handleChange}
        onKeyDown={handleKeyDown}
        label=""
        autoComplete="off"
        aria-autocomplete="both"
      />
      <List {...listOptions} id="typeahead-suggestions-list">
        {showSuggestions &&
          updatedSuggestions.map((item, index) => {
            return (
              // eslint-disable-next-line jsx-a11y/no-noninteractive-element-interactions
              <li
                className={index === activeSuggestion ? 'active' : ''}
                key={`typeahead-suggestion-item-${index.toString()}`}
                onClick={handleClick}
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
  suggestions: [],
  label: '',
  className: '',
  inheritedStyles: '',
  renderListItem: () => {},
};

export default styled(Typeahead)`
  ${styles};
`;

export { Typeahead as TypeaheadVanilla };
