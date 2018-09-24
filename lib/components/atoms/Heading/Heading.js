// @flow
import React from 'react';
import type { Node } from 'react';
import styled from 'styled-components';

import styles from './Heading.style';

type Props = {
  children: Node,
  className: string,
  HeadingType?: string,
  inheritedStyles?: string,
};

const Heading = ({
  children, className, HeadingType, inheritedStyles, ...others
}: Props): Node => (
  <HeadingType className={className} {...others}>
    {children}
  </HeadingType>
);

Heading.defaultProps = {
  inheritedStyles: '',
  HeadingType: 'h1',
};

export default styled(Heading)`${styles}`;
export { Heading as HeadingVanilla };
