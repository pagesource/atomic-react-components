// @flow
import React from 'react';
import type { Node } from 'react';
import styled from 'styled-components';

import { getLabelFromChildren } from '../../../core/utils/elementLocator';
import styles from './Heading.style';

type Props = {
  children: Node,
  className: string,
  HeadingType?: string,
  inheritedStyles?: string,
  elementLocator?: string,
};

const Heading = ({
  children,
  className,
  HeadingType = 'h1',
  inheritedStyles,
  elementLocator,
  ...others
}: Props): Node => (
  <HeadingType
    className={className}
    data-locator={elementLocator || `heading-${HeadingType}-${getLabelFromChildren(children)}`}
    {...others}
  >
    {children}
  </HeadingType>
);

Heading.defaultProps = {
  inheritedStyles: '',
  HeadingType: 'h1',
  elementLocator: '',
};

export default styled(Heading)`
  ${styles};
`;
export { Heading as HeadingVanilla };
