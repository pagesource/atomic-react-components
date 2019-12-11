// @flow
/**
 *
 * Typeahead
 *
 */
import React, { useState } from 'react';
import styled from 'styled-components';
import classNames from 'classnames';

import styles from './Typeahead.style';
import type { Props } from './types';
import Input from '../../atoms/Input';
import List from '../List';
import Label from '../../atoms/Label';
import ListItem from './ListItem';
import { ENTER_KEY, UP_ARROW, DOWN_ARROW, ESCAPE } from './constants';

const Typeahead = ({
  id,
  getSuggestions,
  results,
  className,
  renderSuggestionItem,
  searchValue,
  onChangeHandler,
  getSelectedSuggestionValue,
  label,
  isFieldLabel,
  ...otherProps
}: Props): React.Element<any> => {
  const [updatedSuggestions, setFilteredSuggestions] = useState(results);
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
        setFilteredSuggestions(results);
      } else {
        const filteredSuggestions = getFilteredSuggestions(results, inputText);
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
      <Label htmlFor={id} className={classNames({ 'visually-hidden': isFieldLabel })}>
        {label}
      </Label>
      <Input
        {...otherProps}
        id={id}
        type="search"
        value={searchValue}
        onChange={handleChange}
        onKeyDown={handleKeyDown}
        label={label}
        autoComplete="off"
        aria-autocomplete="both"
      />
      <List {...listOptions} id="typeahead-results-list">
        {showSuggestions &&
          updatedSuggestions.map((item, index) => {
            return (
              <ListItem
                index={index}
                activeSuggestion={activeSuggestion}
                name={otherProps.name}
                handleClick={handleClick}
                item={item}
              >
                {renderSuggestionItem ? renderSuggestionItem(item) : item}
              </ListItem>
            );
          })}
      </List>
    </div>
  );
};

Typeahead.defaultProps = {
  label: '',
  className: 'typeahead-component',
  inheritedStyles: '',
  renderSuggestionItem: () => {},
};

export default styled(Typeahead)`
  ${styles};
`;

export { Typeahead as TypeaheadVanilla };
