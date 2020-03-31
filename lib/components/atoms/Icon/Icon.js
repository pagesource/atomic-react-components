// @flow
/**
 *
 * Icon
 *
 */
import React from 'react';
import styled from 'styled-components';
import classnames from 'classnames';

import styles from './Icon.style';

type Props = {
  className?: String,
  children: Node,
  fill?: String,
  width?: String,
  height?: String,
  title: String,
};

const Icon = ({ className, width, height, title, children, fill, ...others }: Props): Node => {
  const childrenNode = React.Children.map(children, child => {
    return React.cloneElement(child, {
      width: width || '25px',
      fill: fill || '#000',
      height: height || '25px',
      display: 'inline-flex',
    });
  });
  return (
    <span role="presentation" className={classnames('icon-wrapper', className)} {...others}>
      {childrenNode}
    </span>
  );
};

Icon.defaultProps = {
  width: '25px',
  height: '25px',
  fill: '#000',
  className: '',
};

export default styled(Icon)`
  ${styles};
`;

export { Icon as IconVanilla };

export type { Props as IconProps };
