// @flow
/**
 *
 * Skeleton
 *
 */
import React from 'react';
import styled from 'styled-components';
import classnames from 'classnames';
import type { Node } from 'react';
import styles from './Skeleton.style';
import type { Props, LineProps, CircleProps } from './types';

const Circle = ({ className, width, margin }: CircleProps): Node => (
  <>
    <div
      className={classnames('skeletalCircle', className)}
      style={{ width, margin, height: width }}
    />
  </>
);

const Line = ({ className, height, width, margin }: LineProps): Node => (
  <>
    <div className={classnames('skeletalLine', className)} style={{ height, width, margin }} />
  </>
);

const Skeleton = ({ children, className }: Props): Node => (
  <div className={classnames('skeleton', className)}>{children}</div>
);

Skeleton.circle = Circle;
Skeleton.line = Line;

Skeleton.defaultProps = {};

Line.defaultProps = {
  height: '18px',
  width: '100%',
  margin: '0',
};

Circle.defaultProps = {
  width: '100px',
  margin: '20px',
};

export default styled(Skeleton)`
  ${styles};
`;

export { Skeleton as SkeletonVanilla };
