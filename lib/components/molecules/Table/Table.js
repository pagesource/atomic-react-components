// @flow
/**
 *
 * Table
 *
 */
import React from 'react';
import styled from 'styled-components';

import styles from './Table.style';
import type { Props } from './types';
import Input from '../InputChoice';
import Button from '../../atoms/Button';

const Table = ({ data, isCheckedBox, isSubmitButton }: Props): Node => {
  const columnName = Object.keys(data[0]);

  const headers = (
    <tr>
      {isCheckedBox && <th key="checkBoxHead">select </th>}
      {columnName.map((name, n) => (
        // eslint-disable-next-line react/no-array-index-key
        <th key={n}>{name}</th>
      ))}
      {isSubmitButton && <th> Action </th>}
    </tr>
  );

  const rows = data.map((item, i) => (
    // eslint-disable-next-line react/no-array-index-key
    <tr key={i}>
      {isCheckedBox && (
        <td>
          <Input
            type="checkbox"
            aria-label="row select"
            id={`rowSelect${i}`}
            name={`rowSelect${i}`}
          />
        </td>
      )}
      {columnName.map((prop, p) => (
        // eslint-disable-next-line react/no-array-index-key
        <td key={p}>{item[prop]}</td>
      ))}
      {isSubmitButton && (
        <td>
          <Button type="button" aria-label="submit">
            Submit
          </Button>
        </td>
      )}
    </tr>
  ));

  return (
    <table>
      <thead>{headers}</thead>
      <tbody>{rows}</tbody>
    </table>
  );
};

export default styled(Table)`
  ${styles};
`;

export { Table as TableVanilla };
