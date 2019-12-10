import React from 'react';
import { storiesOf } from '@storybook/react';
// import { action } from '@storybook/addon-actions';
import defaultConfig from './AccordionHeader.mock';

// Import Styled Component to showcase variations
import AccordionHeader, { AccordionHeaderVanilla } from '.';

storiesOf('Molecules/AccordionHeader', module).addParameters({ jest: ['AccordionHeader', 'AccordionHeaderVanilla']
})
.add('Knobs', () => (
<AccordionHeaderVanilla {...defaultConfig} />
))
.add('AccordionHeader', () =>
<AccordionHeader {...defaultConfig} />);
