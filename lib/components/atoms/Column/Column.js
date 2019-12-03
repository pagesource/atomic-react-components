// @flow
/**
 *
 * Column
 *
 */
import React from 'react';
import styled from 'styled-components';

import styles from './Column.style';
import type { Props } from './types';

const Column = ({ intent, label, value }) =>
  intent === 'header' ? <span>{label}</span> : <span>{value}</span>;

Column.defaultProps = {};

export default styled(Column)`
  ${styles};
`;

export { Column as ColumnVanilla };
