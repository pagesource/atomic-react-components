import React from 'react';
import { act } from 'react-dom/test-utils';
import { shallow, mount } from 'enzyme';

import SearchInput, { createSearchInput } from '../index';

const createMockSearchInput = () => {
  const speechInstance = {
    start: jest.fn(),
    abort: jest.fn(),
  };
  const mockWindow = {
    SpeechRecognition: function SpeechRecognition() {
      return speechInstance;
    },
  };
  const SearchInputComp = createSearchInput(mockWindow);
  return { SearchInputComp, speechInstance };
};

describe('<SearchInput />', () => {
  let SearchInputComponent = '';

  test('should render correctly', () => {
    SearchInputComponent = shallow(<SearchInput>Test</SearchInput>);
    expect(SearchInputComponent).toMatchSnapshot();
  });

  test('calls input onchange prop on input change', () => {
    const mockOnChange = jest.fn();
    const mockEvent = { currentTarget: { value: 'Hello' } };
    const { SearchInputComp } = createMockSearchInput();
    const wrapper = mount(<SearchInputComp {...{ inputProps: { onChange: mockOnChange } }} />);
    const input = wrapper.find('.search__input').at(0);
    act(() => {
      input.simulate('change', mockEvent);
    });
    expect(mockOnChange).toHaveBeenCalled();
  });

  test('simulates search click', () => {
    const onSearch = jest.fn();
    const wrapper = mount(<SearchInput onSearch={onSearch} />);
    wrapper
      .find('.search__search-btn')
      .at(0)
      .simulate('click');
    expect(onSearch).toHaveBeenCalled();
  });

  test('onSpeechStart should be called on speech button click', () => {
    const onSpeechStart = jest.fn();
    const { SearchInputComp } = createMockSearchInput();
    const wrapper = mount(<SearchInputComp onSpeechStart={onSpeechStart} />);
    wrapper
      .find('.search__speech-btn')
      .at(0)
      .simulate('click');
    expect(onSpeechStart).toHaveBeenCalled();
  });

  test('calls setState with speech transcript on speechResult', () => {
    const mockSetInputValue = jest.fn();
    const onSpeechEnd = jest.fn();
    React.useState = jest.fn(() => ['', mockSetInputValue]);
    const mockSpeechEvent = {
      results: [[{ transcript: 'transcript' }]],
    };
    mockSpeechEvent.results[0].isFinal = true;
    const { speechInstance, SearchInputComp } = createMockSearchInput();
    mount(<SearchInputComp onSpeechEnd={onSpeechEnd} />);
    act(() => {
      speechInstance.onresult(mockSpeechEvent);
    });
    expect(mockSetInputValue).toHaveBeenCalledWith('transcript');
    speechInstance.onend();
    expect(onSpeechEnd).toHaveBeenCalled();
  });

  test('does not render speech button if speech not supported', () => {
    const mockWindow = {
      SpeechRecognition: undefined,
    };
    const SearchInputComp = createSearchInput(mockWindow);
    const wrapper = mount(<SearchInputComp />);
    expect(wrapper.find('.search__speech-btn').length).toBe(0);
  });

  test('aborts speech on clicking speech button when already listening', () => {
    const { SearchInputComp, speechInstance } = createMockSearchInput();
    // mock to set isListening to true
    React.useState = jest.fn(() => [true, jest.fn()]);

    const wrapper = mount(<SearchInputComp />);
    wrapper
      .find('.search__speech-btn')
      .at(0)
      .simulate('click');
    expect(speechInstance.abort).toHaveBeenCalled();
  });

  test('Sets language passed in props to speech instance', () => {
    const { SearchInputComp, speechInstance } = createMockSearchInput();
    // mock to set isListening to true
    const language = 'en';
    mount(<SearchInputComp lang={language} />);
    expect(speechInstance.lang).toBe(language);
  });
});
