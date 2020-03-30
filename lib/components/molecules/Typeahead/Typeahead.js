// @flow
/**
 *
 * Typeahead
 *
 */
import React, { useState, useEffect } from 'react';
import type { Node, ComponentType } from 'react';
import styled from 'styled-components';
import classNames from 'classnames';

import Input from '../../atoms/Input';
import Label from '../../atoms/Label';
import List from '../List';
import ListItem from './ListItem';
import styles from './Typeahead.style';
import type { Props } from './types';
import { ENTER_KEY, UP_ARROW, DOWN_ARROW, ESCAPE, TAB } from './constants';

const Typeahead = ({
  id,
  className,
  searchValue,
  label,
  isFieldLabel,
  results,
  onChangeHandler,
  getResults,
  renderCustomResultsView,
  getSelectedResultValue,
  customFilter,
  minSearchChars,
  minItemsInList,
  ariaInitialInstructions,
  ...otherProps
}: Props): Node => {
  const [updatedResults, setFilteredResults] = useState([]);
  const [activeResult, setActiveResult] = useState(-1);

  useEffect(() => {
    const element = document.getElementsByClassName('active')[0];
    if (element) {
      element.scrollIntoView({ block: 'nearest', behavior: 'auto' });
    }
  });

  const triggerGetResults = (val) => {
    return val && val.trim().length >= minSearchChars;
  };

  /**
   * Function to return filtered results
   * @param {*} allResults
   * @param {*} inputText
   */
  const getFilteredResults = (allResults, inputText) => {
    const filteredResults =
      allResults &&
      allResults.filter((result) => result.toLowerCase().indexOf(inputText.toLowerCase()) > -1);
    return filteredResults;
  };

  /**
   * Function to handle item selection
   * @param {'*'} e
   */
  const handleClick = (item) => {
    getSelectedResultValue(item);
  };

  /**
   * Function to handle text change in input
   * @param {*} e
   */
  const handleChange = (e) => {
    if (typeof onChangeHandler === 'function') {
      onChangeHandler(e);
    }
    const { value: inputText } = e.target;
    let filteredResults = results;
    if (triggerGetResults(inputText)) {
      if (typeof getResults === 'function') {
        getResults(inputText);
      } else if (typeof customFilter === 'function') {
        filteredResults = customFilter(results, inputText);
      } else {
        filteredResults = getFilteredResults(results, inputText);
      }
    } else {
      filteredResults = [];
    }
    setFilteredResults(filteredResults);
  };

  /**
   * Function to handle uparrow, downarrow, enter and escape
   * @param {*} e
   */
  const handleKeyDown = (e) => {
    switch (e.keyCode) {
      case ENTER_KEY: {
        if (activeResult !== -1) {
          getSelectedResultValue(updatedResults[activeResult]);
          setFilteredResults([]);
        }
        break;
      }
      case UP_ARROW: {
        let activeIndex = activeResult;
        if (activeResult === 0) {
          activeIndex = updatedResults.length;
        }
        activeIndex -= 1;
        setActiveResult(activeIndex);
        break;
      }
      case DOWN_ARROW: {
        let activeIndex = activeResult;
        if (activeResult + 1 === updatedResults.length) {
          activeIndex = -1;
        }
        activeIndex += 1;
        setActiveResult(activeIndex);
        break;
      }
      case TAB:
      case ESCAPE: {
        setFilteredResults([]);
        break;
      }
      default:
        break;
    }
  };

  /**
   * Highlight and select item on mouse over
   */
  const handleMouseEnter = (activeItemIndex) => {
    setActiveResult(activeItemIndex);
  };

  /**
   * Hide suggestion list on mouse down
   */
  const handleMouseDown = (activeItemIndex) => {
    setActiveResult(activeItemIndex);
    getSelectedResultValue(updatedResults[activeResult]);
    setFilteredResults([]);
  };

  const listOptions = {
    noMargin: true,
  };

  return (
    <div
      id="typeahead-component"
      className={className}
      aria-haspopup="true"
      aria-expanded={updatedResults && updatedResults.length > 0}
      aria-owns={`typeahead-results-${otherProps.name}`}
    >
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
        autoComplete="off"
        aria-describedby="initInstr"
        aria-autocomplete="list"
        aria-labelledby={label}
        aria-activedescendant={activeResult > -1 ? 'selectedOption' : ''}
      />
      {updatedResults && updatedResults.length !== 0 && (
        <List
          {...listOptions}
          id={`typeahead-results-${otherProps.name}`}
          role="listbox"
          aria-label={otherProps.name}
        >
          {updatedResults.map((item, index) => {
            return (
              <ListItem
                key={`typeahead-${otherProps.name}-${index.toString()}`}
                index={index}
                activeResult={activeResult}
                handleClick={handleClick}
                item={item}
                onMouseEnter={() => handleMouseEnter(index)}
                onMouseDown={() => handleMouseDown(index)}
              >
                {renderCustomResultsView ? renderCustomResultsView(item) : item}
              </ListItem>
            );
          })}
        </List>
      )}
      <span id="initInstr" style={{ display: 'none' }}>
        {ariaInitialInstructions}
      </span>
    </div>
  );
};

Typeahead.defaultProps = {
  className: 'typeahead-component',
  getResults: null,
  results: [],
  inheritedStyles: '',
  isFieldLabel: false,
  customFilter: null,
  minSearchChars: 3,
  minItemsInList: 4,
  ariaInitialInstructions:
    'When autocomplete results are available use up and down arrows to review and enter to select. Touch device users, explore by touch or with swipe gestures.',
};

const StyledTypeahead: ComponentType<Props> = styled(Typeahead)`
  ${styles};
`;

export default StyledTypeahead;

export { Typeahead as TypeaheadVanilla };
