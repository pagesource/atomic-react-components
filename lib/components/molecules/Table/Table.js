// @flow

import React, { Children } from 'react';
import styled from 'styled-components';

import styles from './Table.style';
import type { Props } from './types';

const Table = ({ children, data, className, vertical, ...props }: Props) => {
  const Head = child => (
    <th key={child.props.name} role="columnheader">
      {child.props.children}
    </th>
  );

  const Body = (child, item) => {
    const { dataMappingKey } = child.props;
    return (
      <td role="cell">
        {typeof dataMappingKey === 'function' ? dataMappingKey() : item[dataMappingKey]}
      </td>
    );
  };

  const VerticalHeader = child => {
    return data.map(item => (
      <td role="cell" key={item.id}>
        {item[child.props.dataMappingKey]}
      </td>
    ));
  };

  return (
    <table className={className} {...props}>
      {vertical ? (
        Children.map(children, child => (
          <tr key={child.props.children}>
            <th role="columnheader">{child.props.children}</th>
            {VerticalHeader(child)}
          </tr>
        ))
      ) : (
        <>
          <thead>
            <tr role="row">{Children.map(children, th => Head(th))}</tr>
          </thead>
          <tbody>
            {data.map(item => (
              <tr key={item.id} role="row">
                {Children.map(children, td => Body(td, item))}
              </tr>
            ))}
          </tbody>
        </>
      )}
    </table>
  );
};

Table.Thead = ({ children }) => {
  return children;
};

Table.defaultProps = {
  className: 'table',
  vertical: false,
};

export default styled(Table)`
  ${styles};
`;

export { Table as TableVanilla };
