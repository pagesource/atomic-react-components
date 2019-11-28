// @flow
/**
 *
 * StickyBar
 *
 */
import React from 'react';
import styled from 'styled-components';

import styles from './StickyBar.style';
import List from '../List';

type StickyBarProps = {
  className?: string,
  children: Node,
};

const StickyBar = ({ className, children }: StickyBarProps): Node => {
  let typeCheck = '';
  children.forEach(child => {
    if (child.type !== 'li') {
      typeCheck = "Warning StickyBar has children that aren't li tag";
    }
  });
  return (
    <List className={className} ListType="ol" inline noMargin noDefaultView>
      {children}
      <h3>{typeCheck}</h3>
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
