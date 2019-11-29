// @flow
/**
 *
 * ListItem
 *
 */
import React from 'react';
import styled from 'styled-components';
import classnames from 'classnames';

import styles from './ListItem.style';
import type { Props } from './types';

const ListItem = ({ className, children }: Props): Node => {
  return <li className={classnames('item', className)}>{children}</li>;
};

ListItem.defaultProps = {
  className: '',
};

export default styled(ListItem)`
  ${styles};
`;

export { ListItem as ListItemVanilla };
