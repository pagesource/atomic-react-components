// @flow
/**
 *
 * Search
 *
 */
import React, { useEffect, useState, useCallback } from 'react';
import styled from 'styled-components';
import classnames from 'classnames';
import Input from '../../atoms/Input';
import Button from '../../atoms/Button';
import List from '../../molecules/List';

import styles from './Search.style';
import type { Props } from './types';

const Search = ({ className, inputProps, dataLists, children, renderListItem }: Props): Node => {
  const [inputValue, setInputValue] = React.useState(inputProps.value || '');
  const [searchLists, setSearchList] = React.useState([]);

  const onInputChange = e => {
    setInputValue(e.target.value);
  };

  const onSearchClick = () => {
    if (inputValue.trim()) {
      const lists = dataLists.filter(val => {
        return val.toLowerCase().indexOf(inputValue.toLowerCase()) !== -1;
      });
      setSearchList(lists);
    }
    return false;
  };

  const keyPress = e => {
    if (e.key !== 'undefined' && e.key !== 'Enter') return false;
    onSearchClick();
  };

  return (
    <div className={classnames(styles.default, className)}>
      <div className="search-box">
        <Input
          aria-label="Search"
          {...inputProps}
          className={classnames('search-txt', inputProps.className)}
          value={inputValue}
          onChange={onInputChange}
          onKeyPress={keyPress}
        />
        <div className="mic-box">
          <div className="mic-box-2">
            <span className="search-mic" />
          </div>
        </div>
        <Button onClick={onSearchClick} className="search-btn-container" type="button">
          <div className="search-btn-box">
            <span className="search-btn" />
          </div>
        </Button>
      </div>

      <List ListType="ul">
        {searchLists.map((val, index) => {
          return (
            <li className="search-list" key={index}>
              {renderListItem(val)}
            </li>
          );
        })}
      </List>
    </div>
  );
};

Search.defaultProps = {
  className: '',
  inputProps: {},
  searchLists: ['test1', 'test2'],
};

export default styled(Search)`
  ${styles};
`;

export { Search as SearchVanilla };
