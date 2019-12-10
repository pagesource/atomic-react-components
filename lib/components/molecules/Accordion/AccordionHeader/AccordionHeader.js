// @flow
/**
 *
 * AccordionHeader
 *
 */
import React from 'react';
import type { Node } from 'react';
import styled from 'styled-components';

import styles from './AccordionHeader.style';

type Props = {
  className?: string,
  children: Node,
};

const AccordionHeader = ({ children, className }: Props): Node => (
  <summary className={className}>{children}</summary>
);

AccordionHeader.defaultProps = {
  className: '',
};

export default styled(AccordionHeader)`
  ${styles};
`;

export { AccordionHeader as AccordionHeaderVanilla };
