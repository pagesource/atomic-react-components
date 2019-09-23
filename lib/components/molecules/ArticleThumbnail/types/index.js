// @flow

type anchor = {
  to: string | any,
  as?: string,
  children: Node,
  className?: string,
  inheritedStyles?: string,
  handleLinkClick?: (SyntheticEvent<>) => void,
  shallow?: boolean,
  scroll?: boolean,
  target?: '' | '_self' | '_blank' | '_parent' | '_top',
  forceClick?: boolean,
};

type image = {
  anchorPorps?: anchor,
  className: string,
  src: string,
  srcset?: string,
  sizes?: string,
  placeholderSrc?: string,
  alt: string,
  inheritedStyles?: string,
  ref: () => void,
};

export type Props = {
  image: image,
  readMoreContent?: string | Node | void,
  children?: string | Node | void,
  anchorProps: anchor,
};
