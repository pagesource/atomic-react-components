import React, { useState } from 'react';
import { storiesOf } from '@storybook/react';
// import { action } from '@storybook/addon-actions';
import defaultConfig from './Typeahead.mock';

// Import Styled Component to showcase variations
import Typeahead, { TypeaheadVanilla } from '.';
import ListItem from './ListItem';

const Wrapper = Component => {
  const [suggestions, setSuggestions] = useState([]);
  const [inputText, setInputText] = useState('');

  return (
    <Component
      id="typeahead"
      name="wordsearch"
      placeholder="Type any word"
      disabled={false}
      value={inputText}
      onChangeHandler={e => {
        setInputText(e.currentTarget.value);
      }}
      suggestions={suggestions}
      getSuggestions={() => {
        setSuggestions(defaultConfig.suggestions);
      }}
      getSelectedSuggestionValue={value => {
        setInputText(value);
      }}
      renderSuggestion={item => <ListItem key={item}>{item}</ListItem>}
    />
  );
};

// TODO: indentation is not working fine in editor. Need to check for .hbs files
// $FlowFixMe eslint-disable-next-line extra-rules/no-commented-out-code
storiesOf('Molecules/Typeahead', module)
  .addParameters({ jest: ['Typeahead', 'TypeaheadVanilla'] })
  .add('Knobs', () => Wrapper(TypeaheadVanilla))
  .add('Default', () => Wrapper(Typeahead));
