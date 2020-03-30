// @flow
/**
 *
 * StickyBar
 *
 */
import React from 'react';
import type { Node, ComponentType } from 'react';
import styled from 'styled-components';

import styles from './StickyBar.style';
import type { StickyBarProps, ItemProps } from './types';
import List from '../List';

const Item = ({ children }: ItemProps) => <li>{children}</li>;

const StickyBar = ({ className, children }: StickyBarProps): Node => {
  return (
    <nav aria-labelledby="StickyToolBar">
      <List className={className} id="StickyToolBar" noMargin noDefaultView>
        {children}
      </List>
    </nav>
  );
};

StickyBar.Item = Item;

StickyBar.defaultProps = {
  className: 'sticky-bar',
};

const StyledStickyBar: ComponentType<StickyBarProps> = styled(StickyBar)`
  ${styles};
`;

export default StyledStickyBar;

export { StickyBar as StickyBarVanilla };
