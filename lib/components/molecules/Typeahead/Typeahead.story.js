import React, { useState } from 'react';
import { storiesOf } from '@storybook/react';
// import { action } from '@storybook/addon-actions';
import defaultConfig from './Typeahead.mock';

// Import Styled Component to showcase variations
import Typeahead, { TypeaheadVanilla } from '.';

// eslint-disable-next-line react/prop-types
const ListItem = ({ children }) => children;

const TypeaheadVanillaWrapper = () => {
  const [suggestions, setSuggestions] = useState([]);

  return (
    <TypeaheadVanilla
      suggestions={suggestions}
      handleChange={() => {
        setSuggestions(defaultConfig.suggestions);
      }}
      renderListItem={item => <ListItem key={item}>{item}</ListItem>}
    />
  );
};

const TypeaheadWrapper = () => {
  const [suggestions, setSuggestions] = useState([]);

  return (
    <Typeahead
      suggestions={suggestions}
      handleChange={() => {
        setSuggestions(defaultConfig.suggestions);
      }}
      renderListItem={item => <ListItem key={item}>{item}</ListItem>}
    />
  );
};

// TODO: indentation is not working fine in editor. Need to check for .hbs files
// $FlowFixMe eslint-disable-next-line extra-rules/no-commented-out-code
storiesOf('Molecules', module)
  .addParameters({ jest: ['Typeahead', 'TypeaheadVanilla'] })
  .add('Typeahead Knobs', () => <TypeaheadVanillaWrapper />)
  .add('Typeahead', () => <TypeaheadWrapper />);
