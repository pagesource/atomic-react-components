// @flow
/**
 *
 * Accordion
 *
 */
import React from 'react';
import styled from 'styled-components';
import styles from './Accordion.style';
import type { Node } from 'react';

type Props = {
	className? : string,
	accordionContent? : [],
	isOpen? : boolean,
};

const Accordion = ({ className, accordionContent, isOpen }: Props): Node => 
	<div className={className}>
		{accordionContent && accordionContent.map((item, index) => (
			<details className="accordion-item" key={`accordion-${index.toString()}`} open={item.isOpen}>
				<summary className="accordion-header">
					{item.accordionHeader}
				</summary>
				<div className="accordion-panel">
					{item.accordionBody}
				</div>
			</details>
        ))}
	</div>;

Accordion.defaultProps = {
	className: '',
	isOpen: false,
};

export default styled(Accordion)`
  ${styles};
`;

export { Accordion as AccordionVanilla };
