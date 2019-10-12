// @flow
import React from 'react';
import type { Node } from 'react';
import styled from 'styled-components';

import styles from './Para.style';

type Props = {
  children: Node,
  className?: string | void,
  inheritedStyles?: string,
  elementLocator?: string,
};

const Para = ({ children, className, inheritedStyles, elementLocator, ...others }: Props): Node => {
  const dataLocator = elementLocator
    ? {
        'data-locator': `para-${elementLocator}`,
      }
    : {};

  return (
    <p className={className} {...dataLocator} {...others}>
      {children}
    </p>
  );
};

Para.defaultProps = {
  inheritedStyles: '',
  className: '',
  elementLocator: '',
};

export default styled(Para)`
  ${styles};
`;
export { Para as ParaVanilla };
