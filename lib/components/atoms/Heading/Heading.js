// @flow
import React from 'react';
import type { Node, ComponentType } from 'react';
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
    {...others}
    className={className}
    data-locator={elementLocator || `heading-${HeadingType}-${getLabelFromChildren(children)}`}
  >
    {children}
  </HeadingType>
);

Heading.defaultProps = {
  inheritedStyles: '',
  HeadingType: 'h1',
  elementLocator: '',
};

const StyledHeading: ComponentType<Props> = styled(Heading)`
  ${styles};
`;
export default StyledHeading;
export { Heading as HeadingVanilla };
