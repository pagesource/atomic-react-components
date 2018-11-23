// @flow

export type Props = {
  children: React.Node,
  className?: string,
  defaultSlideIndex?: number,
  showDots?: boolean,
  showArrows?: boolean,
  onChange?: Function,
};

export type State = {
  current: number,
};
