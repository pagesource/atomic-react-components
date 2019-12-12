// @flow

import React, { Children } from 'react';
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
          {Children.map(children, child => (
            <tr key={child.key}>
              {child}
              {data.map(item => (
                <Cell item={item} key={item.id}>
                  {child}
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
                {Children.map(children, child => (
                  <Cell item={item} key={child.id}>
                    {child}
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
