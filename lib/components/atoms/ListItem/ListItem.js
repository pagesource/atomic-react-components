// @flow
/**
 *
 * ListItem
 *
 */
import React from 'react';
import styled from 'styled-components';

import styles from './ListItem.style';
import type { Props } from './types';

const ListItem = ({ className, children }: Props): Node => {
  const classes = ['item', className].join(' ');

  return <li className={classes}>{children}</li>;
};

ListItem.defaultProps = {
  className: '',
};

export default styled(ListItem)`
  ${styles};
`;

export { ListItem as ListItemVanilla };
