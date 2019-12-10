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
  getSuggestions,
  suggestions,
  className,
  renderSuggestion,
  placeholder,
  value,
  onChangeHandler,
  getSelectedSuggestionValue,
}: Props): React.Element<any> => {
  const [updatedSuggestions, setFilteredSuggestions] = useState(suggestions);
  const [activeSuggestion, setActiveSuggestion] = useState(0);
  const [showSuggestions, setShowSuggestions] = useState(true);

  const triggerGetSuggestions = val => {
    return val && val.trim().length >= 3;
  };

  /**
   * Function to handle item selection
   * @param {'*'} e
   */
  const handleClick = item => {
    setActiveSuggestion(0);
    getSelectedSuggestionValue(item);
    setShowSuggestions(false);
  };

  const getFilteredSuggestions = (allSuggestions, inputText) => {
    const filteredSuggestions = allSuggestions.filter(
      suggestion => suggestion.toLowerCase().indexOf(inputText.toLowerCase()) > -1
    );
    return filteredSuggestions;
  };

  /**
   * Function to handle uparrow, downarrow, enter and escape
   * @param {*} e
   */
  const handleKeyDown = e => {
    switch (e.keyCode) {
      case ENTER_KEY: {
        setActiveSuggestion(0);
        getSelectedSuggestionValue(updatedSuggestions[activeSuggestion]);
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
    if (onChangeHandler) {
      onChangeHandler(e);
    }
    // Note: Need to handle Debounce
    const { value: inputText } = e.currentTarget;
    if (triggerGetSuggestions(inputText)) {
      if (getSuggestions) {
        getSuggestions();
        setFilteredSuggestions(suggestions);
      } else {
        const filteredSuggestions = getFilteredSuggestions(suggestions, inputText);
        setFilteredSuggestions(filteredSuggestions);
      }
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
        value={value}
        onChange={handleChange}
        onKeyDown={handleKeyDown}
        label=""
        placeholder={placeholder}
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
                onClick={() => handleClick(item)}
                onKeyDown={() => {}}
              >
                {renderSuggestion(item)}
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
  renderSuggestion: () => {},
};

export default styled(Typeahead)`
  ${styles};
`;

export { Typeahead as TypeaheadVanilla };
