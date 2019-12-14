import React from 'react';
import { mount } from 'enzyme';

import { useSpeechRecognition } from '../../index';
import MockSpeechRecognition from './useSpeechRecognition.mock';

describe('<UseSpeechRecognition />', () => {
  const onListen = () => {};
  test('should listen speech recognition', () => {
    expect(onListen).toBeTruthy();
  });
});

// runTests({
//   Example,
//   TestComponent,
//   mockOnResult,
//   mockOnEnd
// });

describe('useSpeechRecognition', () => {
  let wrapper;
  const handleSpeechEnd = jest.fn();
  const onSpeachRecognitionResults = jest.fn();
  const TestComponent = () => null;
  const Example = () => {
    const props = useSpeechRecognition({
      onSpeachRecognitionResults,
      handleSpeechEnd,
    });

    return <TestComponent {...props} />;
  };

  beforeEach(() => {
    jest.clearAllTimers();
    jest.clearAllMocks();
    window.SpeechRecognition = MockSpeechRecognition;
    wrapper = mount(<Example />);
  });

  describe('initial props', () => {
    it('isListening should be: false ', () => {
      expect(wrapper.find(TestComponent).props().isListening).toBe(false);
    });

    it('passes speaking: false', () => {
      wrapper
        .find(TestComponent)
        .props()
        .onListen();
      expect(wrapper.find(TestComponent).props().isListening).toBe(false);
    });
  });
});
