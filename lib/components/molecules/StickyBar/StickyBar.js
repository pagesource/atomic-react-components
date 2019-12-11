// @flow
/**
 *
 * StickyBar
 *
 */
import React from 'react';
import styled from 'styled-components';

import styles from './StickyBar.style';
import type { StickyBarProps, ItemProps } from './types';
import List from '../List';

const Item = ({ children }: ItemProps) => <li>{children}</li>;

const StickyBar = ({ className, children }: StickyBarProps): Node => {
  return (
    <nav>
      <List className={className} noMargin noDefaultView>
        {children}
      </List>
    </nav>
  );
};

StickyBar.Item = Item;

StickyBar.defaultProps = {
  className: 'sticky-bar',
};

export default styled(StickyBar)`
  ${styles};
`;

export { StickyBar as StickyBarVanilla };
