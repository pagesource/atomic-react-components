/* eslint-disable flowtype/no-types-missing-file-annotation */
import type { ImageProps } from '../../../atoms/Image';
import type { AnchorProps } from '../../../atoms/Anchor';

export type Props = {
  image: ImageProps,
  readMoreContent?: string | Node | void,
  children?: string | Node | void,
  anchorProps: AnchorProps,
};
