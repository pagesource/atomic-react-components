// @flow
import type { Node } from 'react';

export type CarouselProps = {
  children: Node,
  slideTransitionTime?: Number,
  slideAnimationTime?: Number,
  autoplay?: Boolean,
  controls?: Boolean,
  dots: Boolean,
  dotsStyle: Object,
  renderSlideThumb?: Object,
};

export type SlideWrapperProps = {
  children: Node,
  className?: String,
};

export type SlideProps = {
  children: Node,
  className?: String,
};

export type AnimationProps = {
  children?: Node,
  className?: String,
  renderPlay?: Function,
  renderPause?: Function,
};

export type NavControllerProps = {
  navType: String,
  prevLabel: Node,
  nextLabel: Node,
  children?: Node,
};
