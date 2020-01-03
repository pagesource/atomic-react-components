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

const Circle = ({ className, circleRadius, circleWidth, circleGutter }: CircleProps): Node => (
  <>
    <div
      className={classnames('skeletalCircle', className)}
      skeletalCircleWidth={circleWidth}
      skeletalCircleRadius={circleRadius}
      skeletalCircleGutter={circleGutter}
    />
  </>
);

const Line = ({ className, lineHeight, lineWidth, lineGutter }: LineProps): Node => (
  <>
    <div
      className={classnames('skeletalLine', className)}
      skeletalLineHeight={lineHeight}
      skeletalLineWidth={lineWidth}
      skeletalLineGutter={lineGutter}
    />
  </>
);

const Skeleton = ({ children, className }: Props): Node => (
  <div className={classnames('skeleton', className)}>{children}</div>
);

Skeleton.circle = Circle;
Skeleton.line = Line;

Skeleton.defaultProps = {};

Line.defaultProps = {
  lineHeight: '20px',
  lineWidth: '100%',
  lineGutter: '5px',
};

Circle.defaultProps = {
  circleRadius: '30px',
  circleWidth: '100px',
  circleGutter: '5px',
};

export default styled(Skeleton)`
  ${styles};
`;

export { Skeleton as SkeletonVanilla };
