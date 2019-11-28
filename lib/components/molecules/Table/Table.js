// @flow
/**
 *
 * Table
 *
 */
import React from 'react';
import type { Props } from './types';
import styled from 'styled-components';

import styles from './Table.style';

type tableProps = {
  className?: string,
  data: Array,
};

const Table = ({ data, className, ...others }: tableProps): Node => {
  const columnName = Object.keys(data[0]);

  const headers = (
    <tr>
      {columnName.map((name, n) => (
        // eslint-disable-next-line react/no-array-index-key
        <th key={n}>{name}</th>
      ))}
    </tr>
  );

  const rows = data.map((item, i) => (
    // eslint-disable-next-line react/no-array-index-key
    <tr key={i}>
      {columnName.map((prop, p) => (
        // eslint-disable-next-line react/no-array-index-key
        <td key={p}>{item[prop]}</td>
      ))}
    </tr>
  ));

  return (
    <table className={className} {...others}>
      <thead>{headers}</thead>
      <tbody>{rows}</tbody>
    </table>
  );
};

Table.defaultProps = {
  className: '',
};

export default styled(Table)`
  ${styles};
`;

export { Table as TableVanilla };
