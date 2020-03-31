import React from 'react';
import { storiesOf } from '@storybook/react';
// import { action } from '@storybook/addon-actions';
import defaultConfig from './Search.mock';

// Import Styled Component to showcase variations
import Search, { SearchVanilla } from '.';

const ListItem = ({ children }) => children;

// TODO: indentation is not working fine in editor. Need to check for .hbs files
storiesOf('Molecules/Search', module)
  .addParameters({ jest: ['Search', 'SearchVanilla'] })
  .add('Search Box Knobs', () => (
    <SearchVanilla
      {...defaultConfig}
      className={`hide-default-sample ${defaultConfig.className}`}
    />
  ))
  .add('Search Box', () => (
    <Search {...defaultConfig} renderListItem={(item) => <ListItem key={item}>{item}</ListItem>} />
  ));
