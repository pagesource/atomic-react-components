// @flow
/**
 *
 * Skeleton
 *
 */
import React from 'react';
import styled from 'styled-components';
import classnames from 'classnames';
import type { Node, ComponentType } from 'react';
import styles from './Skeleton.style';
import type { Props, BarProps, CircleProps } from './types';

const Circle = ({ className, width, marginBottom }: CircleProps): Node => (
  <div className={classnames('circle', className)} style={{ width, marginBottom, height: width }} />
);

const Bar = ({ className, height, width, marginBottom }: BarProps): Node => (
  <div className={classnames('bar', className)} style={{ height, width, marginBottom }} />
);

const Skeleton = ({ children, className }: Props): Node => (
  <div className={classnames('skeleton', className)}>{children}</div>
);

Skeleton.circle = Circle;
Skeleton.bar = Bar;

Skeleton.defaultProps = {};

Bar.defaultProps = {
  height: '18px',
  width: '100%',
  marginBottom: '0',
};

Circle.defaultProps = {
  width: '100px',
  marginBottom: '20px',
};

const StyledSkeleton: ComponentType<Props> = styled(Skeleton)`
  ${styles};
`;

export default StyledSkeleton;

export { Skeleton as SkeletonVanilla };
