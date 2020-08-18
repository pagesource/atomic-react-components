import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import styles from './Table.style';

const Head = ({ children }) => <th>{children}</th>;

const Cell = ({ children, item }) => {
  const { dataMappingKey, cellDataUsingComponent } = children.props;
  return (
    <td role="cell">
      {item[dataMappingKey] !== undefined ? item[dataMappingKey] : cellDataUsingComponent()}
    </td>
  );
};

const Table = ({ children, data, className, vertical, ...props }) => {
  const child = React.Children.toArray(children);
  return (
    <table {...props} className={className}>
      {vertical ? (
        <tbody>
          {child.map((items) => (
            <tr key={items.dataMappingKey}>
              {items}
              {data.map((item) => (
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
            {data.map((item) => (
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

Table.propTypes = {
  className: PropTypes.string,
  data: PropTypes.arrayOf(PropTypes.any).isRequired,
  children: PropTypes.node.isRequired,
  vertical: PropTypes.bool,
  dataMappingKey: PropTypes.string.isRequired,
};

Cell.propTypes = {
  children: PropTypes.node.isRequired,
  item: PropTypes.objectOf(PropTypes.object).isRequired,
};

Head.propTypes = {
  children: PropTypes.node.isRequired,
};

Table.defaultProps = {
  className: 'table',
  vertical: false,
};

const StyledTable = styled(Table)`
  ${styles};
`;

export default StyledTable;

export { Table as TableVanilla };
