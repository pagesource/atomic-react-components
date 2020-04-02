// @flow
import type { Node } from 'react';

export type Props = {
  children: Node,
  className?: string,
  inputProps: { className?: string, value?: string },
  onSpeechEnd: Function,
  onSpeechStart: Function,
  dataLists: [],
  getSelectedResultValue: Function,
  renderListItem: Function,
};
