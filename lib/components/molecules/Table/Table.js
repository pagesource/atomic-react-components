/* eslint-disable flowtype/no-types-missing-file-annotation */
import React, { cloneElement, Children } from 'react';
import styled from 'styled-components';

import styles from './Table.style';
// eslint-disable-next-line flowtype/no-types-missing-file-annotation
import type { Props, ColumnProps } from './types';

// eslint-disable-next-line flowtype/no-types-missing-file-annotation
const Table = ({ children, data, className, vertical, ...props }: Props) => {
  const Head = () => {
    return (
      <thead>
        <tr role="row">
          {Children.map(children, column => (
            <th key={column.props.name} role="columnheader">
              {cloneElement(column, { intent: 'header' })}
            </th>
          ))}
        </tr>
      </thead>
    );
  };
  // eslint-disable-next-line no-empty-pattern
  const Tbody = ({}: Props) => {
    return (
      <tbody>
        {data.map(item => (
          <tr key={item.id} role="row">
            {Children.map(children, column => (
              <td role="cell">
                {cloneElement(column, {
                  intent: 'cell',
                  value: item[column.props.dataMappingKey],
                })}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    );
  };

  const VerticalHeader = () => {
    return Children.map(children, column => (
      <tr key={column.props.name}>
        <th role="columnheader">{cloneElement(column, { intent: 'header' })}</th>
        {data.map(item => (
          <td role="cell" key={item.id}>
            {cloneElement(column, {
              intent: 'cell',
              value: item[column.props.dataMappingKey],
            })}
          </td>
        ))}
      </tr>
    ));
  };

  return (
    <table className={className} {...props}>
      {vertical ? (
        <VerticalHeader />
      ) : (
        <>
          <Head />
          <Tbody />
        </>
      )}
    </table>
  );
};

Table.defaultProps = {
  className: 'className',
};

// eslint-disable-next-line flowtype/no-types-missing-file-annotation
Table.Column = ({ intent, value, render }: ColumnProps) => {
  const { method, showInCell, showInHeader, content } = render;
  if (showInHeader && showInCell) return method();
  if (showInCell) return intent === 'header' ? <em>{content}</em> : method();
  return intent === 'header' ? <em>{content}</em> : <em>{value}</em>;
};

Table.Column.defaultProps = {
  value: 'default',
};

export default styled(Table)`
  ${styles};
`;

export { Table as TableVanilla };
