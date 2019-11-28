// @flow
/**
 *
 * AccordionItemPanel
 *
 */
import React, { useState, useRef } from 'react';
import styled from 'styled-components';

import styles from './AccordionItemPanel.style';

function AccordionItemPanel(props) {
	const [setActive, setActiveState] = useState('');
	const [setHeight, setHeightState] = useState('0px');

	const content = useRef(null);

	function toggleAccordion(props) {
		setActiveState(setActive === '' ? 'active' : '');
		setHeightState(setActive === 'active' ? '0px' : `${content.current.scrollHeight}px`);
	}

	return (
		<div className="accordion_item">
			<div className="accordion_heading">
				<button
					className={`accordion_heading ${setActive}`}
					type="button"
					onClick={toggleAccordion}
				>
					<p className="accordion_heading_text">{props.title}</p>
				</button>
			</div>
			<div className="accordion_text" ref={content} style={{ maxHeight: `${setHeight}` }}>
				<div className="accordion__text" dangerouslySetInnerHTML={{ __html: props.content }} />
			</div>
		</div>
	);
}

export default AccordionItemPanel;
