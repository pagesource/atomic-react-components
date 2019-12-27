// @flow
/**
 *
 * Pagination
 *
 */
import React from 'react';
import styled from 'styled-components';

import styles from './Pagination.style';
import type { Props } from './types';

const Pagination = ({ children }: Props): Node => <div className={styles.default}>{children}</div>;

Pagination.defaultProps = {};

export default styled(Pagination)`
  ${styles};
`;

export { Pagination as PaginationVanilla };
