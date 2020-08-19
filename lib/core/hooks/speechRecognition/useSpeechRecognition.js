import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

const useSpeechRecognition = ({ handleSpeechEnd, onSpeechRecognitionResults }) => {
  const [isListening, setIsListening] = useState(false);

  window.SpeechRecognition =
    typeof window !== 'undefined' &&
    (window.SpeechRecognition ||
      window.webkitSpeechRecognition ||
      window.mozSpeechRecognition ||
      window.msSpeechRecognition ||
      window.oSpeechRecognition);

  const browserSupported = !!window.SpeechRecognition;

  let speechRecognition = window.SpeechRecognition && new window.SpeechRecognition();

  const processResult = (event) => {
    const result = event && event.results && event.results[0] && event.results[0][0];
    onSpeechRecognitionResults(result.transcript);
  };

  const onStop = () => {
    speechRecognition.onresult = () => {};
    speechRecognition.onend = () => {};
    speechRecognition.stop();
    handleSpeechEnd();
    setIsListening(false);
  };

  const onSpeechListenHandler = () => {
    if (isListening) return;
    setIsListening(true);
    speechRecognition.start();
    speechRecognition.onresult = processResult;
    speechRecognition.onend = () => onStop();
  };

  useEffect(() => {
    if (!speechRecognition) return;
    speechRecognition = window.SpeechRecognition && new window.SpeechRecognition();
  }, []);

  return { isListening, onSpeechListenHandler, onStop, browserSupported };
};

useSpeechRecognition.propTypes = {
  onresult: PropTypes.func,
  onend: PropTypes.func,
  abort: PropTypes.func,
  stop: PropTypes.func,
  start: PropTypes.func,
  handleSpeechEnd: PropTypes.func,
  onSpeechRecognitionResults: PropTypes.func,
};

useSpeechRecognition.defaultProps = {
  onresult: () => {},
  onend: () => {},
  abort: () => {},
  stop: () => {},
  start: () => {},
  handleSpeechEnd: () => {},
  onSpeechRecognitionResults: () => {},
};

export { useSpeechRecognition };
export default useSpeechRecognition;
