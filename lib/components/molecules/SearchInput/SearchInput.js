// @flow
/**
 *
 * SearchInput
 *
 */
import type { Node } from 'react';

import React from 'react';
import styled from 'styled-components';
import classnames from 'classnames';

import styles from './SearchInput.style';
import type { Props, SpeechRecognition } from './types';
import Input from '../../atoms/Input';
import Button from '../../atoms/Button';

export const createSearchInput = (global: any) => {
  const BrowserSpeechRecognition: any =
    typeof global !== 'undefined' &&
    (global.SpeechRecognition ||
      global.webkitSpeechRecognition ||
      global.mozSpeechRecognition ||
      global.msSpeechRecognition ||
      global.oSpeechRecognition);
  const speechRecognition: SpeechRecognition =
    BrowserSpeechRecognition && new BrowserSpeechRecognition();

  const browserSupportsSpeechRecognition = BrowserSpeechRecognition !== undefined;
  const SearchInput = ({
    className,
    onSearch,
    onSpeechStart,
    onSpeechEnd,
    inputProps = {},
    searchButtonProps = {},
    speechButtonProps = {},
    lang,
  }: Props): Node => {
    const [inputValue, setInputValue] = React.useState(inputProps.value || '');
    const [isListening, setIsListening] = React.useState(false);

    const setSpeechResult = event => {
      const value = (event && event.results && event.results[0][0].transcript) || '';
      if (typeof onSpeechEnd === 'function') {
        onSpeechEnd(value);
      }
      if (value) {
        setInputValue(value);
      }
      setIsListening(false);
    };

    if (browserSupportsSpeechRecognition) {
      speechRecognition.onresult = setSpeechResult;
      speechRecognition.onend = setSpeechResult;
      speechRecognition.lang = lang;
    }

    const onSearchClick = () => {
      if (typeof onSearch === 'function') {
        onSearch(inputValue);
      }
    };

    const onSpeechClick = () => {
      if (isListening) {
        speechRecognition.abort();
        setIsListening(false);
        return;
      }
      if (typeof onSpeechStart === 'function') {
        setIsListening(true);
        onSpeechStart();
      }
      speechRecognition.start();
    };

    const onInputChange = (e: SyntheticEvent<HTMLInputElement>) => {
      if (typeof inputProps.onChange === 'function') {
        inputProps.onChange(e);
      }
      setInputValue((e.currentTarget: HTMLInputElement).value);
    };

    return (
      <div className={classnames('search', isListening ? 'search--listening' : '', className)}>
        <Input
          {...inputProps}
          className={classnames('search__input', inputProps.className)}
          onChange={onInputChange}
          value={inputValue}
        />
        {browserSupportsSpeechRecognition && (
          <Button
            {...speechButtonProps}
            className={classnames('search__speech-btn', speechButtonProps.className)}
            onClick={onSpeechClick}
          />
        )}
        <Button
          {...searchButtonProps}
          className={classnames('search__search-btn', searchButtonProps.className)}
          onClick={onSearchClick}
        />
      </div>
    );
  };

  return SearchInput;
};
const SearchInput = createSearchInput(window);
export default styled(SearchInput)`
  ${styles};
`;

export { SearchInput as SearchInputVanilla };
