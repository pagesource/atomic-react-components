// @flow
import type { Node } from 'react';

export type Props = {
  children: Node,
  className?: string,
  inputProps?: InputProps,
  onSpeechEnd: func,
  onSpeechStart: func,
};
