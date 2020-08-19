/**
 *
 * Search
 *
 */
import React, { useState, useCallback } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import classnames from 'classnames';

import { useSpeechRecognition } from '../../../core/hooks';
import Typeahead from '../Typeahead';
import Button from '../../atoms/Button';
import styles from './Search.style';

const Search = ({ className, inputProps, dataLists, getSelectedResultValue, renderListItem }) => {
  const [searchString, setSearchString] = useState(inputProps.value || '');
  const [searchLists, setSearchList] = useState();

  const onSearchClick = () => {
    getSelectedResultValue(searchString);
  };

  const customFilter = useCallback(
    (inputText) => {
      const lists = dataLists.filter((name) => {
        return name.toLowerCase().indexOf(inputText.toLowerCase()) !== -1;
      });
      setSearchList(lists);
    },
    [dataLists, setSearchList]
  );

  const onSpeechRecognitionResults = (result) => {
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
          onChangeHandler={(e) => {
            setSearchString(e.currentTarget.value);
          }}
          results={searchLists}
          getResults={() => {
            customFilter(searchString);
          }}
          getSelectedResultValue={(value) => {
            setSearchString(value);
            getSelectedResultValue(value);
          }}
          renderCustomResultsView={(item) => renderListItem(item)}
          isFieldLabel
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
          <Button onClick={onSearchClick} type="button">
            <i className="search-icon search-btn" />
          </Button>
        </div>
      </div>
    </div>
  );
};

Search.propTypes = {
  className: PropTypes.string,
  inputProps: PropTypes.objectOf(PropTypes.object),
  dataLists: PropTypes.arrayOf(PropTypes.any).isRequired,
  getSelectedResultValue: PropTypes.func.isRequired,
  renderListItem: PropTypes.func.isRequired,
};

Search.defaultProps = {
  className: '',
  inputProps: {},
};

const StyledSearch = styled(Search)`
  ${styles};
`;
export default StyledSearch;

export { Search as SearchVanilla };
