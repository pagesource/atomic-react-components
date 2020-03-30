// @flow
import type { Node, ChildrenArray } from 'react';

export type CarousalContextType = {
  [key: string]: any,
};

export type CarouselProps = {
  children: Node,
  slideTransitionTime?: Number,
  slideAnimationTime?: Number,
  autoplay?: Boolean,
  controls?: Boolean,
  dots: Boolean,
  dotsStyle: Object,
  renderSlideThumb?: Object,
  className: String,
  navBtnStyle: Object,
  legacy: Object,
  centerMode: Boolean,
  itemsPerSlide: Number,
  responsive: Array<any>,
};

export type SlideWrapperProps = {
  children: ChildrenArray<any>,
  className?: String,
};

export type SlideProps = {
  id: String,
  children: Node,
  className?: String,
};

export type AnimationProps = {
  children?: Node,
  className?: String,
  renderPlay: Function,
  renderPause: Function,
};

export type NavControllerProps = {
  navType: 'next' | 'prev',
  prevLabel: Node,
  nextLabel: Node,
  children?: Node,
};
