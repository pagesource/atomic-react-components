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
import Button from '../Button';

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
  let i = 0;

  do {
    i += 1;
    pageNumbers.push(i);
  } while (i <= Math.ceil(totalPosts / postsPerPage));

  const disabledFirstNdPrevious = firstPost === 1 ? true : false;
  const disabledLast = lastPost === 1 ? true : false;
  const disabledNext = currentPage === totalPosts ? true : false;

  return (
    <nav className={className}>
      <ul className="pagination">
        <li className="first">
          <Button disabled={disabledFirstNdPrevious} onClick={() => setPage(1)}>
            {firstLabel}
          </Button>
        </li>
        <li className="previous">
          <Button disabled={disabledFirstNdPrevious} onClick={() => setPage(currentPage - 1)}>
            {previousLabel}
          </Button>
        </li>
        {pageNumbers.map(number => (
          <li key={number} className="page-item">
            <Button onClick={() => paginate(number)} className="page-link">
              {number}
            </Button>
          </li>
        ))}
        <li className="next">
          <Button disabled={disabledNext} onClick={() => setPage(currentPage + 1)}>
            {nextLabel}
          </Button>
        </li>
        <li className="last">
          <Button disabled={disabledLast} onClick={() => setPage(1)}>
            {lastLabel}
          </Button>
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
