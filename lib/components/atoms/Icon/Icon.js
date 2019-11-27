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

const Icon = ({ path, alt }: Props): Node => (
  <img src={path} alt={alt} className={classnames('icon-image', styles.default)} />
);

Icon.defaultProps = {};

export default styled(Icon)`
  ${styles};
`;

export { Icon as IconVanilla };
