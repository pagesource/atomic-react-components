import React from 'react';
import { mount } from 'enzyme';
import { act } from 'react-dom/test-utils';
import { useSpeechRecognition } from '../../index';
import MockSpeechRecognition from '../useSpeechRecognition.mock';

describe('Hook: useSpeechRecognition ', () => {
  jest.useFakeTimers();

  let wrapper;
  const mockHandleSpeechEnd = jest.fn();
  const mockOnSpeechRecognitionResults = jest.fn();
  const MockSpeechRecognitionComponent = () => null;
  const TestSpeechRecognition = () => {
    const props = useSpeechRecognition({
      onSpeechRecognitionResults: mockOnSpeechRecognitionResults,
      handleSpeechEnd: mockHandleSpeechEnd,
    });

    return <MockSpeechRecognitionComponent {...props} />;
  };

  beforeEach(() => {
    jest.clearAllTimers();
    jest.clearAllMocks();
    window.SpeechRecognition = MockSpeechRecognition;
    wrapper = mount(<TestSpeechRecognition />);
  });

  describe('When browser supported speech recognition', () => {
    it('Check browser supported: true ', () => {
      expect(wrapper.find(MockSpeechRecognitionComponent).props().browserSupported).toBe(true);
    });

    it('Check isListening should be: false ', () => {
      expect(wrapper.find(MockSpeechRecognitionComponent).props().isListening).toBe(false);
    });
  });

  describe('When browser unsupported speech recognition', () => {
    beforeEach(() => {
      window.SpeechRecognition = undefined;
      wrapper = mount(<TestSpeechRecognition />);
    });

    it('Check browser supported: false ', () => {
      expect(wrapper.find(MockSpeechRecognitionComponent).props().browserSupported).toBe(false);
    });
  });

  describe('When listening speech recognition', () => {
    beforeEach(() => {
      wrapper.update();
      act(() => {
        wrapper.find(MockSpeechRecognitionComponent).props().onSpeechListenHandler();
      });
    });

    it('Should call start() instance once', () => {
      expect(MockSpeechRecognition.start.mock.calls.length).toBe(1);
    });

    it('Should call stop() instance once', () => {
      act(() => {
        wrapper.find(MockSpeechRecognitionComponent).props().onSpeechListenHandler();
      });
      wrapper.update();

      act(() => {
        wrapper.find(MockSpeechRecognitionComponent).props().onStop();
      });

      wrapper.update();
      // check stop method called
      expect(MockSpeechRecognition.stop.mock.calls.length).toBe(1);

      // check mockHandleSpeechEnd called
      expect(mockHandleSpeechEnd.mock.calls.length).toBe(1);

      // check isListening
      expect(wrapper.find(MockSpeechRecognitionComponent).props().isListening).toBe(false);
    });
  });

  describe('When not listening speech recognition', () => {
    beforeEach(() => {
      act(() => {
        wrapper.find(MockSpeechRecognitionComponent).props();
      });
      wrapper.update();
    });

    it('Should not call start() instance again', () => {
      expect(MockSpeechRecognition.start.mock.calls.length).toBe(0);
    });

    it('Should not call stop() instance again', () => {
      // check stop method called
      expect(MockSpeechRecognition.stop.mock.calls.length).toBe(0);

      // check mockHandleSpeechEnd called
      expect(mockHandleSpeechEnd.mock.calls.length).toBe(0);

      // check isListening
      expect(wrapper.find(MockSpeechRecognitionComponent).props().isListening).toBe(false);
    });
  });

  describe('Check Result', () => {
    beforeEach(() => {
      act(() => {
        wrapper.find(MockSpeechRecognitionComponent).props().onSpeechListenHandler();
      });
      wrapper.update();
    });

    it('Check isListening: true', () => {
      expect(wrapper.find(MockSpeechRecognitionComponent).props().isListening).toBe(true);
    });

    it('check results: Hello XT', () => {
      jest.advanceTimersByTime(500);
      expect(mockOnSpeechRecognitionResults.mock.calls.length).toBe(1);
      expect(mockOnSpeechRecognitionResults.mock.calls[0][0]).toEqual('Hello XT');
    });
  });
});
