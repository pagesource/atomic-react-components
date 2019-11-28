// @flow
/**
 *
 * AccordionBasic
 *
 */
import React from 'react';
import styled from 'styled-components';
import type { Node } from 'react';
import styles from './AccordionBasic.style';

type Props = {
  className?: string,
  title?: string,
  value?: string,
  isOpen?: boolean,
};

const AccordionBasic = ({ className, title, value, isOpen }: Props): Node => (
  	<li className={className}>
		<details className="accordion-item" open={isOpen}>
			<summary className="accordion-item_heading">
				{title}
			</summary>
			<p>{value}</p>
		</details>
	</li>
);

AccordionBasic.defaultProps = {
  className: '',
  title: 'Accordion Heading',
  value: 'Accordion content',
  isOpen: false,
};

export default styled(AccordionBasic)
`
  ${styles};
`;

export { AccordionBasic as AccordionBasicVanilla };
