// @flow

import { useState, useEffect } from 'react';
import { SpeechRecognition } from './types';

const useSpeechRecognition = ({ handleSpeechEnd, onSpeachRecognitionResults }) => {
  const [isListening, setIsListening] = useState(false);

  const BrowserSpeechRecognition: any =
    typeof window !== 'undefined' && (window.SpeechRecognition || window.webkitSpeechRecognition);

  let speechRecognition: SpeechRecognition =
    BrowserSpeechRecognition && new BrowserSpeechRecognition();

  const processResult = event => {
    const result = event && event.results && event.results[0] && event.results[0][0];
    onSpeachRecognitionResults(result.transcript);
  };

  const onStop = () => {
    speechRecognition.onresult = () => {};
    speechRecognition.onend = () => {};
    speechRecognition.stop();
    handleSpeechEnd();
    setIsListening(false);
  };

  const onSpeechListenHandler = () => {
    setIsListening(true);
    speechRecognition.start();
    speechRecognition.onresult = processResult;
    speechRecognition.onend = () => onStop();
  };

  useEffect(() => {
    if (!speechRecognition) return;
    speechRecognition = BrowserSpeechRecognition && new BrowserSpeechRecognition();
  }, []);

  return { isListening, onSpeechListenHandler, onStop, speechRecognition };
};

export { useSpeechRecognition };
export default useSpeechRecognition;
