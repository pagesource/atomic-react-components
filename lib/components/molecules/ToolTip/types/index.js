// @flow
import type { Node, Element } from 'react';

export type Props = {
  tootTipContent?: string,
  domElement?: Node,
  title?: string,
  image?: Node,
  styles?: Object,
  children?: Element<'div'>,
};

export type State = {
  isOpen?: boolean,
  styles?: Object,
};
