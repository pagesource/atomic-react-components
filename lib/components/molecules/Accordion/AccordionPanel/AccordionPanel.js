// @flow
/**
 *
 * AccordionPanel
 *
 */
import React from 'react';
import styled from 'styled-components';

import styles from './AccordionPanel.style';
import type { Node } from 'react';

type Props = {
  className?: string,
  children: Node,
};

const AccordionPanel = ({ children, className }: Props): Node => (
  	<div className={className}>
		{children}
	</div>
);

AccordionPanel.defaultProps = {
	className: '',
	children: '',
};

export default styled(AccordionPanel)`
  ${styles};
`;

export { AccordionPanel as AccordionPanelVanilla };
