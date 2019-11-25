// @flow
/**
 *
 * SearchInput
 *
 */
import type { Node } from 'react';

import React, { memo, useCallback } from 'react';
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
  const noop = () => {};

  const SearchInput = ({
    className,
    onSearch,
    onSpeechStart,
    onSpeechEnd,
    inputProps,
    searchButtonProps,
    speechButtonProps,
    lang,
    showInterimResults,
    children,
  }: Props): Node => {
    const [inputValue, setInputValue] = React.useState(inputProps.value || '');
    const [isListening, setIsListening] = React.useState(false);
    const setSpeechResult = event => {
      const { transcript } = event && event.results && event.results[0] && event.results[0][0];
      if (transcript) {
        setInputValue(transcript);
      }
    };

    const handleSpeechEnd = () => {
      onSpeechEnd(inputValue);
      setIsListening(false);
    };

    if (browserSupportsSpeechRecognition) {
      speechRecognition.onresult = setSpeechResult;
      speechRecognition.onend = handleSpeechEnd;
      if (lang) {
        speechRecognition.lang = lang;
      }
      speechRecognition.interimResults = showInterimResults;
    }

    // memoize functions passed as props to children
    const onSearchClick = useCallback(() => {
      onSearch(inputValue);
    }, [inputValue]);

    const onSpeechClick = () => {
      if (isListening) {
        speechRecognition.abort();
        return;
      }
      setIsListening(true);
      onSpeechStart();
      speechRecognition.start();
    };

    const onInputChange = useCallback(
      (e: SyntheticEvent<HTMLInputElement>) => {
        if (typeof inputProps.onChange === 'function') {
          inputProps.onChange(e);
        }
        setInputValue((e.currentTarget: HTMLInputElement).value);
      },
      [inputProps.onChange]
    );

    return (
      <>
        <div className={classnames('search', isListening ? 'search--listening' : '', className)}>
          <Input
            aria-label="Search"
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
        {children && (
          <div className="search-children">
            {children({ inputValue, isListening, speechRecognition })}
          </div>
        )}
      </>
    );
  };

  SearchInput.defaultProps = {
    inheritedStyles: '',
    className: '',
    onSearch: noop,
    onSpeechStart: noop,
    onSpeechEnd: noop,
    showInterimResults: true,
    inputProps: {},
    searchButtonProps: {},
    speechButtonProps: {},
    lang: '',
  };

  return memo<Props>(SearchInput);
};
const SearchInput = createSearchInput(window);

export default styled(SearchInput)`
  ${styles};
`;

export { SearchInput as SearchInputVanilla };
