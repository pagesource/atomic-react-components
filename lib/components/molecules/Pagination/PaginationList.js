import React from 'react';
import Button from '../../atoms/Button';

const LEFT_PAGE = 'LEFT';
const RIGHT_PAGE = 'RIGHT';

const PaginationList = ({
  pageNumbers,
  executePagination,
  activePage,
  currentPageAria,
  previousButtonAria,
  disabledFirstNdPrevious,
  handleBackwardClick,
  previousLabel,
  nextButtonAria,
  disabledNextAndLast,
  handleForwardClick,
  nextLabel,
}) => {
  return (
    pageNumbers &&
    pageNumbers.map(page => {
      if (page === LEFT_PAGE)
        return (
          <li className="previous">
            <Button
              aria-label={previousButtonAria}
              disabled={disabledFirstNdPrevious}
              onClick={handleBackwardClick}
            >
              {previousLabel}
            </Button>
          </li>
        );
      if (page === RIGHT_PAGE)
        return (
          <li className="next">
            <Button
              aria-label={nextButtonAria}
              disabled={disabledNextAndLast}
              onClick={handleForwardClick}
            >
              {nextLabel}
            </Button>
          </li>
        );
      return (
        <li key={page} className="page-item">
          <Button
            aria-label={`${currentPageAria} ${activePage}`}
            onClick={() => executePagination(page)}
            className={activePage === page ? 'active' : ''}
          >
            {page}
          </Button>
        </li>
      );
    })
  );
};

export default PaginationList;
