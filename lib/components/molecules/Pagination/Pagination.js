// @flow
/**
 *
 * Pagination
 *
 */
import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

import styles from './Pagination.style';
import type { Node } from './types';
import { noop } from '@babel/types';

type Props = {
  size: number,
  render: Function,
  items: Array,
  className: Array | string,
};
const buttons = (n, component) => Array.from('x'.repeat(n), (_, s) => component(s + 1));
const Pagination = ({ size, render, items }: Props): Node => {
  const [current, setCurrentPage] = useState(1);
  const pages = Math.ceil(items.length / size);
  const button = n => (
    <button key={n} onClick={() => setCurrentPage(n)}>
      Page {n}
    </button>
  );
  const pageButtons = pages > 1 ? buttons(pages, button) : '';
  const start = (current - 1) * size;
  const end = start + size;
  items = items.slice(start, end);
  return (
    <div>
      <>{render(items)}</>
      {pageButtons}
    </div>
  );
};

Pagination.defaultProps = {
  size: 10,
  render: () => {},
  items: [],
  className: '',
};

export default styled(Pagination)`
  ${styles};
`;

export { Pagination as PaginationVanilla };
