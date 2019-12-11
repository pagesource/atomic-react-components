// @flow
/**
 *
 * Icon
 *
 */
import React from 'react';
import styled from 'styled-components';

import styles from './Icon.style';
import type { Props } from './types';

const Icon = ({ id }: Props): Node => (
  <svg className="icon">
    <use xlinkHref={id} />
  </svg>
);

Icon.defaultProps = {};

export default styled(Icon)`
  ${styles};
`;

export { Icon as IconVanilla };
