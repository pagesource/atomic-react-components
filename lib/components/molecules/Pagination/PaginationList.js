import React from 'react';
import Button from '../../atoms/Button';

const PaginationList = ({ pageNumbers, paginate, currentPage }) => {
  return (
    pageNumbers &&
    pageNumbers.map(number => (
      <li key={number} className="page-item">
        <Button onClick={() => paginate(number)} className={currentPage === number ? 'active' : ''}>
          {number}
        </Button>
      </li>
    ))
  );
};

export default PaginationList;
