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
import Button from '../../atoms/Button';
import PaginationList from './PaginationList';

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
  currentPage,
}: Props): Node => {
  const pageNumbers = [];
  let i = 0;

  do {
    i += 1;
    pageNumbers.push(i);
  } while (i <= Math.ceil(totalPosts / postsPerPage));

  const disabledFirstNdPrevious = firstPost <= 1;
  const disabledLast = lastPost === 1;
  const disabledNext = currentPage >= pageNumbers.length;

  return (
    <nav className={className}>
      <ul className="pagination">
        <li className="first">
          <Button
            className="btn-first"
            disabled={disabledFirstNdPrevious}
            onClick={() => paginate(1)}
          >
            {firstLabel}
          </Button>
        </li>
        <li className="previous">
          <Button disabled={disabledFirstNdPrevious} onClick={() => paginate(currentPage - 1)}>
            {previousLabel}
          </Button>
        </li>
        <>
          <PaginationList pageNumbers={pageNumbers} paginate={paginate} currentPage={currentPage} />
        </>
        <li className="next">
          <Button disabled={disabledNext} onClick={() => paginate(currentPage + 1)}>
            {nextLabel}
          </Button>
        </li>
        <li className="last">
          <Button disabled={disabledLast} onClick={() => paginate(currentPage)}>
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
