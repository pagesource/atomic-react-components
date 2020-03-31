// @flow
/**
 *
 * List
 *
 */
import React from 'react';
import styled from 'styled-components';
import type { Node, ComponentType } from 'react';

import styles from './List.style';

type listType = 'ul' | 'ol';
type Props = {
  ListType?: listType,
  className?: string,
  children: Node,
  nested?: boolean,
  inline?: boolean,
  noDefaultView?: boolean,
  borderSeparator?: boolean,
  noMargin?: boolean,
  inheritedStyles?: string,
};

const List = ({ className, ListType = 'ul', children, ...others }: Props): Node => (
  <ListType {...others} className={className}>
    {children}
  </ListType>
);

List.defaultProps = {
  inheritedStyles: '',
  ListType: 'ul',
  className: '',
  borderSeparator: false,
  noDefaultView: false,
  inline: false,
  nested: false,
  noMargin: false,
};

const StyledList: ComponentType<Props> = styled(List)`
  ${styles};
`;

export default StyledList;

export { List as ListVanilla };
