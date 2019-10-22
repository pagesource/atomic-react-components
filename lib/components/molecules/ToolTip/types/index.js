/* eslint-disable flowtype/no-types-missing-file-annotation */
import type { Node } from 'react';
import type { AnchorProps } from '../../../atoms/Anchor';
import type { ButtonProps } from '../../../atoms/Button';

export type Props = {
  tootTipContent: Node | string,
  trigger: ButtonProps | AnchorProps,
  close?: ButtonProps,
  className?: string,
};

export type State = {
  isOpen: boolean,
  leftPos: number,
  topPos: number,
};
