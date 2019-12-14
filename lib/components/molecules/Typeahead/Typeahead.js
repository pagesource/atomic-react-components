// @flow
/**
 * Typeahead
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
import { ENTER_KEY, UP_ARROW, DOWN_ARROW, ESCAPE, TAB } from './constants';

const Typeahead = ({
  id,
  getResults,
  results,
  className,
  renderCustomResultsView,
  searchValue,
  onChangeHandler,
  getSelectedResultValue,
  label,
  isFieldLabel,
  ...otherProps
}: Props): React.Element<any> => {
  const [updatedResults, setFilteredResults] = useState(results);
  const [activeResult, setActiveResult] = useState(0);
  const [showResults, setShowResults] = useState(false);

  const triggerGetResults = val => {
    return val && val.trim().length >= 3;
  };

  /**
   * Function to handle item selection
   * @param {'*'} e
   */
  const handleClick = item => {
    setActiveResult(0);
    getSelectedResultValue(item);
    setShowResults(false);
  };

  const getFilteredResults = (allResults, inputText) => {
    const filteredResults = allResults.filter(
      Result => Result.toLowerCase().indexOf(inputText.toLowerCase()) > -1
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
        setActiveResult(0);
        getSelectedResultValue(updatedResults[activeResult]);
        setShowResults(false);
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
        setActiveResult(0);
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
    const { value: inputText } = e.currentTarget;
    let filteredResults = results;
    if (triggerGetResults(inputText)) {
      if (getResults) {
        getResults();
      } else {
        filteredResults = getFilteredResults(results, inputText);
      }
      setFilteredResults(filteredResults);
      setShowResults(true);
    } else {
      setShowResults(false);
    }
  };

  /**
   * Highlight item on mouse over
   */
  const onMouseEnter = activeItemIndex => {
    setActiveResult(activeItemIndex);
  };

  const listOptions = {
    noMargin: true,
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
        aria-describedby="initInstr"
        aria-owns="results"
        aria-expanded={showResults}
      />
      {showResults && (
        <List {...listOptions} id="results" role="listbox">
          {updatedResults.map((item, index) => {
            return (
              <ListItem
                key={`typeahead-${otherProps.name}-${index.toString()}`}
                index={index}
                activeResult={activeResult}
                handleClick={handleClick}
                item={item}
                onMouseEnter={() => onMouseEnter(index)}
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

Typeahead.defaultProps = {
  label: '',
  className: 'typeahead-component',
  inheritedStyles: '',
  renderCustomResultsView: () => {},
};

export default styled(Typeahead)`
  ${styles};
`;

export { Typeahead as TypeaheadVanilla };
