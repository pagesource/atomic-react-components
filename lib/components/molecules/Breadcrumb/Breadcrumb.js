/**
 *
 * Breadcrumb
 *
 */
import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import styles from './Breadcrumb.style';
import List from '../List';
import Anchor from '../../atoms/Anchor';

const Breadcrumb = ({ className, linkList }) => (
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

Breadcrumb.propTypes = {
  linkList: PropTypes.arrayOf(PropTypes.object).isRequired,
  className: PropTypes.string.isRequired,
};

const StyledBreadcrumb = styled(Breadcrumb)`
  ${styles};
`;

export default StyledBreadcrumb;

export { Breadcrumb as BreadcrumbVanilla };
