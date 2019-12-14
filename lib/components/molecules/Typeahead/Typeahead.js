// @flow
/**
 *
 * Typeahead
 *
 */
import React, { useState } from 'react';
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
  ...otherProps
}: Props): React.Element<any> => {
  const [updatedResults, setFilteredResults] = useState([]);
  const [activeResult, setActiveResult] = useState(0);

  const triggerGetResults = val => {
    return val && val.trim().length >= 3;
  };

  /**
   * Function to return filtered results
   * @param {*} allResults
   * @param {*} inputText
   */
  const getFilteredResults = (allResults, inputText) => {
    const filteredResults =
      allResults &&
      allResults.filter(Result => Result.toLowerCase().indexOf(inputText.toLowerCase()) > -1);
    return filteredResults;
  };

  /**
   * Function to handle item selection
   * @param {'*'} e
   */
  const handleClick = item => {
    setActiveResult(0);
    getSelectedResultValue(item);
  };

  /**
   * Function to handle text change in input
   * @param {*} e
   */
  const handleChange = e => {
    if (onChangeHandler) {
      onChangeHandler(e);
    }
    const { value: inputText } = e.target;
    let filteredResults = results;
    if (triggerGetResults(inputText)) {
      if (getResults) {
        getResults();
      } else {
        filteredResults = getFilteredResults(results, inputText);
      }
      setFilteredResults(filteredResults);
    } else {
      setFilteredResults([]);
    }
  };

  /**
   * Function to handle uparrow, downarrow, enter and escape
   * @param {*} e
   */
  const handleKeyDown = e => {
    switch (e.keyCode) {
      case ENTER_KEY: {
        setActiveResult(0);
        getSelectedResultValue(updatedResults[activeResult]);
        setFilteredResults([]);
        break;
      }
      case UP_ARROW: {
        if (activeResult === 0) {
          setActiveResult(updatedResults.length - 1);
          return;
        }
        setActiveResult(activeResult - 1);
        break;
      }
      case DOWN_ARROW: {
        if (activeResult + 1 === updatedResults.length) {
          setActiveResult(0);
          return;
        }
        setActiveResult(activeResult + 1);
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
  const handleMouseEnter = activeItemIndex => {
    setActiveResult(activeItemIndex);
  };

  /**
   * Hide suggestion list on mouse down
   */
  const handleMouseDown = activeItemIndex => {
    setActiveResult(activeItemIndex);
    getSelectedResultValue(updatedResults[activeResult]);
    setFilteredResults([]);
  };

  const listOptions = {
    noMargin: true,
  };

  return (
    <div id="typeahead-component" className={className} >
      <Label htmlFor={id} className={classNames({ 'visually-hidden': isFieldLabel })}>
        {label}
      </Label>
      <Input
        {...otherProps}
        type="search"
        value={searchValue}
        onChange={handleChange}
        onKeyDown={handleKeyDown}
        autoComplete="off"
        aria-autocomplete="both"
        aria-describedby="initInstr"
        aria-owns="results"
        aria-expanded={updatedResults.length > 0}
        aria-label={label}
      />
      {updatedResults && (
        <List {...listOptions} id="results" role="listbox">
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
    </div>
  );
};

Typeahead.defaultProps = {};

export default styled(Typeahead)`
  ${styles};
`;

export { Typeahead as TypeaheadVanilla };
