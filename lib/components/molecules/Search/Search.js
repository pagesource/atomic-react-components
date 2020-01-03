// @flow
/**
 *
 * Search
 *
 */
import React, { useState, Node, useCallback } from 'react';
import styled from 'styled-components';
import classnames from 'classnames';

import { useSpeechRecognition } from '../../../core/hooks';
import Typeahead, { TypeaheadVanilla } from '../Typeahead/';
import defaultConfig from './Search.mock';
// import Input from '../../atoms/Input';
import Button from '../../atoms/Button';
import SearchList from './SearchList/SearchList';
import styles from './Search.style';
import type { Props } from './types';

const Search = ({ className, inputProps, dataLists, renderListItem }: Props): Node => {
  const [searchString, setSearchString] = useState(inputProps.value || '');
  const [searchLists, setSearchList] = useState([]);

  const onSearchClick = useCallback(
    searchText => {
      const searchValue = typeof searchText === 'string' ? searchText : searchString;

      if (searchValue) {
        const lists = dataLists.filter(name => {
          console.log('name---', name);
          return name.toLowerCase().indexOf(searchValue.toLowerCase()) !== -1;
        });
        console.log('lists-->', lists);
        setSearchList(lists);
      }
      return false;
    },
    [searchString, dataLists, setSearchList]
  );

  const onSpeechRecognitionResults = result => {
    setSearchString(result);
    onSearchClick(result);
  };

  const handleSpeechEnd = () => {};

  const { isListening, onSpeechListenHandler, browserSupported } = useSpeechRecognition({
    onSpeechRecognitionResults,
    handleSpeechEnd,
  });

  const onSpeechClick = () => onSpeechListenHandler();

  const onChangeHandler = e => {
    const result = e.target.value;
    setSearchString(result);
  };

  const keyPress = e => {
    if (e.key !== 'undefined' && e.key !== 'Enter') return false;
    const result = e.target.value.trim();
    onSearchClick(result);
    return true;
  };

  return (
    <div className={classnames(styles.default, className)}>
      <div className="search-box">
        <TypeaheadVanilla
          className={classnames('search-txt', inputProps.className)}
          id="typeahead"
          name="wordsearch"
          placeholder="Type any word"
          disabled={false}
          searchValue={searchString}
          onChangeHandler={e => {
            setSearchString(e.currentTarget.value);
          }}
          results={searchLists}
          getResults={() => {
            setSearchList(dataLists);
          }}
          getSelectedResultValue={value => {
            setSearchString(value);
          }}
          renderCustomResultsView={item => <p>{item}</p>}
          isFieldLabel="true"
          label="search word"
          minSearchChars={3}
          minItemsInList={3}
        />
        {/* <Input
          {...inputProps}
          aria-label={inputProps.ariaLabel}
          className={classnames('search-txt', inputProps.className)}
          value={searchString}
          onChange={onChangeHandler}
          onKeyPress={keyPress}
        /> */}

        <div className="search-button">
          <Button>
            {browserSupported &&
              (isListening ? (
                <i className="search-icon search-loader" />
              ) : (
                // eslint-disable-next-line jsx-a11y/control-has-associated-label
                <i
                  className="search-icon search-mic"
                  role="button"
                  tabIndex={-1}
                  onClick={onSpeechClick}
                  onKeyPress={onSpeechClick}
                />
              ))}
          </Button>
          {/* <span className="search-mic" onClick={onSpeechClick} /> */}
          <Button onClick={onSearchClick} type="button">
            <i className="search-icon search-btn" />
          </Button>
        </div>
      </div>
      {/* <SearchList dataLists={searchLists} renderList={renderListItem} /> */}
    </div>
  );
};

Search.defaultProps = {
  className: '',
  inputProps: {},
  // searchLists: ['duper', 'test'],
};

export default styled(Search)`
  ${styles};
`;

export { Search as SearchVanilla };
