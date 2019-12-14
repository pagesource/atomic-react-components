import React from 'react';
import { mount } from 'enzyme';

class mockSpeechRecognition {
  constructor() {
    this.onresult = () => {};
    this.onend = () => {};
    this.start = () => {
      // By calling startMock with the current settings,
      // we can test that they were updated correctly
      mockSpeechRecognition.start({
        lang: this.lang,
        interimResults: this.interimResults
      });

      setTimeout(() => {
        this.onresult(mockSpeechRecognition.mockResult);
        this.onend();
      }, 500);
    };

    this.stop = () => {
      mockSpeechRecognition.stop();
      this.onend();
    };
  }
}

// The mocked instance function is exposed on the class
// so we can spy on it from the tests
mockSpeechRecognition.mockResult = { results: [[{ transcript: 'I hear you' }]] };
mockSpeechRecognition.start = jest.fn();
mockSpeechRecognition.stop = jest.fn();

export default mockSpeechRecognition;
