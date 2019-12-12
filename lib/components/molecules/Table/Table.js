// @flow

import React, { Children } from 'react';
import styled from 'styled-components';

import styles from './Table.style';
import type { Props, HeadProps } from './types';

const Head = ({ children }: HeadProps) => <th>{children}</th>;

const Body = ({ children, item }) => {
  return children.map(child => {
    const { dataMappingKey, cellDataUsingComponent } = child.props;
    return (
      <td role="cell">
        {item[dataMappingKey] !== undefined ? item[dataMappingKey] : cellDataUsingComponent()}
      </td>
    );
  });
};

const VerticalTable = ({ children, data }) => {
  return data.map(item => (
    <td role="cell" key={item.id}>
      {item[children.props.dataMappingKey]}
    </td>
  ));
};

const Table = ({ children, data, className, vertical, ...props }: Props) => {
  return (
    <table className={className} {...props}>
      {vertical ? (
        <tbody>
          {Children.map(children, child => (
            <tr key={child.props.children}>
              <th role="columnheader">{child.props.children}</th>
              <VerticalTable data={data}>{child}</VerticalTable>
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
                <Body item={item}>{children}</Body>
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
