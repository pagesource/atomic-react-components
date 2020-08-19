/**
 *
 * Skeleton
 *
 */
import React from 'react';
import styled from 'styled-components';
import classnames from 'classnames';
import PropTypes from 'prop-types';
import styles from './Skeleton.style';

const Circle = ({ className, width, marginBottom }) => (
  <div className={classnames('circle', className)} style={{ width, marginBottom, height: width }} />
);

const Bar = ({ className, height, width, marginBottom }) => (
  <div className={classnames('bar', className)} style={{ height, width, marginBottom }} />
);

const Skeleton = ({ children, className }) => (
  <div className={classnames('skeleton', className)}>{children}</div>
);

Skeleton.Circle = Circle;
Skeleton.Bar = Bar;

Skeleton.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
};

Circle.propTypes = {
  className: PropTypes.string,
  marginBottom: PropTypes.string,
  width: PropTypes.string,
};

Bar.propTypes = {
  className: PropTypes.string,
  marginBottom: PropTypes.string,
  width: PropTypes.string,
  height: PropTypes.string,
};

Skeleton.defaultProps = {
  className: '',
};

Bar.defaultProps = {
  className: '',
  height: '18px',
  width: '100%',
  marginBottom: '0',
};

Circle.defaultProps = {
  className: '',
  width: '100px',
  marginBottom: '20px',
};

const StyledSkeleton = styled(Skeleton)`
  ${styles};
`;

export default StyledSkeleton;

export { Skeleton as SkeletonVanilla };
