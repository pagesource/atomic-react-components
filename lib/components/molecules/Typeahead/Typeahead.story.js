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

const WrapperWithoutGetResults = Component => {
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
      results={defaultConfig.results}
      getSelectedResultValue={value => {
        setInputText(value);
      }}
      renderCustomResultsView={item => <p>{item}</p>}
      isFieldLabel="true"
      label="search word"
    />
  );
};

const WrapperWithCustomFilterMethod = Component => {
  const [inputText, setInputText] = useState('');

  const getFilteredResults = (allResults, inputValue) => {
    const filteredResults =
      allResults &&
      allResults.filter(
        result => result.first.toLowerCase().indexOf(inputValue.toLowerCase()) > -1
      );
    return filteredResults;
  };

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
      results={defaultConfig.people}
      getSelectedResultValue={value => {
        setInputText(`${value.first} ${value.last}`);
      }}
      isFieldLabel="true"
      label="search word"
      renderCustomResultsView={item => <p>{`${item.first} ${item.last}`}</p>}
      customFilter={getFilteredResults}
    />
  );
};

// TODO: indentation is not working fine in editor. Need to check for .hbs files
// $FlowFixMe eslint-disable-next-line extra-rules/no-commented-out-code
storiesOf('Molecules/Typeahead', module)
  .addParameters({ jest: ['Typeahead', 'TypeaheadVanilla'] })
  .add('Knobs', () => Wrapper(TypeaheadVanilla))
  .add('Default', () => Wrapper(Typeahead))
  .add('Default-2nd', () => WrapperWithoutGetResults(Typeahead))
  .add('Default-3nd', () => WrapperWithCustomFilterMethod(Typeahead));
