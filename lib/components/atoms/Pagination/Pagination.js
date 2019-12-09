// @flow
/**
 *
 * Pagination
 *
 */
import React from 'react';
import styled from 'styled-components';

import styles from './Pagination.style';
import type { Props } from './types';

const Pagination = ({
  postsPerPage,
  totalPosts,
  paginate,
  className,
  firstLabel,
  lastLabel,
  firstPost,
  lastPost,
  nextLabel,
  previousLabel,
  setPage,
  currentPage,
}: Props): Node => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
    pageNumbers.push(i);
  }
  return (
    <nav className={className}>
      <ul className="pagination">
        <li className={firstPost === 1 ? 'disabled first' : 'first'}>
          <a onClick={() => setPage(1)}>{firstLabel}</a>
        </li>
        <li className={currentPage === 1 ? 'disabled previous' : 'previous'}>
          <a onClick={() => setPage(currentPage - 1)}>{previousLabel}</a>
        </li>
        {pageNumbers.map(number => (
          <li key={number} className="page-item">
            <a onClick={() => paginate(number)} href="!#" className="page-link">
              {number}
            </a>
          </li>
        ))}
        <li className={currentPage === totalPosts ? 'disabled next' : 'next'}>
          <a onClick={() => setPage(currentPage + 1)}>{nextLabel}</a>
        </li>
        <li className={lastPost === 1 ? 'disabled last' : 'last'}>
          <a onClick={() => setPage(1)}>{lastLabel}</a>
        </li>
      </ul>
    </nav>
  );
};

Pagination.defaultProps = {
  className: '',
  firstLabel: 'First',
  lastLabel: 'Last',
  nextLabel: 'Next',
  previousLabel: 'Previous',
};

export default styled(Pagination)`
  ${styles};
`;

export { Pagination as PaginationVanilla };
