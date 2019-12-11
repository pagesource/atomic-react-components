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
  getResults,
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
  const [updatedResults, setFilteredResults] = useState(results);
  const [activeSuggestion, setActiveSuggestion] = useState(0);
  const [showResults, setShowResults] = useState(true);

  const triggerGetResults = val => {
    return val && val.trim().length >= 3;
  };

  /**
   * Function to handle item selection
   * @param {'*'} e
   */
  const handleClick = item => {
    setActiveSuggestion(0);
    getSelectedSuggestionValue(item);
    setShowResults(false);
  };

  const getFilteredResults = (allResults, inputText) => {
    const filteredResults = allResults.filter(
      suggestion => suggestion.toLowerCase().indexOf(inputText.toLowerCase()) > -1
    );
    return filteredResults;
  };

  /**
   * Function to handle uparrow, downarrow, enter and escape
   * @param {*} e
   */
  const handleKeyDown = e => {
    switch (e.keyCode) {
      case ENTER_KEY: {
        setActiveSuggestion(0);
        getSelectedSuggestionValue(updatedResults[activeSuggestion]);
        setShowResults(false);
        break;
      }
      case UP_ARROW: {
        if (activeSuggestion === 0) {
          setActiveSuggestion(updatedResults.length - 1);
          return;
        }
        setActiveSuggestion(activeSuggestion - 1);
        break;
      }
      case DOWN_ARROW: {
        if (activeSuggestion + 1 === updatedResults.length) {
          setActiveSuggestion(0);
          return;
        }
        setActiveSuggestion(activeSuggestion + 1);
        break;
      }
      case ESCAPE: {
        setActiveSuggestion(0);
        setShowResults(false);
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
    if (triggerGetResults(inputText)) {
      if (getResults) {
        getResults();
        setFilteredResults(results);
      } else {
        const filteredResults = getFilteredResults(results, inputText);
        setFilteredResults(filteredResults);
      }
      setShowResults(true);
    } else {
      setShowResults(false);
    }
  };

  /**
   * Function to hide the option list on blur or focus out
   */
  const handleBlue = () => {
    setShowResults(false);
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
        onBlur={handleBlue}
        aria-label="search"
        autoComplete="off"
        aria-autocomplete="both"
        aria-describedby="initInstr"
        aria-owns="results"
        aria-expanded={showResults}
      />
      <List {...listOptions} id="results" role="listbox">
        {showResults &&
          updatedResults.map((item, index) => {
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
