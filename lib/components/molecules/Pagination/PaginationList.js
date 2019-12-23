import React from 'react';
import Button from '../../atoms/Button';

const PaginationList = ({ pageNumbers, executePagination, currentPage, currentPageAria }) => {
  return (
    pageNumbers &&
    pageNumbers.map(number => (
      <li key={number} className="page-item">
        <Button
          aria-label={`${currentPageAria} ${currentPage}`}
          onClick={() => executePagination(number)}
          className={currentPage === number ? 'active' : ''}
        >
          {number}
        </Button>
      </li>
    ))
  );
};

export default PaginationList;
