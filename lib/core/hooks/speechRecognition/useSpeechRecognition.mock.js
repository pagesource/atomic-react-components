/* eslint no-undef: "error" */

class mockSpeechRecognition {
  constructor() {
    this.onresult = () => {};
    this.onend = () => {};
    this.start = () => {
      mockSpeechRecognition.start();
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

mockSpeechRecognition.mockResult = { results: [[{ transcript: 'Hello XT' }]] };
mockSpeechRecognition.start = jest.fn();
mockSpeechRecognition.stop = jest.fn();

export default mockSpeechRecognition;
