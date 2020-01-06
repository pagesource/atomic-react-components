// @flow
/**
 *
 * Pagination
 *
 */
import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import styles from './Pagination.style';
import type { Props } from './types';
import Button from '../../atoms/Button';
import PaginationList from './PaginationList';

const Pagination = ({
  pageSize,
  data,
  onPageChange,
  className,
  firstLabel,
  lastLabel,
  nextLabel,
  previousLabel,
  renderPaginationComponent,
  showLastBtn,
  showFirstBtn,
  currentPageAria,
  paginationAriaLabel,
  nextButtonAria,
  previousButtonAria,
  firstButtonAria,
  lastButtonAria,
  currentPage,
  pageNeighbours,
}: Props): Node => {
  const [pageNumbers, setPageNumbers] = useState([]);
  const [activePage, setActivePage] = useState(currentPage);
  const [noFirstPreviousCTA, setNoFirstPreviousCTA] = useState(false);
  const [noLastNextCTA, setNoLastNextCTA] = useState(false);

  /**
   * Helper method for creating a range of numbers
   * range(1, 5) => [1, 2, 3, 4, 5]
   */
  const pageRange = (from, to, step = 1) => {
    let i = from;
    const range = [];

    while (i <= to) {
      range.push(i);
      i += step;
    }

    return range;
  };

  useEffect(() => {
    const pages = [];
    let i = 0;
    do {
      i += 1;
      pages.push(i);
    } while (i <= Math.floor(data.length / pageSize));
    setPageNumbers(pages);
    if (!currentPage) {
      setActivePage(1);
    }
  }, []);

  const fetchPageNumbers = () => {
    /**
     * totalNumbers: the total page numbers to show on the control
     * totalBlocks: totalNumbers + 2 to cover for the left(<) and right(>) controls
     */
    const totalPages = Math.ceil(data.length / pageSize);
    const totalNumbers = pageNeighbours * 2 + 3;
    const totalBlocks = totalNumbers + 2;

    if (totalPages > totalBlocks) {
      const startPage = Math.max(2, activePage - pageNeighbours);
      const endPage = Math.min(totalPages - 1, activePage + pageNeighbours);

      let pages = pageRange(startPage, endPage);

      /**
       * hasLeftSpill: has hidden pages to the left
       * hasRightSpill: has hidden pages to the right
       * spillOffset: number of hidden pages either to the left or to the right
       */
      const hasLeftSpill = startPage > 2;
      const hasRightSpill = totalPages - endPage > 1;
      const spillOffset = totalNumbers - (pages.length + 1);

      switch (true) {
        // handle: (1) < {5 6} [7] {8 9} (10)
        case hasLeftSpill && !hasRightSpill: {
          const extraPages = pageRange(startPage - spillOffset, startPage - 1);
          pages = [...extraPages, ...pages];
          break;
        }

        // handle: (1) {2 3} [4] {5 6} > (10)
        case !hasLeftSpill && hasRightSpill: {
          const extraPages = pageRange(endPage + 1, endPage + spillOffset);
          pages = [...pages, ...extraPages];
          break;
        }

        // handle: (1) < {4 5} [6] {7 8} > (10)
        case hasLeftSpill && hasRightSpill:
        default: {
          pages = [...pages];
          break;
        }
      }

      return [1, ...pages, totalPages];
    }

    return pageRange(1, totalPages);
  };

  useEffect(() => {
    setNoFirstPreviousCTA(activePage === 1);
    setNoLastNextCTA(activePage === pageNumbers.length);
  }, [activePage]);

  const getCurrentDataSet = () => {
    const indexOfLastPost = activePage * pageSize;
    const indexOfFirstPost = indexOfLastPost - pageSize;
    return data && data.length && data.slice(indexOfFirstPost, indexOfLastPost);
  };

  const executePagination = page => {
    setActivePage(page);
    if (typeof onPageChange === 'function') {
      onPageChange(page);
    }
  };

  const handleForwardClick = () => {
    const nextPage = activePage + 1;
    executePagination(nextPage);
  };

  const handleBackwardClick = () => {
    const previousPage = activePage - 1;
    executePagination(previousPage);
  };

  const jumpToFirst = () => {
    const firstPage = 1;
    executePagination(firstPage);
  };

  const jumpToLast = () => {
    const lastPage = pageNumbers.length;
    executePagination(lastPage);
  };

  const renderDataComponent = () => {
    if (typeof renderPaginationComponent === 'function') {
      return renderPaginationComponent({
        data: getCurrentDataSet(),
        activePage,
      });
    }
    return false;
  };

  const pages = fetchPageNumbers();

  return (
    <>
      {renderDataComponent()}
      <nav className={className} arial-label={paginationAriaLabel}>
        <ul className="pagination">
          {showFirstBtn && (
            <li className="first">
              <Button
                className="btn-first"
                aria-label={firstButtonAria}
                disabled={noFirstPreviousCTA}
                onClick={jumpToFirst}
              >
                {firstLabel}
              </Button>
            </li>
          )}
          <>
            <li className="previous">
              <Button
                aria-label={previousButtonAria}
                disabled={noFirstPreviousCTA}
                onClick={handleBackwardClick}
              >
                {previousLabel}
              </Button>
            </li>
            <PaginationList
              pageNumbers={pages}
              executePagination={executePagination}
              activePage={activePage}
              currentPageAria={currentPageAria}
            />
            <li className="next">
              <Button
                aria-label={nextButtonAria}
                disabled={noLastNextCTA}
                onClick={handleForwardClick}
              >
                {nextLabel}
              </Button>
            </li>
          </>
          {showLastBtn && (
            <li className="last">
              <Button aria-label={lastButtonAria} disabled={noLastNextCTA} onClick={jumpToLast}>
                {lastLabel}
              </Button>
            </li>
          )}
        </ul>
      </nav>
    </>
  );
};

Pagination.defaultProps = {
  pageSize: 10,
  data: [],
  onPageChange: null,
  className: '',
  firstLabel: 'First',
  lastLabel: 'Last',
  nextLabel: 'Next',
  previousLabel: 'Previous',
  renderPaginationComponent: null,
  totalPosts: null,
  showNextBtn: true,
  showPreviousBtn: true,
  showLastBtn: true,
  showFirstBtn: true,
  currentPageAria: '',
  paginationAriaLabel: '',
  nextButtonAria: '',
  previousButtonAria: '',
  firstButtonAria: '',
  lastButtonAria: '',
  pageNeighbours: 2,
};

export default styled(Pagination)`
  ${styles};
`;

export { Pagination as PaginationVanilla };
