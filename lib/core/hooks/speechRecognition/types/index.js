// @flow
import type from 'react';

export type SpeechRecognition = {
  onresult: func,
  onend: func,
  abort: func,
  stop: func,
  start: func,
};
