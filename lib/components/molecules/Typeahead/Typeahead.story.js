import React, { useState } from 'react';
import { storiesOf } from '@storybook/react';
// import { action } from '@storybook/addon-actions';
import defaultConfig from './Typeahead.mock';

// Import Styled Component to showcase variations
import Typeahead, { TypeaheadVanilla } from '.';

const Wrapper = Component => {
  const [results, setResults] = useState([]);
  const [inputText, setInputText] = useState('');

  return (
    <Component
      id="typeahead"
      name="wordsearch"
      placeholder="Type any word"
      disabled={false}
      searchValue={inputText}
      onChangeHandler={e => {
        setInputText(e.currentTarget.value);
      }}
      results={results}
      getResults={() => {
        setResults(defaultConfig.results);
      }}
      getSelectedResultValue={value => {
        setInputText(value);
      }}
      renderCustomResultsView={item => <p>{item}</p>}
      isFieldLabel="true"
      label="search word"
    />
  );
};

// TODO: indentation is not working fine in editor. Need to check for .hbs files
// $FlowFixMe eslint-disable-next-line extra-rules/no-commented-out-code
storiesOf('Molecules/Typeahead', module)
  .addParameters({ jest: ['Typeahead', 'TypeaheadVanilla'] })
  .add('Knobs', () => Wrapper(TypeaheadVanilla))
  .add('Default', () => Wrapper(Typeahead));
