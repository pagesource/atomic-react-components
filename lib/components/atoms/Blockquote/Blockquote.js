// @flow
/**
 *
 * Blockquote
 *
 */
import React from 'react';
import styled from 'styled-components';

import styles from './Blockquote.style';
import type { Props } from './types';

const Blockquote = ({ children, className }: Props): Node => (
  <blockquote className={className}>{children}</blockquote>
);

Blockquote.defaultProps = {
  className: '',
  children: '',
};

export default styled(Blockquote)`
  ${styles};
`;

export { Blockquote as BlockquoteVanilla };
