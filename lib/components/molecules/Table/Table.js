// @flow

import React from 'react';
import styled from 'styled-components';

import styles from './Table.style';
import type { Props, HeadProps } from './types';

const Head = ({ children }: HeadProps) => <th>{children}</th>;

const Cell = ({ children, item }: Props) => {
  const { dataMappingKey, cellDataUsingComponent } = children.props;
  return (
    <td role="cell">
      {item[dataMappingKey] !== undefined ? item[dataMappingKey] : cellDataUsingComponent()}
    </td>
  );
};

const Table = ({ children, data, className, vertical, ...props }: Props) => {
  return (
    <table className={className} {...props}>
      {vertical ? (
        <tbody>
          {children.map(items => (
            <tr key={items.dataMappingKey}>
              {items}
              {data.map(item => (
                <Cell item={item} key={item.id}>
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
            {data.map(item => (
              <tr key={item.id} role="row">
                {children.map(items => (
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

export default styled(Table)`
  ${styles};
`;

export { Table as TableVanilla };
