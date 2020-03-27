// @flow
import React from 'react';
import type { Node, ComponentType } from 'react';
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
    <p {...others} className={className} {...dataLocator}>
      {children}
    </p>
  );
};

Para.defaultProps = {
  inheritedStyles: '',
  className: '',
  elementLocator: '',
};

const StyledPara: ComponentType<Props> = styled(Para)`
  ${styles};
`;

export default StyledPara;

export { Para as ParaVanilla };
