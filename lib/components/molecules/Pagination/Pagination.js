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
  totalPosts,
  showNextBtn,
  showPreviousBtn,
  showLastBtn,
  showFirstBtn,
  currentPageAria,
  paginationAriaLabel,
  nextButtonAria,
  previousButtonAria,
  firstButtonAria,
  lastButtonAria,
}: Props): Node => {
  const [pageNumbers, setPageNumbers] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [disabledFirstNdPrevious, setDisabledFirstNdPrevious] = useState(false);
  const [disabledNextAndLast, setDisabledNextAndLast] = useState(false);


  useEffect(() => {
    const pages = [];
    let i = 0;
    do {
      i += 1;
      pages.push(i);
    } while (i <= Math.floor(data.length / pageSize));
    setPageNumbers(pages);
  }, []);

  useEffect(() => {
    setDisabledFirstNdPrevious(currentPage === 1);
    setDisabledNextAndLast(currentPage === pageNumbers.length);
  }, [currentPage]);

  const getCurrentDataSet = () => {
    const indexOfLastPost = currentPage * pageSize;
    const indexOfFirstPost = indexOfLastPost - pageSize;
    return data && data.length && data.slice(indexOfFirstPost, indexOfLastPost);
  };

  const executePagination = page => {
    setCurrentPage(page);
    if (typeof onPageChange === 'function') {
      onPageChange(page);
    }
  };

  const handleForwardClick = () => {
    const nextPage = currentPage + 1;
    executePagination(nextPage);
  };

  const handleBackwardClick = () => {
    const previousPage = currentPage - 1;
    executePagination(previousPage);
  };

  const jumpToFirst = () => {
    const firstPage = 1;
    executePagination(firstPage);
  };

  const jumpToLast = () => {
    const lastPage = pageNumbers.length;
    executePagination(firstPage);
  };

  const renderDataComponent = () => {
    if (typeof renderPaginationComponent === 'function') {
      return renderPaginationComponent({
        data: getCurrentDataSet(),
        currentPage,
      });
    }
  };

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
                disabled={disabledFirstNdPrevious}
                onClick={jumpToFirst}
              >
                {firstLabel}
              </Button>
            </li>
          )}
          {showPreviousBtn && (
            <li className="previous">
              <Button
                aria-label={previousButtonAria}
                disabled={disabledFirstNdPrevious}
                onClick={handleBackwardClick}
              >
                {previousLabel}
              </Button>
            </li>
          )}

          <>
            <PaginationList
              pageNumbers={pageNumbers}
              executePagination={executePagination}
              currentPage={currentPage}
              currentPageAria={currentPageAria}
            />
          </>
          {showNextBtn && (
            <li className="next">
              <Button
                aria-label={nextButtonAria}
                disabled={disabledNextAndLast}
                onClick={handleForwardClick}
              >
                {nextLabel}
              </Button>
            </li>
          )}
          {showLastBtn && (
            <li className="last">
              <Button
                aria-label={lastButtonAria}
                disabled={disabledNextAndLast}
                onClick={jumpToLast}
              >
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
};

export default styled(Pagination)`
  ${styles};
`;

export { Pagination as PaginationVanilla };
