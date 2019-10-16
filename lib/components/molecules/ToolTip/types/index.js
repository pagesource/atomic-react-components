// @flow
import type { Node } from 'react';

export type Props = {
  tootTipContent?: string,
  domElement?: Node,
  title?: string,
  image?: Node,
  styles?: Object,
  children?: string,
};

export type State = {
  isOpen?: boolean,
  styles?: Object,
};
