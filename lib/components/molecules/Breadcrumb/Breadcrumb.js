// @flow
/**
 *
 * Breadcrumb
 *
 */
import React from 'react';
import styled from 'styled-components';

import styles from './Breadcrumb.style';
import type { Props, Nav } from './types';
import List from '../List';
import Anchor from '../../atoms/Anchor';

const Breadcrumb = ({ className, linkList }: Props): Nav => (
  <nav aria-label="Breadcrumb" className={className}>
    <List ListType="ol" inline borderSeparator noDefaultView>
      {linkList &&
        linkList.map((item, index) => (
          <li key={`breadcrumb-item-${index.toString()}`}>
            {linkList.length - 1 === index ? (
              <Anchor {...item} aria-current="page" />
            ) : (
              <Anchor {...item} />
            )}
          </li>
        ))}
    </List>
  </nav>
);

export default styled(Breadcrumb)`
  ${styles};
`;

export { Breadcrumb as BreadcrumbVanilla };
