// @flow
/**
 *
 * Slide
 *
 */
import React from 'react';
import type { Node } from 'react';
import styled from 'styled-components';
import classnames from 'classnames';

import styles from './Slide.style';

type Props = {
  children: Node,
  className?: string,
  isActive?: boolean,
  onThumbnailClick: Function,
};

const Slide = ({ children, className, isActive, onThumbnailClick }: Props): Node => (
  <div
    aria-hidden={!isActive}
    role="button"
    className={classnames(className, {
      'active-slide': isActive,
    })}
    tabIndex="-1"
    onClick={() => onThumbnailClick()}
    onKeyPress={() => undefined}
  >
    {children}
  </div>
);

Slide.defaultProps = {
  className: '',
  isActive: false,
};

export default styled(Slide)`
  ${styles};
`;

export { Slide as SlideVanilla };
