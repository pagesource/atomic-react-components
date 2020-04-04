// @flow
/**
 *
 * Icon
 *
 */
import React from 'react';
import type { ComponentType } from 'react';
import styled from 'styled-components';
import classnames from 'classnames';

import styles from './Icon.style';
import type { Props } from './types';

const Icon = ({ className, width, title, height, children, fill }: Props) => {
  const childrenNode = React.Children.map(children, (child) => {
    return React.cloneElement(child, {
      width: width || '25px',
      fill: fill || '#000',
      height: height || '25px',
      display: 'inline-flex',
    });
  });
  return (
    <span role="presentation" aria-label={title} className={classnames('icon-wrapper', className)}>
      {childrenNode}
    </span>
  );
};

const StyledIcon: ComponentType<Props> = styled(Icon)`
  ${styles};
`;
export default StyledIcon;

export { Icon as IconVanilla };
