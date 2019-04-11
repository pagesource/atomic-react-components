// @flow
import React from 'react';
import type { Node } from 'react';
import styled from 'styled-components';

import styles from './Para.style';

type Props = {
  children: Node,
  className?: string | void,
  inheritedStyles?: string,
};

const Para = ({ children, className, inheritedStyles, ...others }: Props): Node => (
  <p className={className} {...others}>
    {children}
  </p>
);

Para.defaultProps = {
  inheritedStyles: '',
  className: '',
};

export default styled(Para)`
  ${styles};
`;
export { Para as ParaVanilla };
