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

type title = {
  anchorPorps?: anchor,
  children: Node,
  className: string,
  HeadingType?: string,
  inheritedStyles?: string,
};

type description = {
  children: Node,
  className?: string | void,
  inheritedStyles?: string,
};

export type Props = {
  image: image,
  title: title,
  url?: string,
  description?: description,
  readMore?: anchor,
  target?: string,
};
