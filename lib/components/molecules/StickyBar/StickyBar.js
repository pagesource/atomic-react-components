// @flow
/**
 *
 * StickyBar
 *
 */
import React from 'react';
import styled from 'styled-components';

import styles from './StickyBar.style';
import type { Props } from './types';
import List from '../List';

const StickyBar = ({ children }: Props): Node => {
  return (
    <List className={styles.default} ListType="ol" inline noMargin noDefaultView>
      123
      {children}
    </List>
  );
};

StickyBar.defaultProps = {};

export default styled(StickyBar)`
  ${styles};
`;

export { StickyBar as StickyBarVanilla };
