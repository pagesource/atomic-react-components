import React from 'react';
import { storiesOf } from '@storybook/react';
// import { action } from '@storybook/addon-actions';
import defaultConfig from './AccordionPanel.mock';

// Import Styled Component to showcase variations
import AccordionPanel, { AccordionPanelVanilla } from '.';

storiesOf('Molecules/AccordionPanel', module).addParameters({ jest: ['AccordionPanel', 'AccordionPanelVanilla']
})
.add('Knobs', () => (
<AccordionPanelVanilla {...defaultConfig} />
))
.add('AccordionPanel', () =>
<AccordionPanel {...defaultConfig} />);
