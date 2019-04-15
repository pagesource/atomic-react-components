// @flow

export type Props = {
  children: React.Node,
  className?: string,
  defaultSlideIndex?: number,
  showDots?: boolean,
  showThumbnails?: boolean,
  showArrows?: boolean,
  onChange: Function,
};

export type State = {
  current: number,
};
