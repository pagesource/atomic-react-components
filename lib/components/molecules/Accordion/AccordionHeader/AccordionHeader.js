// @flow
/**
 *
 * AccordionHeader
 *
 */
import React from 'react';
import styled from 'styled-components';

import styles from './AccordionHeader.style';
import type { Node } from 'react';

type Props = {
  className?: string,
  children: Node,
};

const AccordionHeader = ({ children, className }: Props): Node => (
  	<summary className={className}>
		{children}
	</summary>
);

AccordionHeader.defaultProps = {
	className: '',
	children: '',
};

export default styled(AccordionHeader)`
  ${styles};
`;

export { AccordionHeader as AccordionHeaderVanilla };
