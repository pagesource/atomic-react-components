// @flow
/**
 *
 * Header
 *
 */
import React from 'react';
import styled from 'styled-components';
import styles from './Header.style';

const Header = () => {
  return (
    <>
      <span>Accordian</span>Header
    </>
  );
};

Header.defaultProps = {};

export default styled(Header)`
  ${styles};
`;

export { Header as HeaderVanilla };
