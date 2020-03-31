import React from 'react';
import Button from '../../atoms/Button';

const PaginationList = ({
  pageNumbers,
  executePagination,
  activePage,
  currentPageAria,
  gotoPageAria,
}) => {
  return (
    pageNumbers &&
    pageNumbers.map((page) => {
      return (
        <>
          <li key={page} className="page-item">
            <Button
              aria-label={
                activePage === page
                  ? `${currentPageAria}  ${activePage} `
                  : `${gotoPageAria} ${page}`
              }
              onClick={() => executePagination(page)}
              className={activePage === page ? 'active' : ''}
            >
              {page}
            </Button>
          </li>
        </>
      );
    })
  );
};

export default PaginationList;
