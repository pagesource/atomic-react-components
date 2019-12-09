import React, { cloneElement, Children } from 'react';
import styled from 'styled-components';

import styles from './Table.style';
// eslint-disable-next-line flowtype/no-types-missing-file-annotation
import type { Props, ColumnProps } from './types';

// eslint-disable-next-line flowtype/no-types-missing-file-annotation
const Table = ({ children, data, className, ...props }: Props) => {
  return (
    <table className={className} {...props} role="table">
      <thead>
        <tr role="row">
          {Children.map(children, column => (
            <th key={column.props.name} role="columnheader">
              {cloneElement(column, { intent: 'header' })}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {data.map(item => (
          <tr key={item.id} role="row">
            {Children.map(children, column => (
              <td role="cell">
                {cloneElement(column, {
                  intent: 'cell',
                  value: item[column.props.name],
                })}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
};

Table.defaultProps = {
  className: '',
  intent: '',
};

// eslint-disable-next-line flowtype/no-types-missing-file-annotation
Table.Column = ({ intent, label, value }: ColumnProps) => {
  return intent === 'header' ? <em>{label}</em> : <em>{value}</em>;
};

Table.Column.defaultProps = {
  intent: '',
  label: '',
  value: '',
};

export default styled(Table)`
  ${styles};
`;

export { Table as TableVanilla };
