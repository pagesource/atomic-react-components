import React, { cloneElement, Children } from 'react';
import styled from 'styled-components';

import styles from './Table.style';
import type { Props } from './types';

const Table = ({ children, data, className, ...props }: Props) => {
  return (
    <table className={className} {...props}>
      <thead>
        <tr>
          {Children.map(children, column => (
            <th key={column.props.name}>{cloneElement(column, { intent: 'header' })}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {data.map(item => (
          <tr key={item.id}>
            {Children.map(children, column => (
              <td>
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
};

Table.Column = ({ intent, label, value }) => (intent === 'header' ? label : value);

Table.defaultProps = {};

export default styled(Table)`
  ${styles};
`;

export { Table as TableVanilla };
