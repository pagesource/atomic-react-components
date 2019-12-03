// @flow
/**
 *
 * Search
 *
 */
import React, { useState, Node, useCallback } from 'react';
import styled from 'styled-components';
import classnames from 'classnames';

import Input from '../../atoms/Input';
import Button from '../../atoms/Button';
import SearchList from './SearchList/SearchList';
import styles from './Search.style';
import type { Props } from './types';

const BrowserSpeechRecognition: any =
  typeof window !== 'undefined' && (window.SpeechRecognition || window.webkitSpeechRecognition);

const speechRecognition: SpeechRecognition =
  BrowserSpeechRecognition && new BrowserSpeechRecognition();

const Search = ({
  className,
  inputProps,
  dataLists,
  renderListItem,
  onSpeechStart,
  onSpeechEnd,
}: Props): Node => {
  const browserSupportsSpeechRecognition = BrowserSpeechRecognition !== undefined;
  const [inputValue, setInputValue] = useState(inputProps.value || '');
  const [searchLists, setSearchList] = useState([]);
  const [isListening, setIsListening] = useState(false);

  const onSearchClick = useCallback(() => {
    if (inputValue.trim()) {
      const lists = dataLists.filter(({ name }) => {
        return name.toLowerCase().indexOf(inputValue.toLowerCase()) !== -1;
      });
      setSearchList(lists);
    }
    return false;
  }, [inputValue, dataLists, setSearchList]);

  const setSpeechResult = event => {
    const { transcript } = event && event.results && event.results[0] && event.results[0][0];
    if (transcript) {
      setInputValue(transcript);
    }
  };

  const handleSpeechEnd = () => {
    onSpeechEnd(inputValue);
    setIsListening(false);
    onSearchClick();
  };

  const onSpeechClick = () => {
    if (isListening) {
      speechRecognition.abort();
      return;
    }
    setIsListening(true);
    onSpeechStart();
    speechRecognition.start();
  };

  if (browserSupportsSpeechRecognition) {
    speechRecognition.onresult = setSpeechResult;
    speechRecognition.onend = handleSpeechEnd;
  }

  const onInputChange = e => {
    setInputValue(e.target.value);
  };

  const keyPress = e => {
    if (e.key !== 'undefined' && e.key !== 'Enter') return false;
    onSearchClick();
    return true;
  };

  return (
    <div className={classnames(styles.default, className)}>
      <div className="search-box">
        <Input
          {...inputProps}
          aria-label="Search"
          className={classnames('search-txt', inputProps.className)}
          value={inputValue}
          onChange={onInputChange}
          onKeyPress={keyPress}
        />
        <div className="mic-box">
          <div className="mic-box-2">
            <span className="search-mic" onClick={onSpeechClick} />
          </div>
        </div>
        <Button onClick={onSearchClick} className="search-btn" type="button">
          <div className="search-btn-box">
            <span className="search-btn" />
          </div>
        </Button>
      </div>
      <SearchList dataLists={searchLists} renderList={renderListItem} />
    </div>
  );
};

Search.defaultProps = {
  className: '',
  inputProps: {},
  searchLists: ['duper', 'test'],
  onSpeechEnd: () => {},
  onSpeechStart: () => {},
};

export default styled(Search)`
  ${styles};
`;

export { Search as SearchVanilla };
