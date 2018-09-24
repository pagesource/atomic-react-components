// @flow
import type { Node, React } from 'react';
import styled from 'styled-components';

import styles from './Para.style';

type Props = {
  children: Node,
  className: string,
  inheritedStyles?: string,
};

const Para = ({
  children, className, inheritedStyles, ...others
}: Props): Node => (
  <p className={className} {...others}>
    {children}
  </p>
);

Para.defaultProps = {
  inheritedStyles: '',
};

export default styled(Para)`${styles}`;
export { Para as ParaVanilla };
