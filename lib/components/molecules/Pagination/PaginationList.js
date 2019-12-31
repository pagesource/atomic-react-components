import React from 'react';
import Button from '../../atoms/Button';

const PaginationList = ({ pageNumbers, executePagination, activePage, currentPageAria }) => {
  return (
    pageNumbers &&
    pageNumbers.map(number => (
      <li key={number} className="page-item">
        <Button
          aria-label={`${currentPageAria} ${activePage}`}
          onClick={() => executePagination(number)}
          className={activePage === number ? 'active' : ''}
        >
          {number}
        </Button>
      </li>
    ))
  );
};

export default PaginationList;
