/* eslint-disable flowtype/no-types-missing-file-annotation */
import type { AnchorProps } from '../../../atoms/Anchor';
import type { ButtonProps } from '../../../atoms/Button';
import type { ImageProps } from '../../../atoms/Image';

export type Props = {
  trigger: ButtonProps | AnchorProps,
  className?: string,
  textContent: string,
  image?: ImageProps,
  maxWidth?: number,
  maxHeight?: number,
};

export type State = {
  isOpen: boolean,
  leftPos: number,
  topPos: number,
};
