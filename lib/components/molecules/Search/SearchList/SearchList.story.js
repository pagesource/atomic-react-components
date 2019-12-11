import React from 'react';
import { storiesOf } from '@storybook/react';
// import { action } from '@storybook/addon-actions';
import defaultConfig from './SearchList.mock';

// Import Styled Component to showcase variations
import SearchList, { SearchListVanilla } from './SearchList';

const ListItem = ({ children }) => children;

// TODO: indentation is not working fine in editor. Need to check for .hbs files
// $FlowFixMe eslint-disable-next-line extra-rules/no-commented-out-code
storiesOf('Molecules', module)
  .addParameters({ jest: ['Search', 'SearchVanilla'] })
  .add('Search List Knobs', () => (
    <SearchListVanilla
      {...defaultConfig}
      className={`hide-default-sample ${defaultConfig.className}`}
    />
  ))
  .add('Search List', () => (
    <SearchList {...defaultConfig} renderList={item => <ListItem key={item}>{item}</ListItem>} />
  ));
