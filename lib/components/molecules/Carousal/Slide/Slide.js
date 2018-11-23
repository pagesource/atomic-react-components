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
};

const Slide = ({ children, className, isActive }: Props): Node => (
  <li
    aria-hidden={!isActive}
    className={classnames(className, {
      'active-slide': isActive,
    })}
    tabIndex="-1"
  >
    {children}
  </li>
);

Slide.defaultProps = {
  className: '',
  isActive: false,
};

export default styled(Slide)`
  ${styles};
`;

export { Slide as SlideVanilla };
