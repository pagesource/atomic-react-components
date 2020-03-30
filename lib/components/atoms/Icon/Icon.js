// @flow
/**
 *
 * Icon
 *
 */
import React from 'react';
import type { Node, ComponentType } from 'react';
import styled from 'styled-components';
import classnames from 'classnames';

import styles from './Icon.style';
import type { Props } from './types';

const Icon = ({ className, title, ...others }: Props): Node => {
  return (
    <span {...others} role="presentation" className={classnames('icon-wrapper', className)}>
      <i className="icon" aria-label={title} />
    </span>
  );
};

const StyledIcon: ComponentType<Props> = styled(Icon)`
  ${styles};
`;
export default StyledIcon;

export { Icon as IconVanilla };
