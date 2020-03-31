// @flow

import React from 'react';
import type { Node, ComponentType } from 'react';
import styled from 'styled-components';

import styles from './Table.style';
import type { TableProps, HeadProps, CellProps } from './types';

const Head = ({ children }: HeadProps) => <th>{children}</th>;

const Cell = ({ children, item }: CellProps) => {
  const { dataMappingKey, cellDataUsingComponent } = children.props;
  return (
    <td role="cell">
      {item[dataMappingKey] !== undefined ? item[dataMappingKey] : cellDataUsingComponent()}
    </td>
  );
};

const Table = ({ children, data, className, vertical, ...props }: TableProps): Node => {
  const child = React.Children.toArray(children);
  return (
    <table {...props} className={className}>
      {vertical ? (
        <tbody>
          {child.map((items) => (
            <tr key={items.dataMappingKey}>
              {items}
              {data.map((item: any) => (
                <Cell item={item} key={`${item.id}${items.key}`}>
                  {items}
                </Cell>
              ))}
            </tr>
          ))}
        </tbody>
      ) : (
        <>
          <thead>
            <tr role="row">{children}</tr>
          </thead>
          <tbody>
            {data.map((item: any) => (
              <tr key={item.id} role="row">
                {child.map((items) => (
                  <Cell item={item} key={`${item.id}${items.key}`}>
                    {items}
                  </Cell>
                ))}
              </tr>
            ))}
          </tbody>
        </>
      )}
    </table>
  );
};

Table.Head = Head;

Table.defaultProps = {
  className: 'table',
  vertical: false,
};

const StyledTable: ComponentType<TableProps> = styled(Table)`
  ${styles};
`;

export default StyledTable;

export { Table as TableVanilla };
