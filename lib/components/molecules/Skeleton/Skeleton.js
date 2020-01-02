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
import type { Props, ShapesProps } from './types';

const Shapes = ({ className, radius, height, width, gutter, shapeType }: ShapesProps): Node => (
  <>
    {shapeType === 'circle' ? (
      <div className={classnames('skeletalCircle', className)} />
    ) : (
      <div className={classnames('skeletalLine', className)} />
    )}
  </>
);

const Skeleton = ({ children, className }: Props): Node => (
  <div className={classnames('skeleton', className)}>{children}</div>
);

Skeleton.shapes = Shapes;

Skeleton.defaultProps = {};

export default styled(Skeleton)`
  ${styles};
`;

export { Skeleton as SkeletonVanilla };
