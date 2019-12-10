// @flow
/**
 *
 * Accordion
 *
 */
import React from 'react';
import styled from 'styled-components';
import styles from './Accordion.style';
import AccordionHeader from './AccordionHeader';
import AccordionPanel from './AccordionPanel';
import type { Node } from 'react';

type Props = {
	className? : string,
	accordionContent? : [],
	isOpen? : boolean,
};

const Accordion = ({ className, accordionContent, isOpen }: Props): Node => (
	<div className={className}>
		{accordionContent && accordionContent.map((item, index) => (
			<details className="accordion-item" key={`accordion-${index.toString()}`} open={item.isOpen}>
				<AccordionHeader className={item.headerClassName || ''}>
					{item.accordionHeader}
				</AccordionHeader>
				<AccordionPanel className={item.panelClassName || ''}>
					{item.accordionBody}
				</AccordionPanel>
			</details>
        ))}
	</div>
);

Accordion.defaultProps = {
	className: '',
	isOpen: false,
};

export default styled(Accordion)`
  ${styles};
`;

export { Accordion as AccordionVanilla };
