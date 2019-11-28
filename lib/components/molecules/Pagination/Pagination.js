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

import List from '../List';
import Button from '../../atoms/Button';

const Pagination = ({
  data,
  page: total,
  per_page: perPage,
  makePaginationRequest,
}: Props): Nav => {
  const pageNumbers = [];

  if (total !== null) {
    let i = 0;
    do {
      i += 1;
      pageNumbers.push(i);
    } while (i <= Math.ceil(total / perPage));
  }

  const tableData =
    data &&
    data.map(paginationData => {
      return (
        <tr key={data.id}>
          <td>{paginationData.first_name && paginationData.Propsfirst_name}</td>
          <td>{paginationData.last_name && paginationData.last_name}</td>
          <td>{paginationData.email && paginationData.email}</td>
          <td>{paginationData.avatar && <img src={paginationData.avatar} alt="" />}</td>
        </tr>
      );
    });

  return (
    <div className={styles.default}>
      <table>{tableData}</table>
      <List ListType="ul" aria-label="Pagination" inline borderSeparator>
        {pageNumbers &&
          pageNumbers.map(index => (
            <li key={`pagination-item-${index.toString()}`}>
              <Button arial-lable="link" makePaginationRequest={makePaginationRequest(index)}>
                {index}
              </Button>
            </li>
          ))}
      </List>
    </div>
  );
};

Pagination.defaultProps = {
  data: {},
  currentPage: 0,
  total: 0,
  perPage: 0,
};

export default styled(Pagination)`
  ${styles};
`;

export { Pagination as PaginationVanilla };
