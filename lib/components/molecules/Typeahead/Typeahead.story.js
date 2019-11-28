import React from 'react';
import { storiesOf } from '@storybook/react';
// import { action } from '@storybook/addon-actions';
import defaultConfig from './Typeahead.mock';

// Import Styled Component to showcase variations
import Typeahead, { TypeaheadVanilla } from '.';

// eslint-disable-next-line react/prop-types
const ListItem = ({ children }) => children;

// TODO: indentation is not working fine in editor. Need to check for .hbs files
// $FlowFixMe eslint-disable-next-line extra-rules/no-commented-out-code
storiesOf('Molecules', module)
  .addParameters({ jest: ['Typeahead', 'TypeaheadVanilla'] })
  .add('Typeahead Knobs', () => (
    <TypeaheadVanilla
      {...defaultConfig}
      renderListItem={item => <ListItem key={item}>{item}</ListItem>}
    />
  ))
  .add('Typeahead', () => (
    <Typeahead {...defaultConfig} renderListItem={item => <ListItem key={item}>{item}</ListItem>} />
  ));
