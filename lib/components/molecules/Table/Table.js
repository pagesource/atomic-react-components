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
            const { content, showComponentInHeader, method } = column.props.render;
            return showComponentInHeader ? <th>{method()}</th> : <th>{content}</th>;
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
              const { showComponentInCell, method } = column.props.render;
              return showComponentInCell ? (
                <td role="cell">{method()}</td>
              ) : (
                <td role="cell">{item[dataMappingKey]}</td>
              );
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
  showComponentInHeader: false,
  showComponentInCell: false,
};

export default styled(Table)`
  ${styles};
`;

export { Table as TableVanilla };
