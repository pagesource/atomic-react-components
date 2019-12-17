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
import type { Props } from './types';

const Icon = ({ className, title, ...others }: Props): Node => {
  return (
    <span role="presentation" className={classnames('icon-wrapper', className)} {...others}>
      <i className="icon" aria-label={title} />
    </span>
  );
};

export default styled(Icon)`
  ${styles};
`;

export { Icon as IconVanilla };
