// @flow
/**
 *
 * List
 *
 */
import React from 'react';
import styled from 'styled-components';
import type { Node } from 'react';

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

const List = ({
  className,
  ListType = 'ul',
  children,
  inheritedStyles,
  borderSeparator,
  noDefaultView,
  inline,
  nested,
  noMargin,
  ...others
}: Props): Node => (
  <ListType className={className} {...others}>
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

export default styled(List)`
  ${styles};
`;

export { List as ListVanilla };
