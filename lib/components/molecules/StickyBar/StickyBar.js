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

export const checkElm = children => {
  React.Children.map(children, child => {
    if (child.type !== 'li') {
      throw new Error("Error:: StickyBar have children that isn't li tag");
    }
  });
};

const StickyBar = ({ className, children }: Props): Node => {
  checkElm(children);
  return (
    <List className={className} ListType="ol" noMargin noDefaultView>
      {children}
    </List>
  );
};

StickyBar.defaultProps = {
  className: '',
};

export default styled(StickyBar)`
  ${styles};
`;

export { StickyBar as StickyBarVanilla };
