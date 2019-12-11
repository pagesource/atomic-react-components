// @flow

import React, { Children } from 'react';
import styled from 'styled-components';

import styles from './Table.style';
import type { Props } from './types';

const Table = ({ children, data, className, vertical, ...props }: Props) => {
  const Head = () => {
    return (
      <thead>
        <tr role="row">
          {Children.map(children, column => {
            const { content, showInHeader, method } = column.props.render;
            return showInHeader ? <th>{method()}</th> : <th>{content}</th>;
          })}
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
            {Children.map(children, column => {
              const { dataMappingKey } = column.props;
              const { showInCell, method } = column.props.render;
              return showInCell ? <td>{method()}</td> : <td role="cell">{item[dataMappingKey]}</td>;
            })}
          </tr>
        ))}
      </tbody>
    );
  };

  const VerticalHeader = () => {
    return Children.map(children, column => (
      <tr key={column.props.name}>
        <th role="columnheader">{column.props.render.content}</th>
        {data.map(item => (
          <td role="cell" key={item.id}>
            {item[column.props.dataMappingKey]}
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
  className: 'table',
  vertical: false,
  showInHeader: false,
  showInCell: false,
};

export default styled(Table)`
  ${styles};
`;

export { Table as TableVanilla };
