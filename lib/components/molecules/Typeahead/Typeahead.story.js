import React, { useState } from 'react';
import { storiesOf } from '@storybook/react';
// import { action } from '@storybook/addon-actions';
import defaultConfig from './Typeahead.mock';

// Import Styled Component to showcase variations
import Typeahead, { TypeaheadVanilla } from '.';
import ListItem from './ListItem';

const Wrapper = Component => {
  const [suggestions, setSuggestions] = useState([]);

  return (
    <Component
      id="typeahead"
      disabled={false}
      name="wordsearch"
      suggestions={suggestions}
      handleChange={reset => {
        if (reset) {
          setSuggestions([]);
        } else {
          setSuggestions(defaultConfig.suggestions);
        }
      }}
      renderListItem={item => <ListItem key={item}>{item}</ListItem>}
    />
  );
};

// TODO: indentation is not working fine in editor. Need to check for .hbs files
// $FlowFixMe eslint-disable-next-line extra-rules/no-commented-out-code
storiesOf('Molecules', module)
  .addParameters({ jest: ['Typeahead', 'TypeaheadVanilla'] })
  .add('Typeahead Knobs', () => Wrapper(TypeaheadVanilla))
  .add('Typeahead', () => Wrapper(Typeahead));
