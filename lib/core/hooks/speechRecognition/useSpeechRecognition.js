// @flow

import { useState, useEffect } from 'react';
import { SpeechRecognition } from './types';

const useSpeechRecognition = ({ handleSpeechEnd, onResult }) => {
  const [isListening, setIsListening] = useState(false);

  const BrowserSpeechRecognition: any =
    typeof window !== 'undefined' && (window.SpeechRecognition || window.webkitSpeechRecognition);

  let speechRecognition: SpeechRecognition =
    BrowserSpeechRecognition && new BrowserSpeechRecognition();

  const processResult = event => {
    const result = event && event.results && event.results[0] && event.results[0][0];
    onResult(result.transcript);
  };

  const onStop = () => {
    speechRecognition.onresult = () => {};
    speechRecognition.onend = () => {};
    speechRecognition.stop();
    handleSpeechEnd();
    setIsListening(false);
  };

  const onListen = () => {
    setIsListening(true);
    speechRecognition.start();
    speechRecognition.onresult = processResult;
    speechRecognition.onend = () => onStop();
  };

  useEffect(() => {
    if (!speechRecognition) return;
    speechRecognition = BrowserSpeechRecognition && new BrowserSpeechRecognition();
  }, []);

  return { isListening, onListen, onStop, speechRecognition };
};

export { useSpeechRecognition };
export default useSpeechRecognition;
