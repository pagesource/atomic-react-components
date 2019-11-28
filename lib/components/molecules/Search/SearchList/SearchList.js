// @flow
import React, { Node } from 'react';
import styled from 'styled-components';

import type { Props } from './types';
import styles from './SearchList.style';
import List from '../../List';

const SearchList = ({ dataLists, renderList }: Props): Node => {
  return (
    <List ListType="ul">
      {dataLists.map(val => {
        return (
          <li className="search-list" key={val.id}>
            {renderList(val.name)}
          </li>
        );
      })}
    </List>
  );
};

SearchList.defaultProps = {
  className: '',
  renderList: () => {},
  dataLists: ['test', 'test2'],
};

export default styled(SearchList)`
  ${styles};
`;

export { SearchList as SearchListVanilla };
