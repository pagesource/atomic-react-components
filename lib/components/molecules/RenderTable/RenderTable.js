// @flow
/**
 *
 * RenderTable
 *
 */
import React, { cloneElement, Children } from 'react';
import styled from 'styled-components';

import styles from './RenderTable.style';
import type { renderTableProps } from './types';

const RenderTable = ({ children, data, className, ...props }: renderTableProps) => {
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

RenderTable.defaultProps = {
  className: '',
};

RenderTable.Column = ({ intent, label, value }) => (intent === 'header' ? label : value);

RenderTable.defaultProps = {};

export default styled(RenderTable)`
  ${styles};
`;

export { RenderTable as RenderTableVanilla };
