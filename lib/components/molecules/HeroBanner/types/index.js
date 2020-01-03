// @flow
import type { Node } from 'react';

export type Props = {
  children: Node,
  className?: String,
  heroImageWidth?: String,
  childrenContainerWidth?: String,
  inheritedStyles?: string,
  renderHeroImage?: Function,
  renderExternalContent?: Function,
};
