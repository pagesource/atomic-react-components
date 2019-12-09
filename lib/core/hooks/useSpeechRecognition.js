// @flow

import { useState, useEffect } from 'react';

type SpeechRecognition = {
  onresult: Function,
  onend: Function,
  abort: Function,
  stop: Function,
  start: Function,
};

const useSpeechRecognition = ({ handleSpeechEnd, onResult }) => {
  // const { handleSpeechEnd = () => {}, onResult = () => {} } = props;

  const [isListening, setIsListening] = useState(false);

  const BrowserSpeechRecognition: any =
    typeof window !== 'undefined' && (window.SpeechRecognition || window.webkitSpeechRecognition);

  let speechRecognition: SpeechRecognition =
    BrowserSpeechRecognition && new BrowserSpeechRecognition();

  const processResult = event => {
    console.log("processResult----");
    const result = event && event.results && event.results[0] && event.results[0][0];

    onResult(result.transcript);
  };

  const onStop = () => {
    console.log("onStop----",isListening)
    // if (!isListening) return;
    speechRecognition.onresult = () => {};
    speechRecognition.onend = () => {};
    speechRecognition.stop();
    handleSpeechEnd();
    setIsListening(true);
    console.log("onStop----",isListening)
  };

  const onListen = () => {
    // if (isListening) return;
    setIsListening(false);
    speechRecognition.start();
    console.log("onListen----", speechRecognition)

    speechRecognition.onresult = processResult;
    speechRecognition.onend = () => onStop();
    // speechRecognition.start();
  };

  useEffect(() => {
    if (!speechRecognition) return;
    speechRecognition = BrowserSpeechRecognition && new BrowserSpeechRecognition();
  }, []);

  return { isListening, onListen, onStop, speechRecognition };
};

export default useSpeechRecognition;
