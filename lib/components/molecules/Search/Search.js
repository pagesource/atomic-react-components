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
import Typeahead, { TypeaheadVanilla } from '../Typeahead';
import Button from '../../atoms/Button';
import Icon from '../../atoms/Icon';
import styles from './Search.style';
import type { Props } from './types';

const Search = ({ className, inputProps, dataLists, getSelectedResultValue }: Props): Node => {
  const [searchString, setSearchString] = useState(inputProps.value || '');
  const [searchLists, setSearchList] = useState();

  const onSearchClick = () => {
    getSelectedResultValue(searchString);
  };

  const customFilter = useCallback(
    inputText => {
      const lists = dataLists.filter(name => {
        return name.toLowerCase().indexOf(inputText.toLowerCase()) !== -1;
      });
      setSearchList(lists);
    },
    [dataLists, setSearchList]
  );

  const onSpeechRecognitionResults = result => {
    setSearchString(result);
    customFilter(result);
  };

  const handleSpeechEnd = () => {};

  const { isListening, onSpeechListenHandler, browserSupported } = useSpeechRecognition({
    onSpeechRecognitionResults,
    handleSpeechEnd,
  });

  const onSpeechClick = () => onSpeechListenHandler();

  return (
    <div className={classnames(styles.default, className)}>
      <div className="search-box">
        <Typeahead
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
            customFilter(searchString);
          }}
          getSelectedResultValue={value => {
            setSearchString(value);
            getSelectedResultValue(value);
          }}
          renderCustomResultsView={item => <p>{item}</p>}
          isFieldLabel="true"
          label="search word"
          minSearchChars={3}
          minItemsInList={3}
        />
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
          <Icon onClick={onSearchClick} id="search" />
          {/* <Button onClick={onSearchClick} type="button">
            <i className="search-icon search-btn" />
          </Button> */}
        </div>
      </div>
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
