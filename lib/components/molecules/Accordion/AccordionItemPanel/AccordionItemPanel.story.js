import React from 'react';
import { storiesOf } from '@storybook/react';
// import { action } from '@storybook/addon-actions';
import defaultConfig from './AccordionItemPanel.mock';

// Import Styled Component to showcase variations
import AccordionItemPanel, { AccordionItemPanelVanilla } from '.';

// TODO: indentation is not working fine in editor. Need to check for .hbs files
// $FlowFixMe eslint-disable-next-line extra-rules/no-commented-out-code
storiesOf('Molecules', module)
	.addParameters({
		jest: ['AccordionItemPanel', 'AccordionItemPanelVanilla'],
	})
	.add('CTA', () => <AccordionItemPanel {...defaultConfig} />);
