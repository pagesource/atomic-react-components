// @flow

type image = {
  src: string,
  srcset: string,
  sizes: string,
  placeholderSrc: string,
  alt: string,
};

export type Props = {
  variation?: string,
  image: image,
  title: string,
  url?: string,
  description?: string,
  readMoreText?: string,
  target?: string,
};
