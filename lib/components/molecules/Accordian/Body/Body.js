// @flow
/**
 *
 * Body
 *
 */
import React from 'react';
import styled from 'styled-components';
import styles from './Body.style';

const Body = () => {
  return (
    <p>
      Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ut iste in laudantium voluptates
      autem blanditiis consequuntur fugit, impedit, distinctio
    </p>
  );
};

Body.defaultProps = {};

export default styled(Body)`
  ${styles};
`;

export { Body as BodyVanilla };
