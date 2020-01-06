import React from 'react';
import Button from '../../atoms/Button';

const PaginationList = ({ pageNumbers, executePagination, activePage, currentPageAria }) => {
  return (
    pageNumbers &&
    pageNumbers.map(page => {
      return (
        <>
          <li key={page} className="page-item">
            <Button
              aria-label={`${currentPageAria} ${activePage}`}
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
